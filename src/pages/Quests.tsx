import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useQuests } from '../hooks/useQuests';
import Quest from '../components/Quest';
import UserQuestModal from '../components/UserQuestModal';
import { 
  Target, 
  Crown, 
  Plus,
  CheckCircle,
  Calendar,
  Repeat
} from 'lucide-react';

const Quests = () => {
  const { user, userProfile, loading: authLoading } = useAuth();
  const { quests, loading: questsLoading, addQuest, toggleQuestComplete } = useQuests();
  const [activeTab, setActiveTab] = useState('user');
  const [isQuestModalOpen, setIsQuestModalOpen] = useState(false);

  // Redirect if not authenticated
  if (!user && !authLoading) {
    return <Navigate to="/auth" replace />;
  }

  if (authLoading || questsLoading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Check if user has updated their profile (any field filled)
  const hasProfileData = userProfile && (
    userProfile.username || 
    userProfile.character_class || 
    userProfile.avatar_emoji !== '🎯'
  );

  // Convert quests to the format expected by the UI
  const userQuests = quests.map(quest => ({
    id: quest.id,
    title: quest.title,
    category: quest.category,
    completed: quest.status === 'completed',
    xp: quest.xp_reward,
    repeatFrequency: 'daily' // Default for now, will be enhanced later
  }));

  const handleAddQuest = (newQuest: { title: string; category: string; xp: number; repeatFrequency: string; customDays?: number }) => {
    addQuest(newQuest.title, newQuest.category, newQuest.xp);
  };

  const handleToggleQuest = (questId: string) => {
    toggleQuestComplete(questId);
  };

  const getRepeatIcon = (frequency: string) => {
    switch (frequency) {
      case 'daily':
        return <Calendar className="h-4 w-4" />;
      case 'weekly':
        return <Repeat className="h-4 w-4" />;
      default:
        return <Target className="h-4 w-4" />;
    }
  };

  const getRepeatLabel = (frequency: string) => {
    switch (frequency) {
      case 'daily': return 'Daily';
      case 'weekly': return 'Weekly';
      case 'monthly': return 'Monthly';
      case 'one-time': return 'One-time';
      default: return 'Custom';
    }
  };

  return (
    <div className="pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quest Center
            </span>
          </h1>
          <p className="text-xl text-gray-300">Manage your training sessions and epic challenges</p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex bg-gray-800/50 rounded-xl p-1 mb-8 max-w-md"
        >
          <button
            onClick={() => setActiveTab('user')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold rounded-lg transition-all duration-300 ${
              activeTab === 'user'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Target className="h-4 w-4" />
            Your Quests
          </button>
          <button
            onClick={() => setActiveTab('boss')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold rounded-lg transition-all duration-300 ${
              activeTab === 'boss'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Crown className="h-4 w-4" />
            Boss Quests
          </button>
        </motion.div>

        {/* User Quests Tab */}
        {activeTab === 'user' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Your Training Sessions</h2>
              <button 
                onClick={() => setIsQuestModalOpen(true)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
              >
                <Plus className="h-5 w-5" />
                Add Quest
              </button>
            </div>

            <div className="space-y-4">
              {userQuests.map((quest, index) => (
                <motion.div
                  key={quest.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 border rounded-xl transition-all cursor-pointer ${
                    quest.completed 
                      ? 'bg-green-900/20 border-green-500/30' 
                      : 'bg-gray-800/30 border-gray-600/30 hover:border-cyan-500/50'
                  }`}
                  onClick={() => handleToggleQuest(quest.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${quest.completed ? 'bg-green-600' : 'bg-gray-600'}`}>
                        {quest.completed ? (
                          <CheckCircle className="h-6 w-6 text-white" />
                        ) : (
                          <Target className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-semibold ${quest.completed ? 'text-green-400 line-through' : 'text-white'}`}>
                          {quest.title}
                        </h4>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm text-gray-400">{quest.category}</span>
                          <div className="flex items-center gap-1 text-sm text-gray-400">
                            {getRepeatIcon(quest.repeatFrequency)}
                            {getRepeatLabel(quest.repeatFrequency)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xl font-bold ${quest.completed ? 'text-green-400' : 'text-cyan-400'}`}>
                        +{quest.xp} XP
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {userQuests.length === 0 && (
                <div className="text-center py-16">
                  <Target className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">No Quests Yet</h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Create your first quest to begin your kaizen journey. Set up daily, weekly, or custom training sessions.
                  </p>
                  <button
                    onClick={() => setIsQuestModalOpen(true)}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300"
                  >
                    Create Your First Quest
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Boss Quests Tab */}
        {activeTab === 'boss' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Crown className="h-8 w-8 text-yellow-400" />
                Boss Quests
              </h2>
              <p className="text-gray-300">Epic challenges that test your mastery and unlock legendary rewards</p>
            </div>
            
            {!hasProfileData ? (
              <div className="text-center py-16">
                <Crown className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Boss Quests Await</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Complete your profile first, and our AI sensei will generate epic boss challenges 
                  tailored to your goals and skill level.
                </p>
                <a
                  href="/dashboard"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300"
                >
                  Complete Profile
                </a>
              </div>
            ) : (
              <div className="text-center py-16">
                <Crown className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Boss Quests Coming Soon</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Our AI sensei is analyzing your profile and progress to generate personalized boss challenges.
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Quest Modal */}
        <UserQuestModal
          isOpen={isQuestModalOpen}
          onClose={() => setIsQuestModalOpen(false)}
          onAddQuest={handleAddQuest}
        />
      </div>
    </div>
  );
};

export default Quests;