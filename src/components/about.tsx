'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Gamepad2, Brain, Users, Code, Palette } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'Pursuing B.Tech in Cyber Security with hands-on experience in system protection and threat analysis.'
  },
  {
    icon: Gamepad2,
    title: 'Game Design',
    description: 'UI/UX & mechanics designer creating immersive gaming experiences with innovative gameplay systems.'
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'Led Smart India Hackathon team, demonstrating strong team management and project coordination skills.'
  },
  {
    icon: Code,
    title: 'Technical Expertise',
    description: 'Can fix, build, and optimize systems fast with deep understanding of modern technologies.'
  },
  {
    icon: Palette,
    title: 'Graphics Design',
    description: 'UI/UX, branding, posters, and digital art specialist with a keen eye for futuristic aesthetics.'
  },
  {
    icon: Brain,
    title: 'AI Development',
    description: 'Built real AI model systems and architect of "Vortex" experimental AI system with memory layers.'
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-dark-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate student, tech leader, and innovator who thrives on solving complex problems 
            through cutting-edge technology. My journey spans across cybersecurity, game development, 
            and artificial intelligence, always pushing the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue mr-4 group-hover:animate-glow">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">My Story</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              As a B.Tech student in Cyber Security, I've always been fascinated by the intersection 
              of technology and creativity. My journey began with a simple curiosity about how things 
              work, which quickly evolved into a passion for building and protecting digital systems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Leading a team in the Smart India Hackathon taught me the importance of collaboration 
              and innovation. It was there that I realized my potential to not just solve problems, 
              but to create solutions that push the boundaries of what's possible.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Today, I continue to explore the frontiers of AI, game design, and cybersecurity, 
              always driven by the belief that the best solutions come from thinking differently 
              and embracing the unknown.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}








