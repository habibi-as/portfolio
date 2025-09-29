import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateMatrixChars(): string[] {
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
  const matrixChars: string[] = []
  
  for (let i = 0; i < 50; i++) {
    matrixChars.push(chars[Math.floor(Math.random() * chars.length)])
  }
  
  return matrixChars
}
