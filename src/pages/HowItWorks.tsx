import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Zap, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Brain,
  Gamepad2,
  Trophy
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Character",
      description: "Design your RPG avatar and set your life goals. Choose your starting skills and define what victory looks like.",
      icon: Gamepad2,
      features: ["Character customization", "Goal setting", "Skill selection"]
    },
    {
      number: "02", 
      title: "Design Daily Quests",
      description: "Transform your habits into epic quests. Each completed quest earns XP and moves you closer to your goals.",
      icon: Target,
      features: ["Habit tracking", "XP rewards", "Progress visualization"]
    },
    {
      number: "03",
      title: "Unlock Skill Trees",
      description: "Level up across 6 life domains: Mind, Body, Wealth, Relationships, Creativity, and Discipline.",
      icon: TrendingUp,
      features: ["6 skill branches", "Progressive unlocks", "Visual progression"]
    },
    {
      number: "04",
      title: "Accept AI Challenges",
      description: "Push your boundaries with AI-generated challenges tailored to your growth areas and comfort zone.",
      icon: Zap,
      features: ["Personalized challenges", "Difficulty scaling", "Growth acceleration"]
    },
    {
      number: "05",
      title: "Level Up & Evolve",
      description: "Watch your character and real life transform as you consistently complete quests and overcome challenges.",
      icon: Award,
      features: ["Level progression", "Character evolution", "Real-life transformation"]
    }
  ];

  const questTypes = [
    {
      title: "Mind Quests",
      icon: Brain,
      color: "from-blue-500 to-purple-500",
      examples: ["Read 30 pages of growth book", "Learn 10 new vocabulary words", "Solve complex problem", "Meditate for 20 minutes"]
    },
    {
      title: "Body Quests",
      icon: Trophy,
      color: "from-green-500 to-blue-500", 
      examples: ["Complete 45-min workout", "Walk 12,000 steps", "Drink 3L of water", "Sleep 8+ hours quality rest"]
    },
    {
      title: "Wealth Quests",
      icon: TrendingUp,
      color: "from-yellow-500 to-orange-500",
      examples: ["Review and optimize budget", "Study investing for 1 hour", "Work 2 hours on side project", "Network with industry professional"]
    },
    {
      title: "Creative Quests",
      icon: Zap,
      color: "from-pink-500 to-purple-500",
      examples: ["Write 750 words creatively", "Create art for 30 minutes", "Learn new creative technique", "Practice instrument 45 min"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-headline">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                The Way of Kaizen
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your life is already a journey. We just give you the dojo to master it like a sensei. 
              Here's how to transform from student to master.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <span className="text-6xl font-mono font-bold text-cyan-400/30 mr-4">
                      {step.number}
                    </span>
                    <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                  <div className="space-y-2">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-3xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <step.icon className="h-24 w-24 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-400 font-mono">Visual Demo Coming Soon</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quest Types Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Training Disciplines
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every warrior has different strengths. Choose your path and master multiple disciplines of life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {questTypes.map((questType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${questType.color} rounded-xl mr-4 group-hover:rotate-12 transition-transform duration-300`}>
                    <questType.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{questType.title}</h3>
                </div>
                <div className="space-y-3">
                  {questType.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                      <Target className="h-4 w-4 text-cyan-400" />
                      <span className="text-gray-300">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Challenge Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Sensei-Guided Growth
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our digital sensei analyzes your progress and generates personalized challenges that push you 
              beyond your comfort zone. Every challenge is designed to unlock your next level.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-green-900/30 border border-green-500/30 rounded-xl">
                <h4 className="text-lg font-bold text-green-400 mb-2">Easy Mode</h4>
                <p className="text-gray-300 text-sm">Gentle nudges to build momentum</p>
              </div>
              <div className="p-6 bg-yellow-900/30 border border-yellow-500/30 rounded-xl">
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Medium Mode</h4>
                <p className="text-gray-300 text-sm">Meaningful challenges for growth</p>
              </div>
              <div className="p-6 bg-red-900/30 border border-red-500/30 rounded-xl">
                <h4 className="text-lg font-bold text-red-400 mb-2">Boss Level</h4>
                <p className="text-gray-300 text-sm">Epic challenges for breakthrough moments</p>
              </div>
            </div>

            <div className="p-8 bg-black/40 border border-cyan-500/30 rounded-2xl">
              <h4 className="text-2xl font-bold text-white mb-4">Example AI Challenge</h4>
              <p className="text-lg text-cyan-400 mb-4 font-mono">
                "Challenge: Write a handwritten letter to someone who influenced your life and deliver it in person today."
              </p>
              <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
                <span>Difficulty: Medium</span>
                <span>•</span>
                <span>Skills: Relationships + Creativity</span>
                <span>•</span>
                <span>XP Reward: 150</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Start Your Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your training dojo awaits. Time to embrace kaizen.
            </p>
            <a
              href="/dashboard"
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Begin Your Training
              <ArrowRight className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;