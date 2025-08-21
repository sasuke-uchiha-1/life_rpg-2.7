import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Zap, Shield, AlertTriangle } from 'lucide-react';

interface StreakSystemProps {
  streak: number;
  xpMultiplier: number;
  status: 'active' | 'warning' | 'broken';
}

const StreakSystem: React.FC<StreakSystemProps> = ({ streak, xpMultiplier, status }) => {
  const getStreakBuff = (streak: number) => {
    if (streak >= 30) return { name: 'Legendary Master', bonus: 50, color: 'from-yellow-500 to-orange-500' };
    if (streak >= 21) return { name: 'Sensei Level', bonus: 35, color: 'from-cyan-500 to-blue-500' };
    if (streak >= 14) return { name: 'Warrior Spirit', bonus: 25, color: 'from-blue-500 to-cyan-500' };
    if (streak >= 7) return { name: 'Discipline Flow', bonus: 15, color: 'from-green-500 to-blue-500' };
    if (streak >= 3) return { name: 'Momentum Build', bonus: 10, color: 'from-cyan-500 to-blue-500' };
    return { name: 'Starting Path', bonus: 0, color: 'from-gray-500 to-gray-600' };
  };

  const buff = getStreakBuff(streak);

  const getStatusIcon = () => {
    switch (status) {
      case 'active':
        return <Flame className="h-5 w-5 text-orange-400" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
      case 'broken':
        return <Shield className="h-5 w-5 text-gray-400" />;
      default:
        return <Flame className="h-5 w-5 text-orange-400" />;
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'active':
        return 'Your kaizen burns bright!';
      case 'warning':
        return 'Your streak needs attention...';
      case 'broken':
        return 'Time to rebuild your discipline';
      default:
        return 'Keep the fire burning!';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`p-4 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border rounded-xl ${
        status === 'broken' ? 'border-gray-500/30' : 'border-cyan-500/30'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {getStatusIcon()}
          <span className="font-bold text-white">{streak} Day Streak</span>
        </div>
        {buff.bonus > 0 && (
          <div className="flex items-center gap-1">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold">+{buff.bonus}% XP</span>
          </div>
        )}
      </div>
      
      <div className="mb-2">
        <h4 className="font-semibold text-cyan-400">{buff.name}</h4>
        <p className="text-sm text-gray-300">{getStatusMessage()}</p>
      </div>

      {/* Streak Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min((streak % 7) / 7 * 100, 100)}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
        />
      </div>
      
      <div className="text-xs text-gray-400 text-center">
        {streak < 3 ? `${3 - streak} days to first buff` : 
         streak < 7 ? `${7 - streak} days to next level` :
         streak < 14 ? `${14 - streak} days to Warrior Spirit` :
         streak < 21 ? `${21 - streak} days to Sensei Level` :
         streak < 30 ? `${30 - streak} days to Legendary Master` :
         'Maximum mastery achieved!'}
      </div>
    </motion.div>
  );
};

export default StreakSystem;