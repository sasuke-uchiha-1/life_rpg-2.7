import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Sword, Shield, Zap, ArrowRight } from 'lucide-react';

interface Class {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  primarySkills: string[];
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

interface ClassSelectionProps {
  onClassSelect: (selectedClass: Class) => void;
}

const ClassSelection: React.FC<ClassSelectionProps> = ({ onClassSelect }) => {
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);

  const classes: Class[] = [
    {
      id: 'sage',
      name: 'Sage',
      title: '🧙‍♂️ The Sage',
      description: 'Masters of knowledge and wisdom. You seek to understand the world through learning, reflection, and continuous growth.',
      icon: Brain,
      color: 'from-blue-500 to-purple-500',
      primarySkills: ['Mind', 'Creativity', 'Discipline'],
      theme: {
        primary: 'from-blue-600 to-purple-600',
        secondary: 'from-blue-500 to-purple-500',
        accent: 'blue-400'
      }
    },
    {
      id: 'warrior',
      name: 'Warrior',
      title: '⚔️ The Warrior',
      description: 'Disciplined fighters who conquer challenges through strength, persistence, and unwavering determination.',
      icon: Sword,
      color: 'from-red-500 to-orange-500',
      primarySkills: ['Discipline', 'Body', 'Mind'],
      theme: {
        primary: 'from-red-600 to-orange-600',
        secondary: 'from-red-500 to-orange-500',
        accent: 'red-400'
      }
    },
    {
      id: 'guardian',
      name: 'Guardian',
      title: '🛡️ The Guardian',
      description: 'Protectors of balance who focus on health, relationships, and creating harmony in all aspects of life.',
      icon: Shield,
      color: 'from-green-500 to-teal-500',
      primarySkills: ['Body', 'Relationships', 'Discipline'],
      theme: {
        primary: 'from-green-600 to-teal-600',
        secondary: 'from-green-500 to-teal-500',
        accent: 'green-400'
      }
    },
    {
      id: 'innovator',
      name: 'Innovator',
      title: '⚡ The Innovator',
      description: 'Creative visionaries who build wealth, express creativity, and forge new paths through innovation.',
      icon: Zap,
      color: 'from-yellow-500 to-cyan-500',
      primarySkills: ['Creativity', 'Wealth', 'Mind'],
      theme: {
        primary: 'from-yellow-600 to-cyan-600',
        secondary: 'from-yellow-500 to-cyan-500',
        accent: 'yellow-400'
      }
    }
  ];

  const handleConfirmSelection = () => {
    if (selectedClass) {
      onClassSelect(selectedClass);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Choose Your Path
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every warrior walks a different path to mastery. Choose the class that resonates with your soul 
            and begin your kaizen journey with focused training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {classes.map((classOption, index) => (
            <motion.div
              key={classOption.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-6 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:transform hover:scale-105 ${
                selectedClass?.id === classOption.id
                  ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                  : 'border-gray-600 hover:border-gray-500'
              }`}
              onClick={() => setSelectedClass(classOption)}
            >
              {selectedClass?.id === classOption.id && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold rounded-full">
                    Selected
                  </div>
                </div>
              )}

              <div className="text-center">
                <div className={`inline-flex p-4 bg-gradient-to-r ${classOption.color} rounded-2xl mb-4`}>
                  <classOption.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{classOption.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{classOption.description}</p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-cyan-400">Primary Skills:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {classOption.primarySkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-cyan-600/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedClass && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-3 font-headline">
              You have chosen the path of {selectedClass.title}
            </h3>
            <p className="text-gray-300 mb-4">
              Your dashboard and skill trees will be optimized for this path.
            </p>
            
            <button
              onClick={handleConfirmSelection}
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Begin Your Kaizen Journey
              <ArrowRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ClassSelection;