import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Target, Brain, Heart, DollarSign, Users, Palette, Shield } from 'lucide-react';

interface QuestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddQuest: (quest: { title: string; category: string; xp: number }) => void;
}

const QuestModal: React.FC<QuestModalProps> = ({ isOpen, onClose, onAddQuest }) => {
  const [customQuest, setCustomQuest] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Mind');

  const categories = [
    { name: 'Mind', icon: Brain, color: 'from-blue-500 to-purple-500' },
    { name: 'Body', icon: Heart, color: 'from-green-500 to-blue-500' },
    { name: 'Wealth', icon: DollarSign, color: 'from-yellow-500 to-orange-500' },
    { name: 'Relationships', icon: Users, color: 'from-pink-500 to-red-500' },
    { name: 'Creativity', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'Discipline', icon: Shield, color: 'from-red-500 to-purple-500' }
  ];

  const suggestedQuests = {
    Mind: [
      "Read 30 pages of a growth book",
      "Meditate for 20 minutes",
      "Learn 10 new vocabulary words",
      "Complete a coding challenge",
      "Write in journal for 15 minutes"
    ],
    Body: [
      "Complete 45-minute workout",
      "Walk 12,000 steps",
      "Drink 3L of water",
      "Sleep 8+ hours",
      "Do 20 minutes of stretching"
    ],
    Wealth: [
      "Work 2 hours on side project",
      "Review and optimize budget",
      "Study investing for 1 hour",
      "Network with industry professional",
      "Update resume/portfolio"
    ],
    Relationships: [
      "Have meaningful conversation",
      "Call a family member",
      "Write thank you message",
      "Plan activity with friend",
      "Practice active listening"
    ],
    Creativity: [
      "Practice creative skill 30min",
      "Write 500 words creatively",
      "Sketch or draw for 20 minutes",
      "Learn new creative technique",
      "Work on personal project"
    ],
    Discipline: [
      "Complete morning routine",
      "Wake up at target time",
      "Avoid social media for 4 hours",
      "Stick to planned schedule",
      "Practice delayed gratification"
    ]
  };

  const handleAddQuest = (questTitle: string) => {
    const xpValues = { Mind: 50, Body: 75, Wealth: 100, Relationships: 60, Creativity: 50, Discipline: 40 };
    onAddQuest({
      title: questTitle,
      category: selectedCategory,
      xp: xpValues[selectedCategory as keyof typeof xpValues] || 50
    });
    setCustomQuest('');
    onClose();
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customQuest.trim()) {
      handleAddQuest(customQuest.trim());
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-gradient-to-br from-gray-900/95 to-slate-900/95 border border-cyan-500/30 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Add New Training</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            {/* Category Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Choose Discipline</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'border-cyan-500 bg-cyan-500/10'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`p-2 bg-gradient-to-r ${category.color} rounded-lg`}>
                        <category.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white font-medium">{category.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Suggested Quests */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Suggested Training</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {suggestedQuests[selectedCategory as keyof typeof suggestedQuests]?.map((quest, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleAddQuest(quest)}
                    className="w-full p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-cyan-500/50 rounded-lg text-left transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <Target className="h-4 w-4 text-cyan-400 group-hover:text-cyan-300" />
                      <span className="text-gray-300 group-hover:text-white">{quest}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Custom Quest Input */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Create Custom Training</h3>
              <form onSubmit={handleCustomSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={customQuest}
                    onChange={(e) => setCustomQuest(e.target.value)}
                    placeholder="Enter your custom training session..."
                    className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-3 px-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!customQuest.trim()}
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add Training
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuestModal;