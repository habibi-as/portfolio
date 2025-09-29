'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Shield, 
  Code, 
  Gamepad2, 
  Brain, 
  Palette, 
  Users,
  Database,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react'
import { Skill } from '@/types'

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend', icon: '⚛️' },
  { name: 'Next.js', level: 85, category: 'frontend', icon: '▲' },
  { name: 'TypeScript', level: 80, category: 'frontend', icon: '🔷' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend', icon: '🎨' },
  { name: 'Framer Motion', level: 75, category: 'frontend', icon: '🎭' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend', icon: '🟢' },
  { name: 'Express', level: 80, category: 'backend', icon: '🚀' },
  { name: 'MongoDB', level: 75, category: 'backend', icon: '🍃' },
  { name: 'PostgreSQL', level: 70, category: 'backend', icon: '🐘' },
  { name: 'REST APIs', level: 90, category: 'backend', icon: '🔗' },
  
  // Cybersecurity
  { name: 'Network Security', level: 85, category: 'cybersecurity', icon: '🛡️' },
  { name: 'Ethical Hacking', level: 80, category: 'cybersecurity', icon: '🔒' },
  { name: 'Penetration Testing', level: 75, category: 'cybersecurity', icon: '🎯' },
  { name: 'Cryptography', level: 70, category: 'cybersecurity', icon: '🔐' },
  
  // Game Design
  { name: 'Unity', level: 85, category: 'game', icon: '🎮' },
  { name: 'C#', level: 80, category: 'game', icon: '🔷' },
  { name: 'Blender', level: 75, category: 'game', icon: '🎨' },
  { name: 'Game Design', level: 90, category: 'game', icon: '🎯' },
  
  // AI/ML
  { name: 'Python', level: 90, category: 'ai', icon: '🐍' },
  { name: 'TensorFlow', level: 80, category: 'ai', icon: '🧠' },
  { name: 'PyTorch', level: 75, category: 'ai', icon: '🔥' },
  { name: 'Machine Learning', level: 85, category: 'ai', icon: '🤖' },
  
  // Design
  { name: 'Figma', level: 95, category: 'design', icon: '🎨' },
  { name: 'Adobe Creative Suite', level: 85, category: 'design', icon: '🎭' },
  { name: 'UI/UX Design', level: 90, category: 'design', icon: '✨' },
  { name: 'Branding', level: 80, category: 'design', icon: '🏷️' },
  
  // Leadership
  { name: 'Team Leadership', level: 90, category: 'leadership', icon: '👥' },
  { name: 'Project Management', level: 85, category: 'leadership', icon: '📋' },
  { name: 'Communication', level: 95, category: 'leadership', icon: '💬' },
  { name: 'Problem Solving', level: 95, category: 'leadership', icon: '🧩' }
]

const categoryConfig = {
  frontend: { icon: Code, color: 'from-blue-500 to-cyan-500', label: 'Frontend' },
  backend: { icon: Database, color: 'from-green-500 to-emerald-500', label: 'Backend' },
  cybersecurity: { icon: Shield, color: 'from-red-500 to-pink-500', label: 'Cybersecurity' },
  game: { icon: Gamepad2, color: 'from-purple-500 to-violet-500', label: 'Game Design' },
  ai: { icon: Brain, color: 'from-orange-500 to-yellow-500', label: 'AI/ML' },
  design: { icon: Palette, color: 'from-pink-500 to-rose-500', label: 'Design' },
  leadership: { icon: Users, color: 'from-indigo-500 to-blue-500', label: 'Leadership' }
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <section id="skills" className="py-20 bg-dark-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning multiple domains, from cutting-edge web technologies 
            to advanced AI systems and creative design solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
            const config = categoryConfig[category as keyof typeof categoryConfig]
            const Icon = config.icon
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${config.color} mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{config.label}</h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-neon-cyan font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-dark-300 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                          className={`h-full bg-gradient-to-r ${config.color} rounded-full group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Git & Version Control',
                'Docker & Containerization',
                'AWS & Cloud Services',
                'Agile & Scrum',
                'System Architecture',
                'Performance Optimization',
                'Cross-platform Development',
                'API Design & Integration'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 text-neon-cyan rounded-full text-sm font-medium hover:from-neon-cyan/30 hover:to-neon-blue/30 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}








