import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, DollarSign, Users, Palette, Shield } from 'lucide-react';

interface SkillNode {
  name: string;
  icon: any;
  color: string;
  level: number;
  xp: number;
  angle: number;
}

const SkillTree = () => {
  // All skills start at 0 as requested
  const skillNodes: SkillNode[] = [
    {
      name: "Mind",
      icon: Brain,
      color: "from-blue-500 to-purple-500",
      level: 0,
      xp: 0,
      angle: 0
    },
    {
      name: "Body",
      icon: Heart,
      color: "from-green-500 to-blue-500",
      level: 0,
      xp: 0,
      angle: 60
    },
    {
      name: "Wealth",
      icon: DollarSign,
      color: "from-yellow-500 to-orange-500",
      level: 0,
      xp: 0,
      angle: 120
    },
    {
      name: "Relationships",
      icon: Users,
      color: "from-pink-500 to-red-500",
      level: 0,
      xp: 0,
      angle: 180
    },
    {
      name: "Creativity",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      level: 0,
      xp: 0,
      angle: 240
    },
    {
      name: "Discipline",
      icon: Shield,
      color: "from-red-500 to-purple-500",
      level: 0,
      xp: 0,
      angle: 300
    }
  ];

  const getNodePosition = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius + 192, // 192 = 384/2 (half of container width)
      y: Math.sin(radian) * radius + 192  // 192 = 384/2 (half of container height)
    };
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Mastery Tree</h2>
        <p className="text-gray-300">Your journey radiates outward from the center - you are the hub of your own mastery</p>
      </div>
      
      <div className="flex justify-center w-full">
        <div className="relative w-96 h-96 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-full overflow-hidden">
          {/* Central User Node */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center border-4 border-white/20"
            style={{
              left: '176px', // 192 - 16/2 = 176px for perfect center
              top: '176px'
            }}
          >
            <span className="text-2xl">🎯</span>
          </motion.div>

          {/* Skill Nodes */}
          {skillNodes.map((skill, index) => {
            const position = getNodePosition(skill.angle, 140);
            
            return (
              <motion.div
                key={skill.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="absolute group cursor-pointer"
                style={{
                  left: `${position.x - 24}px`, // 24 = 48/2 (half of node width)
                  top: `${position.y - 24}px`   // 24 = 48/2 (half of node height)
                }}
              >
                {/* Connection Line */}
                <svg
                  className="absolute pointer-events-none"
                  width="200"
                  height="200"
                  style={{ 
                    left: '-76px', // Center the SVG on the node
                    top: '-76px'
                  }}
                >
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    x1="100"
                    y1="100"
                    x2={100 - Math.cos((skill.angle * Math.PI) / 180) * 140}
                    y2={100 - Math.sin((skill.angle * Math.PI) / 180) * 140}
                    stroke="#374151"
                    strokeWidth="2"
                  />
                </svg>

                {/* Skill Node */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-2 bg-gray-700 border-gray-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <skill.icon className="h-5 w-5 text-white" />
                  </div>

                  {/* Level Badge - Only show if level > 0 */}
                  {skill.level > 0 && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center border-2 border-gray-900">
                      <span className="text-white text-xs font-bold">{skill.level}</span>
                    </div>
                  )}

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-black/90 text-white text-xs px-3 py-2 rounded whitespace-nowrap">
                      <div className="font-semibold">{skill.name}</div>
                      <div className="text-cyan-400">Level {skill.level}</div>
                      <div className="text-gray-300">{skill.xp} XP</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl">
        {skillNodes.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-3 bg-gray-800/30 rounded-lg"
          >
            <div className={`inline-flex p-2 bg-gradient-to-r ${skill.color} rounded-lg mb-2`}>
              <skill.icon className="h-4 w-4 text-white" />
            </div>
            <div className="text-sm font-semibold text-white">{skill.name}</div>
            <div className="text-xs text-cyan-400">Level {skill.level}</div>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default SkillTree;