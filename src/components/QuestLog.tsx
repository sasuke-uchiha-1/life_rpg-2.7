import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Star, Search, Filter } from 'lucide-react';

interface QuestLogEntry {
  id: string;
  questTitle: string;
  category: string;
  completedDate: string;
  reflection: string;
  xpEarned: number;
  mood: 'accomplished' | 'challenged' | 'peaceful' | 'energized';
  tags: string[];
}

const QuestLog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const [questEntries] = useState<QuestLogEntry[]>([]);

  const categories = ['All', 'Mind', 'Body', 'Wealth', 'Relationships', 'Creativity', 'Discipline'];

  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case 'accomplished': return '🏆';
      case 'challenged': return '⚡';
      case 'peaceful': return '🧘';
      case 'energized': return '💪';
      default: return '✨';
    }
  };

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'accomplished': return 'text-yellow-400';
      case 'challenged': return 'text-orange-400';
      case 'peaceful': return 'text-blue-400';
      case 'energized': return 'text-green-400';
      default: return 'text-cyan-400';
    }
  };

  const filteredEntries = questEntries.filter(entry => {
    const matchesSearch = entry.questTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.reflection.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || entry.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
          <BookOpen className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Quest Log</h2>
          <p className="text-gray-400">Your journey archive and reflections</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search your quest history..."
            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="pl-10 pr-8 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Quest Entries */}
      <div className="space-y-4">
        {filteredEntries.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-white">{entry.questTitle}</h3>
                  <span className="px-2 py-1 bg-cyan-600/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                    {entry.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(entry.completedDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    +{entry.xpEarned} XP
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg">{getMoodEmoji(entry.mood)}</span>
                    <span className={getMoodColor(entry.mood)}>
                      {entry.mood.charAt(0).toUpperCase() + entry.mood.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-cyan-400 mb-2">Reflection:</h4>
              <p className="text-gray-300 leading-relaxed">{entry.reflection}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/30"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">No quest entries found</p>
          <p className="text-gray-500">Complete some quests and add reflections to build your archive</p>
        </div>
      )}
    </div>
  );
};

export default QuestLog;