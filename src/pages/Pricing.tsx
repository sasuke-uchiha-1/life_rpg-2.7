import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Sparkles } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Apprentice",
      price: "Free",
      period: "Forever",
      description: "Begin your training with essential discipline tracking",
      icon: Star,
      color: "from-gray-600 to-gray-700",
      borderColor: "border-gray-500/30",
      popular: false,
      features: [
        "5 daily training sessions",
        "Basic XP tracking",
        "Simple level progression",
        "Monthly training calendar",
        "Basic character avatar",
        "Dojo community access",
        "Basic achievement system"
      ]
    },
    {
      name: "Warrior",
      price: "$9",
      period: "per month",
      description: "Unlock your full potential with sensei-guided challenges and advanced tracking",
      icon: Zap,
      color: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-500/50",
      popular: true,
      features: [
        "Unlimited daily training",
        "Complete mastery path system (6 disciplines)",
        "Sensei-generated personalized challenges",
        "Advanced character customization",
        "Detailed analytics & insights",
        "Full achievement & badge system",
        "Priority support",
        "Export your data",
        "Streak tracking & rewards"
      ]
    },
    {
      name: "Master",
      price: "$19",
      period: "per month",
      description: "For the ambitious souls who want everything",
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
      borderColor: "border-yellow-500/50",
      popular: false,
      features: [
        "Everything in Warrior",
        "Personal digital sensei",
        "Custom mastery paths",
        "Team & family features",
        "Advanced integrations",
        "1-on-1 strategy sessions",
        "Early access to new features",
        "White-label options"
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Absolutely! Level up or down whenever you want. Your progress is always saved."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Your character and all progress remain accessible. You can export everything anytime."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! Students get 50% off any paid plan. Just verify with your .edu email."
    },
    {
      question: "Is this just another productivity app?",
      answer: "No way. This is a life transformation system disguised as a game. Big difference."
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
                Choose Your Path
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Every warrior needs the right training. Pick the path that matches your dedication level. 
              You can always advance as you progress in your kaizen journey.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/30 rounded-full text-green-400">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">30-day money-back guarantee</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border-2 rounded-3xl transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                    : plan.borderColor
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${plan.color} rounded-2xl mb-4`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period !== "Forever" && (
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 font-bold rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  {plan.price === "Free" ? "Start Free" : "Choose Plan"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
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
                What You Get
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every path is designed to help you progress. The question is: how fast do you want to grow?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-2xl"
            >
              <Zap className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Sensei-Guided Challenges</h3>
              <p className="text-gray-300 leading-relaxed">
                Get personalized challenges that adapt to your progress patterns and push you beyond your comfort zone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-2xl"
            >
              <Star className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Intelligent Progress Tracking</h3>
              <p className="text-gray-300 leading-relaxed">
                Visualize your kaizen with beautiful charts, streak tracking, and milestone celebrations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-2xl"
            >
              <Crown className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Dojo Community Access</h3>
              <p className="text-gray-300 leading-relaxed">
                Connect with other warriors on similar journeys. Share victories, find training partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-slate-900/20 border border-cyan-500/20 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Begin Your Kaizen?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your transformation begins with a single step. Choose your path and start 
              building the mastery you've always dreamed of.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/auth"
                className="px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Start Free Today
              </a>
              <a
                href="/dashboard"
                className="px-12 py-6 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white text-xl font-bold rounded-2xl transition-all duration-300"
              >
                View Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;