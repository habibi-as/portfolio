'use client'

import { motion } from 'framer-motion'
import GlitchText from '@/components/glitch-text'
import Particles from '@/components/particles'
// Removed 3D components to fix React fiber errors

function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ duration: 0.6 }}
      className="relative glass rounded-2xl overflow-hidden group"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10" />
      <div className="p-6 relative z-10">{children}</div>
      <div className="absolute -inset-0.5 rounded-2xl pointer-events-none group-hover:shadow-[0_0_40px_#00ffff55]" />
    </motion.div>
  )
}

export default function GameDesignPortfolio() {
  return (
    <section id="game-design" className="relative py-20 bg-dark-300">
      <div className="absolute inset-0">
        <Particles />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <GlitchText text="Game Design Portfolio" className="gradient-text" />
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Cyberpunk showcase blending gameplay systems, narrative craft, and cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* RED01 */}
          <Card>
            <div className="space-y-4">
              <div className="h-[220px] rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue flex items-center justify-center">
                  <span className="text-2xl">🎮</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">RED01</h3>
              <p className="text-gray-300 text-sm">
                Prototype exploring immersive level design, mechanics balancing, and adaptive player feedback systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Unity', 'Blender', 'AI Logic', 'Game Systems'].map((s) => (
                  <span key={s} className="px-2 py-1 text-xs rounded bg-dark-200 text-gray-300">{s}</span>
                ))}
              </div>
            </div>
          </Card>

          {/* RED02 */}
          <Card>
            <div className="space-y-4">
              <div className="h-[220px] rounded-xl bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-full max-w-sm aspect-[16/10] glass rounded-lg p-4">
                    <div className="h-2 w-8 rounded bg-neon-pink mb-2" />
                    <div className="h-2 w-24 rounded bg-neon-cyan mb-4" />
                    <div className="grid grid-cols-3 gap-2">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="h-6 bg-dark-300 rounded" />
                      ))}
                    </div>
                    <div className="absolute inset-0 border-2 border-dashed border-neon-cyan/40 rounded-lg animate-pulse" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold">RED02</h3>
              <p className="text-gray-300 text-sm">
                Narrative-driven design focusing on storytelling mechanics, branching choices, and cinematic gameplay.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Unity', 'C#', 'Dialogue Systems', 'Visual Storytelling'].map((s) => (
                  <span key={s} className="px-2 py-1 text-xs rounded bg-dark-200 text-gray-300">{s}</span>
                ))}
              </div>
            </div>
          </Card>

          {/* HellShield */}
          <Card>
            <div className="space-y-4">
              <div className="h-[220px] rounded-xl bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-neon-pink to-neon-blue flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">HellShield (Anti-Cheat System)</h3>
              <p className="text-gray-300 text-sm">
                Anti-Cheat + Cybersecurity for multiplayer: detects injections, scans memory, prevents tampering, secures packets in real time.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Cybersecurity', 'C++', 'Game Security', 'AI Detection'].map((s) => (
                  <span key={s} className="px-2 py-1 text-xs rounded bg-dark-200 text-gray-300">{s}</span>
                ))}
              </div>
            </div>
          </Card>

          {/* Game Jams & Hackathons */}
          <Card>
            <div className="space-y-4">
              <div className="h-[220px] rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Game Jams & Hackathons (Winter 2025)</h3>
              <p className="text-gray-300 text-sm">
                Rapid prototyping, collaboration, and creative problem-solving under pressure across multiple jams.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Fast Prototyping', 'Collaboration', 'Game Balance'].map((s) => (
                  <span key={s} className="px-2 py-1 text-xs rounded bg-dark-200 text-gray-300">{s}</span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-semibold shadow-[0_0_30px_#00ffff55] hover:shadow-[0_0_45px_#00ffff88] transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Hire Me</span>
            <span className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,255,255,0.08)_2px,rgba(0,255,255,0.08)_4px)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}





