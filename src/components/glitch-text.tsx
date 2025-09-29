'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className }: GlitchTextProps) {
  return (
    <div className={cn('relative inline-block select-none', className)}>
      <motion.span
        className="relative z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {text}
      </motion.span>
      <span className="absolute inset-0 -z-0 text-neon-cyan blur-[1px] translate-x-[2px] clip-path-[inset(0_0_70%_0)] opacity-70">
        {text}
      </span>
      <span className="absolute inset-0 -z-0 text-neon-pink blur-[1px] -translate-x-[2px] clip-path-[inset(30%_0_0_0)] opacity-70">
        {text}
      </span>
    </div>
  )
}


