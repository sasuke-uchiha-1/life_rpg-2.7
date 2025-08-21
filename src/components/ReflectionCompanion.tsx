import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles, Send, X, Brain } from 'lucide-react';

interface ReflectionEntry {
  id: string;
  question: string;
  answer: string;
  date: string;
  mood: 'thoughtful' | 'motivated' | 'challenged' | 'peaceful';
}

const ReflectionCompanion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [reflections, setReflections] = useState<ReflectionEntry[]>([
    {
      id: '1',
      question: "How did this week's training sessions affect your mindset?",
      answer: "I noticed I'm becoming more disciplined and focused. The daily meditation quest really helped me stay centered.",
      date: '2024-01-15',
      mood: 'peaceful'
    }
  ]);

  const weeklyPrompts = [
    "How did this week's training sessions affect your mindset?",
    "What would your RPG character do next to level up?",
    "Which skill tree felt most challenging this week, and why?",
    "What breakthrough moment did you experience during your kaizen journey?",
    "How has your relationship with discipline evolved this week?",
    "What would you tell a fellow warrior who's struggling with consistency?",
    "Which daily quest surprised you with its impact on your life?",
    "How do you feel your character has grown since starting this journey?"
  ];

  const getCurrentPrompt = () => {
    const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) % weeklyPrompts.length;
    return weeklyPrompts[weekNumber];
  };

  const handleSubmitReflection = () => {
    if (currentAnswer.trim()) {
      const newReflection: ReflectionEntry = {
        id: Date.now().toString(),
        question: getCurrentPrompt(),
        answer: currentAnswer.trim(),
        date: new Date().toISOString().split('T')[0],
        mood: 'thoughtful'
      };
      
      setReflections([newReflection, ...reflections]);
      setCurrentAnswer('');
    }
  };

  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case 'thoughtful': return '🤔';
      case 'motivated': return '💪';
      case 'challenged': return '⚡';
      case 'peaceful': return '🧘';
      default: return '✨';
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full shadow-2xl z-40"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Reflection Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gradient-to-br from-gray-900/95 to-slate-900/95 border border-cyan-500/30 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Reflection Companion</h2>
                    <p className="text-gray-400">Your AI sensei for deeper insights</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              {/* Current Week's Prompt */}
              <div className="mb-6 p-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/20 border border-cyan-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">This Week's Reflection</h3>
                </div>
                <p className="text-cyan-400 font-medium mb-4">{getCurrentPrompt()}</p>
                
                <div className="space-y-3">
                  <textarea
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    placeholder="Take a moment to reflect deeply on your journey..."
                    className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    rows={4}
                  />
                  <button
                    onClick={handleSubmitReflection}
                    disabled={!currentAnswer.trim()}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-200"
                  >
                    <Send className="h-4 w-4" />
                    Save Reflection
                  </button>
                </div>
              </div>

              {/* Previous Reflections */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Your Journey Archive</h3>
                <div className="space-y-4 max-h-60 overflow-y-auto">
                  {reflections.map((reflection, index) => (
                    <motion.div
                      key={reflection.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 bg-gray-800/30 border border-gray-600/30 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">{reflection.date}</span>
                        <span className="text-lg">{getMoodEmoji(reflection.mood)}</span>
                      </div>
                      <p className="text-sm text-cyan-400 mb-2 font-medium">{reflection.question}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{reflection.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ReflectionCompanion;