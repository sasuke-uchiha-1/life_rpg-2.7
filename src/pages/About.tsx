import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Target, Heart, Brain, Zap } from 'lucide-react';

const About = () => {
  const philosophyQuotes = [
    {
      quote: "The cave you fear to enter holds the treasure you seek.",
      author: "Joseph Campbell",
      category: "Courage"
    },
    {
      quote: "If you want to go fast, go alone. If you want to go far, go together.",
      author: "African Proverb", 
      category: "Growth"
    },
    {
      quote: "The master has failed more times than the beginner has even tried.",
      author: "Stephen McCranie",
      category: "Mastery"
    },
    {
      quote: "Your limitation—it's only your imagination.",
      author: "Unknown",
      category: "Potential"
    }
  ];

  const principles = [
    {
      icon: Target,
      title: "Progress Over Perfection",
      description: "Every small step forward is a victory. Consistency beats intensity every time."
    },
    {
      icon: Brain,
      title: "Growth Mindset",
      description: "Challenges are opportunities in disguise. Every failure is data for your next success."
    },
    {
      icon: Heart,
      title: "Authentic Living",
      description: "Your journey is uniquely yours. Play your own game, not someone else's."
    },
    {
      icon: Zap,
      title: "Continuous Evolution",
      description: "Stagnation is the enemy. Keep leveling up, keep pushing boundaries."
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
              Life is the ultimate dojo. You're the student, the sensei, 
              and the master all rolled into one. The question isn't whether you're training—
              it's whether you're embracing continuous improvement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-headline">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-gray-300 leading-relaxed mb-8">
                We believe every person has the potential for mastery. The only thing standing 
                between you and your best self is a system that makes growth feel like training in a digital dojo.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                This isn't about productivity hacks or life optimization. It's about awakening the 
                warrior that's been waiting inside you. It's about turning your biggest challenges into 
                your greatest training sessions. It's about making every day feel like you're progressing 
                toward the master you were always meant to become.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl mb-4 group-hover:rotate-12 transition-transform duration-300 w-fit">
                  <principle.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-300 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wisdom Section */}
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
                Ancient Wisdom for Modern Warriors
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Throughout history, the greatest masters have understood that life is a path of continuous improvement. 
              Here's the wisdom that guides our way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophyQuotes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="h-8 w-8 text-cyan-400 mt-1 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="flex-1">
                    <p className="text-lg text-gray-300 italic leading-relaxed mb-4">
                      "{item.quote}"
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-cyan-400 font-semibold">— {item.author}</p>
                      <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Why We Built This Dojo
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                We were exhausted by self-help that felt hollow. Frustrated with productivity apps that 
                turned life into another job. Sick of setting goals that felt like punishment instead of training.
              </p>
              <p>
                The breakthrough came when we realized something profound: humans are naturally 
                drawn to mastery because it provides what modern life often lacks—crystal clear objectives, 
                instant feedback, meaningful progression, and the unshakeable feeling that every practice matters.
              </p>
              <p>
                What if we could channel that same focused energy into the most important training of all—your actual existence?
              </p>
              <p>
                This platform was forged through countless late-night coding sessions, fueled by an unshakeable belief 
                that every person deserves to feel like the master of their own destiny. We built this for 
                the dreamers who got tired of waiting for "someday." For the ambitious souls who know they're destined 
                for mastery but needed the right dojo to unlock their potential.
              </p>
              <p className="text-xl font-semibold text-cyan-400">
                Your life is already an epic journey in progress. We just built you the ultimate dojo to train like the master you are.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Your Kaizen Starts Now
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Every master started with someone who decided to take the first step. 
              Your training dojo is waiting.
            </p>
            <a
              href="/dashboard"
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Begin Your Kaizen
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;