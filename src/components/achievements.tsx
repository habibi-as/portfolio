'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Users, Brain, Award, Target, Zap } from 'lucide-react'
import { Achievement } from '@/types'

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Smart India Hackathon Team Lead',
    description: 'Led a team of 6 developers in creating an innovative smart city management solution, demonstrating exceptional leadership and technical coordination skills.',
    year: '2024',
    icon: '🏆',
    category: 'leadership'
  },
  {
    id: '2',
    title: 'Built Real AI Model System',
    description: 'Developed a complete AI system from scratch with custom algorithms, neural networks, and real-world applications in pattern recognition.',
    year: '2024',
    icon: '🤖',
    category: 'technical'
  },
  {
    id: '3',
    title: 'Vortex AI Memory System Architect',
    description: 'Designed and implemented an experimental AI system with advanced memory layers, pushing the boundaries of artificial intelligence research.',
    year: '2024',
    icon: '🧠',
    category: 'technical'
  },
  {
    id: '4',
    title: 'Game Design Portfolio Excellence',
    description: 'Created multiple game prototypes showcasing innovative UI/UX design and gameplay mechanics, recognized for creative excellence.',
    year: '2023-2024',
    icon: '🎮',
    category: 'design'
  },
  {
    id: '5',
    title: 'Graphics Design Recognition',
    description: 'Produced award-winning UI/UX designs, branding materials, and digital art pieces with modern design principles and futuristic aesthetics.',
    year: '2023-2024',
    icon: '🎨',
    category: 'design'
  },
  {
    id: '6',
    title: 'B.Tech Cyber Security Excellence',
    description: 'Maintaining top academic performance while pursuing B.Tech in Cyber Security with hands-on experience in system protection and threat analysis.',
    year: '2022-2026',
    icon: '🛡️',
    category: 'academic'
  }
]

const categoryConfig = {
  leadership: { icon: Users, color: 'from-blue-500 to-cyan-500', label: 'Leadership' },
  technical: { icon: Brain, color: 'from-green-500 to-emerald-500', label: 'Technical' },
  design: { icon: Award, color: 'from-purple-500 to-violet-500', label: 'Design' },
  academic: { icon: Trophy, color: 'from-yellow-500 to-orange-500', label: 'Academic' }
}

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-20 bg-dark-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Achievements & Recognition</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey of continuous growth, innovation, and excellence across multiple domains 
            of technology and creative design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const config = categoryConfig[achievement.category as keyof typeof categoryConfig]
            const Icon = config.icon
            
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${config.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon and Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${config.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-3xl">{achievement.icon}</span>
                    </div>
                    <span className="text-sm font-semibold text-neon-cyan bg-neon-cyan/20 px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {achievement.description}
                  </p>

                  {/* Category Badge */}
                  <div className="mt-4">
                    <span className={`inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r ${config.color} text-white rounded-full`}>
                      {config.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Impact & Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '6+', label: 'Team Members Led', icon: Users },
                { number: '5+', label: 'Major Projects', icon: Target },
                { number: '3+', label: 'AI Systems Built', icon: Brain },
                { number: '100%', label: 'Project Success Rate', icon: Zap }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-neon-cyan mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
