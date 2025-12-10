'use client'

import { motion } from 'framer-motion'
import { useState, useCallback, useRef, useEffect } from 'react'
import {
  SiPython,
  SiJavascript,
  SiDart,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiFlask,
  SiFlutter,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiApachekafka,
  SiTailwindcss,
  SiGithubactions,
  SiGit,
  SiGitlab,
  SiLinux,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si'

// Move static data outside component to prevent recreation on every render
const techStacks = [
  { icon: SiReact, color: 'text-cyan-500', size: 24 },
  { icon: SiNextdotjs, color: 'text-gray-900', size: 24 },
  { icon: SiNodedotjs, color: 'text-green-600', size: 24 },
  { icon: SiPython, color: 'text-blue-500', size: 24 },
  { icon: SiFlask, color: 'text-red-500', size: 24 },
  { icon: SiJavascript, color: 'text-yellow-500', size: 24 },
  { icon: SiDart, color: 'text-blue-600', size: 24 },
  { icon: SiFlutter, color: 'text-blue-400', size: 24 },
  { icon: SiDocker, color: 'text-blue-500', size: 24 },
  { icon: SiKubernetes, color: 'text-blue-600', size: 24 },
  { icon: SiAmazonaws, color: 'text-orange-500', size: 24 },
  { icon: SiApachekafka, color: 'text-black', size: 24 },
  { icon: SiMongodb, color: 'text-green-600', size: 24 },
  { icon: SiPostgresql, color: 'text-blue-700', size: 24 },
  { icon: SiGit, color: 'text-orange-600', size: 24 },
  { icon: SiGithubactions, color: 'text-gray-800', size: 24 },
  { icon: SiGitlab, color: 'text-orange-500', size: 24 },
  { icon: SiLinux, color: 'text-yellow-600', size: 24 },
  { icon: SiTailwindcss, color: 'text-cyan-500', size: 24 },
]

export default function Hero() {
  const [downloadError, setDownloadError] = useState(false)
  const [techStackPositions, setTechStackPositions] = useState<Array<{
    top: string
    left: string
    size: string
    animationDelay: string
  }>>([])
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const titleTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Generate random positions for tech stacks - only on client side to avoid hydration mismatch
  useEffect(() => {
    setTechStackPositions(
      techStacks.map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${20 + Math.random() * 20}px`,
        animationDelay: `${Math.random() * 5}s`,
      }))
    )
  }, [])

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (titleTimeoutRef.current) clearTimeout(titleTimeoutRef.current)
    }
  }, [])

  const handleDownloadResume = useCallback(async () => {
    try {
      // Check if file exists first
      const response = await fetch('/jegan_full_stack_dev_2_yrs.pdf', { method: 'HEAD' })
      
      if (response.ok) {
        // File exists, proceed with download
        const link = document.createElement('a')
        link.href = '/jegan_full_stack_dev_2_yrs.pdf'
        link.download = 'Jegan-Sekar-Full-Stack-Developer-Resume.pdf'
        link.setAttribute('title', 'Jegan Sekar - Full Stack Developer Resume')
        // Set the document title when PDF opens
        const originalTitle = document.title
        document.title = 'Jegan Sekar - Full Stack Developer | Resume'
        
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
        // Restore original title after a delay
        titleTimeoutRef.current = setTimeout(() => {
          document.title = originalTitle
        }, 1000)
        
        setDownloadError(false)
      } else {
        // File doesn't exist
        setDownloadError(true)
        timeoutRef.current = setTimeout(() => {
          setDownloadError(false)
        }, 5000)
      }
    } catch (error) {
      // Error checking file
      setDownloadError(true)
      timeoutRef.current = setTimeout(() => {
        setDownloadError(false)
      }, 5000)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"
        />
      </div>

      {/* Tech Stacks as Background Stars (Icons) */}
      {techStackPositions.length > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {techStacks.map((tech, index) => {
            const position = techStackPositions[index]
            if (!position) return null
            const Icon = tech.icon
            return (
              <motion.div
                key={`tech-${index}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                  rotate: {
                    duration: 20 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className={`absolute ${tech.color} select-none`}
                style={{
                  top: position.top,
                  left: position.left,
                  width: position.size,
                  height: position.size,
                }}
              >
                <Icon className="w-full h-full" />
              </motion.div>
            )
          })}
        </div>
      )}

      <div className="section-container text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm <span className="gradient-text">Jegan Sekar</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold text-gray-700 mb-4"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto"
          >
            Experienced Full Stack Developer with 2+ years of expertise in React.js, Next.js, Python, and Flask.
            Specialized in building scalable, responsive web applications and architecting robust system designs.
          </motion.p>
          
          {/* Open to Relocate Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-lg animate-pulse">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Open to Relocate
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View My Work
            </motion.a>
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </motion.button>
          </motion.div>
          
          {/* Error Message */}
          {downloadError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 max-w-md mx-auto p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center"
            >
              <p className="text-yellow-800 text-sm">
                ⚠️ Resume file not found. Please add <code className="bg-yellow-100 px-2 py-1 rounded">jegan_full_stack_dev_2_yrs.pdf</code> to the <code className="bg-yellow-100 px-2 py-1 rounded">public</code> folder.
              </p>
            </motion.div>
          )}
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 hover:text-gray-600"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
