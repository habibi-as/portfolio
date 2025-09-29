import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ASURAX Studio | Cyber Security Engineer & Game Designer',
  description: 'Professional portfolio of a Cyber Security Engineer, Game Designer, and AI Innovator. Showcasing projects in cybersecurity, game development, and artificial intelligence.',
  keywords: 'cyber security, game design, AI developer, portfolio, B.Tech, Smart India Hackathon',
  authors: [{ name: 'ASURAX Studio' }],
  openGraph: {
    title: 'ASURAX Studio | Cyber Security Engineer & Game Designer',
    description: 'Professional portfolio showcasing cybersecurity, game design, and AI innovation projects.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
