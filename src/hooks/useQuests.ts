import { useState, useEffect } from 'react';
import { supabase, Quest } from '../lib/supabase';
import { useAuth } from './useAuth';

export const useQuests = () => {
  const { userProfile } = useAuth();
  const [quests, setQuests] = useState<Quest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userProfile) {
      fetchQuests();
    }
  }, [userProfile]);

  const fetchQuests = async () => {
    if (!userProfile) return;

    try {
      const { data, error } = await supabase
        .from('quests')
        .select('*')
        .eq('user_id', userProfile.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching quests:', error);
      } else {
        setQuests(data || []);
      }
    } catch (error) {
      console.error('Error fetching quests:', error);
    } finally {
      setLoading(false);
    }
  };

  const addQuest = async (title: string, category: string, xpReward: number = 50) => {
    if (!userProfile) return;

    try {
      const { data, error } = await supabase
        .from('quests')
        .insert({
          user_id: userProfile.id,
          title,
          category,
          xp_reward: xpReward
        })
        .select()
        .single();

      if (error) {
        console.error('Error adding quest:', error);
      } else {
        setQuests(prev => [data, ...prev]);
      }
    } catch (error) {
      console.error('Error adding quest:', error);
    }
  };

  const completeQuest = async (questId: string) => {
    if (!userProfile) return;

    try {
      // Update quest status
      const { data: quest, error: questError } = await supabase
        .from('quests')
        .update({ 
          status: 'completed',
          completed_at: new Date().toISOString()
        })
        .eq('id', questId)
        .select()
        .single();

      if (questError) {
        console.error('Error completing quest:', questError);
        return;
      }

      // Update XP
      const { data: currentXP } = await supabase
        .from('user_xp')
        .select('*')
        .eq('user_id', userProfile.id)
        .single();

      if (currentXP) {
        const newTotalXP = currentXP.total_xp + quest.xp_reward;
        const newLevel = Math.floor(newTotalXP / 1000) + 1; // 1000 XP per level

        await supabase
          .from('user_xp')
          .update({
            total_xp: newTotalXP,
            level: newLevel
          })
          .eq('user_id', userProfile.id);
      }

      // Update streak
      const today = new Date().toISOString().split('T')[0];
      const { data: currentStreak } = await supabase
        .from('user_streaks')
        .select('*')
        .eq('user_id', userProfile.id)
        .single();

      if (currentStreak) {
        const lastQuestDate = currentStreak.last_quest_date;
        let newStreak = currentStreak.current_streak;

        if (lastQuestDate !== today) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split('T')[0];

          if (lastQuestDate === yesterdayStr) {
            newStreak += 1;
          } else if (lastQuestDate !== today) {
            newStreak = 1;
          }

          await supabase
            .from('user_streaks')
            .update({
              current_streak: newStreak,
              longest_streak: Math.max(newStreak, currentStreak.longest_streak),
              last_quest_date: today
            })
            .eq('user_id', userProfile.id);
        }
      }

      // Update local state
      setQuests(prev => prev.map(q => 
        q.id === questId ? { ...q, status: 'completed' as const, completed_at: quest.completed_at } : q
      ));

    } catch (error) {
      console.error('Error completing quest:', error);
    }
  };

  const toggleQuestComplete = async (questId: string) => {
    const quest = quests.find(q => q.id === questId);
    if (!quest) return;

    if (quest.status === 'pending') {
      await completeQuest(questId);
    } else {
      // Uncomplete quest (remove XP, etc.)
      try {
        const { data: updatedQuest, error } = await supabase
          .from('quests')
          .update({ 
            status: 'pending',
            completed_at: null
          })
          .eq('id', questId)
          .select()
          .single();

        if (error) {
          console.error('Error uncompleting quest:', error);
        } else {
          setQuests(prev => prev.map(q => 
            q.id === questId ? { ...q, status: 'pending' as const, completed_at: null } : q
          ));
        }
      } catch (error) {
        console.error('Error uncompleting quest:', error);
      }
    }
  };

  return {
    quests,
    loading,
    addQuest,
    completeQuest,
    toggleQuestComplete,
    refetch: fetchQuests
  };
};