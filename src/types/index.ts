export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  category: 'web' | 'game' | 'ai' | 'design' | 'mobile'
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'design' | 'ai' | 'cybersecurity' | 'game' | 'leadership'
  icon: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  year: string
  icon: string
  category: 'leadership' | 'technical' | 'design' | 'academic'
}
