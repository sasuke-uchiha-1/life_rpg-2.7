import { useState, useEffect } from 'react';
import { supabase, UserXP, UserStreak, SkillProgress } from '../lib/supabase';
import { useAuth } from './useAuth';

export const useUserStats = () => {
  const { userProfile } = useAuth();
  const [xpData, setXpData] = useState<UserXP | null>(null);
  const [streakData, setStreakData] = useState<UserStreak | null>(null);
  const [skillsData, setSkillsData] = useState<SkillProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userProfile) {
      fetchUserStats();
    }
  }, [userProfile]);

  const fetchUserStats = async () => {
    if (!userProfile) return;

    try {
      // Fetch XP data
      const { data: xp } = await supabase
        .from('user_xp')
        .select('*')
        .eq('user_id', userProfile.id)
        .single();

      // Fetch streak data
      const { data: streak } = await supabase
        .from('user_streaks')
        .select('*')
        .eq('user_id', userProfile.id)
        .single();

      // Fetch skills data
      const { data: skills } = await supabase
        .from('skill_progress')
        .select('*')
        .eq('user_id', userProfile.id)
        .order('skill_name');

      setXpData(xp);
      setStreakData(streak);
      setSkillsData(skills || []);
    } catch (error) {
      console.error('Error fetching user stats:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    xpData,
    streakData,
    skillsData,
    loading,
    refetch: fetchUserStats
  };
};