import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Save, Edit3 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

const UserProfile: React.FC = () => {
  const { userProfile, user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [profileData, setProfileData] = useState({
    username: '',
    character_class: 'warrior',
    avatar_emoji: '🎯',
    mission_statement: '',
    biggest_dream: '',
    daily_routine: '',
    greatest_strength: '',
    biggest_weakness: '',
    ideal_day: '',
    biggest_challenge: '',
    motivation_source: ''
  });

  const profileQuestions = [
    {
      key: 'mission_statement',
      label: 'What is your personal mission statement?',
      placeholder: 'Describe your core purpose and values...'
    },
    {
      key: 'biggest_dream',
      label: 'What is your biggest dream or long-term goal?',
      placeholder: 'Share your ultimate aspiration...'
    },
    {
      key: 'daily_routine',
      label: 'Describe your ideal daily routine',
      placeholder: 'Walk through your perfect day from morning to night...'
    },
    {
      key: 'greatest_strength',
      label: 'What is your greatest strength?',
      placeholder: 'What do you excel at naturally?...'
    },
    {
      key: 'biggest_weakness',
      label: 'What is your biggest weakness or area for improvement?',
      placeholder: 'What would you like to work on?...'
    },
    {
      key: 'ideal_day',
      label: 'Describe your ideal day off',
      placeholder: 'How would you spend a perfect free day?...'
    },
    {
      key: 'biggest_challenge',
      label: 'What is your biggest current challenge?',
      placeholder: 'What obstacle are you working to overcome?...'
    },
    {
      key: 'motivation_source',
      label: 'What motivates you most in life?',
      placeholder: 'What drives you to keep going?...'
    }
  ];

  const characterClasses = [
    { value: 'warrior', label: '⚔️ Warrior', description: 'Disciplined and determined' },
    { value: 'sage', label: '🧙‍♂️ Sage', description: 'Wise and knowledge-seeking' },
    { value: 'guardian', label: '🛡️ Guardian', description: 'Protective and balanced' },
    { value: 'innovator', label: '⚡ Innovator', description: 'Creative and visionary' }
  ];

  const avatarEmojis = ['🎯', '⚡', '🚀', '🔥', '💪', '🧠', '⭐', '🌟', '💎', '🏆'];

  useEffect(() => {
    if (userProfile) {
      setProfileData({
        username: userProfile.username || '',
        character_class: userProfile.character_class || 'warrior',
        avatar_emoji: userProfile.avatar_emoji || '🎯',
        mission_statement: userProfile.mission_statement || '',
        biggest_dream: userProfile.biggest_dream || '',
        daily_routine: userProfile.daily_routine || '',
        greatest_strength: userProfile.greatest_strength || '',
        biggest_weakness: userProfile.biggest_weakness || '',
        ideal_day: userProfile.ideal_day || '',
        biggest_challenge: userProfile.biggest_challenge || '',
        motivation_source: userProfile.motivation_source || ''
      });
    }
  }, [userProfile]);

  const handleInputChange = (key: string, value: string) => {
    setProfileData(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    if (!userProfile) return;

    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('users')
        .update({
          username: profileData.username,
          character_class: profileData.character_class,
          avatar_emoji: profileData.avatar_emoji,
          mission_statement: profileData.mission_statement,
          biggest_dream: profileData.biggest_dream,
          daily_routine: profileData.daily_routine,
          greatest_strength: profileData.greatest_strength,
          biggest_weakness: profileData.biggest_weakness,
          ideal_day: profileData.ideal_day,
          biggest_challenge: profileData.biggest_challenge,
          motivation_source: profileData.motivation_source,
          updated_at: new Date().toISOString()
        })
        .eq('id', userProfile.id);

      if (error) {
        console.error('Error updating profile:', error);
      } else {
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
            <User className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Warrior Profile</h2>
            <p className="text-gray-400">Shape your character and define your journey</p>
          </div>
        </div>
        
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          disabled={isSaving}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-200"
        >
          {isSaving ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : isEditing ? (
            <Save className="h-4 w-4" />
          ) : (
            <Edit3 className="h-4 w-4" />
          )}
          {isSaving ? 'Saving...' : isEditing ? 'Save Profile' : 'Edit Profile'}
        </button>
      </div>

      {/* Basic Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-6 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-2xl"
      >
        <h3 className="text-xl font-bold text-white mb-6">Character Setup</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Warrior Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="Enter your warrior name"
              />
            ) : (
              <div className="p-3 bg-gray-800/30 border border-gray-600/30 rounded-lg text-white">
                {profileData.username || 'Not set'}
              </div>
            )}
          </div>

          {/* Character Class */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Character Class
            </label>
            {isEditing ? (
              <select
                value={profileData.character_class}
                onChange={(e) => handleInputChange('character_class', e.target.value)}
                className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              >
                {characterClasses.map((cls) => (
                  <option key={cls.value} value={cls.value}>
                    {cls.label} - {cls.description}
                  </option>
                ))}
              </select>
            ) : (
              <div className="p-3 bg-gray-800/30 border border-gray-600/30 rounded-lg text-white">
                {characterClasses.find(c => c.value === profileData.character_class)?.label || 'Warrior'}
              </div>
            )}
          </div>

          {/* Avatar */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Avatar
            </label>
            {isEditing ? (
              <div className="flex flex-wrap gap-2">
                {avatarEmojis.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => handleInputChange('avatar_emoji', emoji)}
                    className={`p-3 text-2xl rounded-lg border-2 transition-all ${
                      profileData.avatar_emoji === emoji
                        ? 'border-cyan-500 bg-cyan-500/20'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-3 bg-gray-800/30 border border-gray-600/30 rounded-lg text-white">
                <span className="text-2xl mr-2">{profileData.avatar_emoji}</span>
                Selected Avatar
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Profile Questions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="p-6 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-2xl"
      >
        <h3 className="text-xl font-bold text-white mb-6">Personal Journey Questions</h3>
        <p className="text-gray-400 mb-6">
          These answers help our AI sensei understand you better and generate personalized quests tailored to your goals.
        </p>
        
        <div className="space-y-6">
          {profileQuestions.map((question, index) => (
            <div key={question.key}>
              <label className="block text-sm font-medium text-cyan-400 mb-2">
                {question.label}
              </label>
              {isEditing ? (
                <textarea
                  value={profileData[question.key as keyof typeof profileData] as string}
                  onChange={(e) => handleInputChange(question.key, e.target.value)}
                  placeholder={question.placeholder}
                  className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  rows={3}
                />
              ) : (
                <div className="p-3 bg-gray-800/30 border border-gray-600/30 rounded-lg text-white min-h-[80px]">
                  {(profileData[question.key as keyof typeof profileData] as string) || (
                    <span className="text-gray-500 italic">Not answered yet</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Account Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-6 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-2xl"
      >
        <h3 className="text-xl font-bold text-white mb-4">Account Information</h3>
        <div className="space-y-3 text-gray-300">
          <div className="flex justify-between">
            <span>Email:</span>
            <span>{user?.email}</span>
          </div>
          <div className="flex justify-between">
            <span>Member Since:</span>
            <span>{userProfile ? new Date(userProfile.created_at).toLocaleDateString() : 'N/A'}</span>
          </div>
          <div className="flex justify-between">
            <span>Last Updated:</span>
            <span>{userProfile ? new Date(userProfile.updated_at).toLocaleDateString() : 'N/A'}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;