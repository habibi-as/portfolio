'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ExternalLink, Github, Smartphone, Gamepad2, Brain, Palette, Building } from 'lucide-react'
import { Project } from '@/types'

const projects: Project[] = [
  {
    id: '1',
    title: 'Hostel Management App',
    description: 'A comprehensive mobile and web application for managing hostel operations, student records, and administrative tasks with real-time updates and secure authentication.',
    image: '/api/placeholder/400/300',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    category: 'mobile',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '2',
    title: 'Game Design Portfolio',
    description: 'Interactive game prototypes showcasing innovative UI/UX design and gameplay mechanics. Features multiple game concepts with polished user interfaces.',
    image: '/api/placeholder/400/300',
    technologies: ['Unity', 'C#', 'Blender', 'Photoshop', 'Figma'],
    category: 'game',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '3',
    title: 'Vortex AI Memory System',
    description: 'Experimental AI system with advanced memory layers and neural network architecture. Built from scratch with custom algorithms for pattern recognition.',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'NumPy', 'OpenCV'],
    category: 'ai',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '4',
    title: 'Smart India Hackathon Project',
    description: 'Led a team of 6 developers to create an innovative solution for smart city management. Implemented real-time data processing and IoT integration.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Node.js', 'IoT', 'Machine Learning', 'AWS'],
    category: 'web',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '5',
    title: 'Graphics Design Showcase',
    description: 'Collection of UI/UX designs, branding materials, posters, and digital art pieces. Showcasing modern design principles and futuristic aesthetics.',
    image: '/api/placeholder/400/300',
    technologies: ['Figma', 'Adobe Creative Suite', 'Blender', 'After Effects'],
    category: 'design',
    githubUrl: '#',
    liveUrl: '#'
  }
]

const categoryIcons = {
  web: Building,
  game: Gamepad2,
  ai: Brain,
  design: Palette,
  mobile: Smartphone
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="projects" className="py-20 bg-dark-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative projects spanning cybersecurity, game development, 
            AI systems, and creative design solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category]
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20 flex items-center justify-center">
                  <CategoryIcon className="w-16 h-16 text-neon-cyan" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className="px-2 py-1 text-xs font-medium bg-neon-cyan/20 text-neon-cyan rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-dark-200 text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-dark-200 hover:bg-dark-100 text-white rounded-lg transition-all duration-300 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-blue text-white rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          {mounted ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
            >
              View All Projects
            </motion.button>
          ) : (
            <button className="btn-secondary text-lg px-8 py-4 opacity-0">View All Projects</button>
          )}
        </div>
      </div>
    </section>
  )
}





