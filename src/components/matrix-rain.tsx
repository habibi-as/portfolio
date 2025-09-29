'use client'

import { useEffect, useState } from 'react'
import { generateMatrixChars } from '@/lib/utils'

interface MatrixChar {
  id: number
  char: string
  x: number
  y: number
  speed: number
}

export default function MatrixRain() {
  const [chars, setChars] = useState<MatrixChar[]>([])

  useEffect(() => {
    const matrixChars = generateMatrixChars()
    const newChars: MatrixChar[] = []

    for (let i = 0; i < 30; i++) {
      newChars.push({
        id: i,
        char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 2 + 1,
      })
    }

    setChars(newChars)

    const interval = setInterval(() => {
      setChars(prev => prev.map(char => ({
        ...char,
        y: char.y > 100 ? -10 : char.y + char.speed * 0.5,
        char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
      })))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="matrix-rain">
      {chars.map(char => (
        <div
          key={char.id}
          className="matrix-char"
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            animationDuration: `${20 / char.speed}s`,
          }}
        >
          {char.char}
        </div>
      ))}
    </div>
  )
}








