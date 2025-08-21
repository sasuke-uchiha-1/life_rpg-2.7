import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Star, 
  ArrowRight,
  Play,
  Award,
  Brain,
  Heart
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Target,
      title: "Daily Quest System",
      description: "Transform habits into epic quests and earn XP for real-life achievements"
    },
    {
      icon: TrendingUp,
      title: "Skill Tree Progression",
      description: "Level up across Mind, Body, Wealth, Relationships, Creativity & Discipline"
    },
    {
      icon: Zap,
      title: "AI-Generated Challenges",
      description: "Get personalized challenges that push you beyond your comfort zone"
    },
    {
      icon: Award,
      title: "Level Up Your Life",
      description: "Watch your character evolve as you become the hero of your own story"
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      level: "Level 47 Productivity Ninja",
      text: "This tool turned my scattered goals into an epic adventure. I've never been more motivated!",
      avatar: "🎯"
    },
    {
      name: "Sarah Williams",
      level: "Level 32 Life Optimizer",
      text: "Finally, a system that makes personal growth feel like the game I've always wanted to play.",
      avatar: "⚡"
    },
    {
      name: "Marcus Rodriguez",
      level: "Level 55 Discipline Master",
      text: "The AI challenges push me in ways I never expected. It's like having a personal trainer for life.",
      avatar: "🚀"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
          <div className="absolute bottom-32 left-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-32 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-9xl font-bold mb-6 leading-tight font-headline">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-white bg-clip-text text-transparent">
                Life is a game.
              </span>
              <br />
              <span className="text-white text-5xl md:text-7xl">Play it well.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your daily life into an epic RPG adventure. Earn real XP, unlock skill trees, 
              complete meaningful quests, and level up into the person you were always meant to become.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              to="/dashboard"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Play className="h-5 w-5" />
              Start Your Quest
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/how-it-works"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-xl transition-all duration-300"
            >
              How It Works
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-gray-400">Active Players</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">1M+</div>
              <div className="text-gray-400">Quests Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">500K+</div>
              <div className="text-gray-400">Levels Gained</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Kaizen Your Life
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every legendary warrior needs the right tools. Here's your dojo for mastering life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-gradient-to-br from-gray-900/50 to-purple-900/20 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
                className="group p-8 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl mr-4 group-hover:rotate-12 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                Warriors in Action
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Real warriors, real transformations, real kaizen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-purple-900/20 border border-purple-500/20 rounded-2xl"
                className="p-6 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-cyan-400 font-mono">{testimonial.level}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-headline">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Your Kaizen Journey
              </span>
              <br />
              <span className="text-white font-headline">Starts Now</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop waiting for tomorrow. Your path is unwritten, your dojo awaits. 
              Every master begins with a single step.
            </p>
            <Link
              to="/auth"
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Brain className="h-6 w-6" />
              Begin Your Kaizen
              <Heart className="h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;