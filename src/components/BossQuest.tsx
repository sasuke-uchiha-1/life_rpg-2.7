import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Zap, Target, Clock, Star } from 'lucide-react';

interface BossQuestProps {
  title: string;
  description: string;
  difficulty: 'Elite' | 'Master' | 'Legendary';
  xpReward: number;
  timeLimit?: string;
  requirements: string[];
  skillCategory: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  onAccept?: () => void;
}

const BossQuest: React.FC<BossQuestProps> = ({
  title,
  description,
  difficulty,
  xpReward,
  timeLimit,
  requirements,
  skillCategory,
  isUnlocked,
  isCompleted,
  onAccept
}) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Elite':
        return 'from-purple-600 to-blue-600';
      case 'Master':
        return 'from-orange-600 to-red-600';
      case 'Legendary':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-600 to-gray-700';
    }
  };

  const getDifficultyIcon = () => {
    switch (difficulty) {
      case 'Elite':
        return <Star className="h-5 w-5" />;
      case 'Master':
        return <Zap className="h-5 w-5" />;
      case 'Legendary':
        return <Crown className="h-5 w-5" />;
      default:
        return <Target className="h-5 w-5" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative p-6 bg-gradient-to-br from-gray-900/80 to-slate-900/40 border-2 rounded-2xl transition-all duration-300 ${
        isCompleted 
          ? 'border-green-500/50 bg-green-900/20' 
          : isUnlocked 
            ? 'border-yellow-500/50 hover:border-yellow-400/70 hover:shadow-2xl hover:shadow-yellow-500/20' 
            : 'border-gray-600/30 opacity-60'
      }`}
    >
      {/* Epic Border Animation */}
      {isUnlocked && !isCompleted && (
        <motion.div
          animate={{ 
            boxShadow: [
              '0 0 20px rgba(234, 179, 8, 0.3)',
              '0 0 40px rgba(234, 179, 8, 0.5)',
              '0 0 20px rgba(234, 179, 8, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
        />
      )}

      {/* Completion Badge */}
      {isCompleted && (
        <div className="absolute -top-3 -right-3">
          <div className="p-2 bg-green-600 rounded-full">
            <Crown className="h-4 w-4 text-white" />
          </div>
        </div>
      )}

      {/* Lock Overlay */}
      {!isUnlocked && (
        <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="p-3 bg-gray-700 rounded-full mb-2 mx-auto w-fit">
              <Target className="h-6 w-6 text-gray-400" />
            </div>
            <p className="text-gray-400 font-semibold">Locked</p>
            <p className="text-xs text-gray-500">Complete requirements to unlock</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 bg-gradient-to-r ${getDifficultyColor()} rounded-lg`}>
              {getDifficultyIcon()}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="text-sm text-gray-400">{skillCategory} • {difficulty} Boss</p>
            </div>
          </div>
          {timeLimit && (
            <div className="flex items-center gap-1 text-orange-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-semibold">{timeLimit}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed">{description}</p>

        {/* Requirements */}
        <div>
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Requirements:</h4>
          <div className="space-y-1">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                {req}
              </div>
            ))}
          </div>
        </div>

        {/* Reward & Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-lg">+{xpReward} XP</span>
          </div>
          
          {isUnlocked && !isCompleted && (
            <button
              onClick={onAccept}
              className={`px-6 py-2 bg-gradient-to-r ${getDifficultyColor()} hover:opacity-90 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105`}
            >
              Accept Challenge
            </button>
          )}
          
          {isCompleted && (
            <div className="px-6 py-2 bg-green-600/20 text-green-400 font-bold rounded-lg border border-green-500/30">
              Mastered
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BossQuest;