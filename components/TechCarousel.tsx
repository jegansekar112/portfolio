'use client'

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
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
const technologies = [
  { name: 'Python', icon: SiPython, color: 'text-blue-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'Dart', icon: SiDart, color: 'text-blue-600' },
  { name: 'React.js', icon: SiReact, color: 'text-cyan-500' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900' },
  { name: 'Flask', icon: SiFlask, color: 'text-red-500' },
  { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
  { name: 'AWS', icon: SiAmazonaws, color: 'text-orange-500' },
  { name: 'Kafka', icon: SiApachekafka, color: 'text-black' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-gray-800' },
  { name: 'Git', icon: SiGit, color: 'text-orange-600' },
  { name: 'GitLab Runner', icon: SiGitlab, color: 'text-orange-500' },
  { name: 'Linux', icon: SiLinux, color: 'text-yellow-600' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
]

export default function TechCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const resumeAutoPlay = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    resumeAutoPlay()
  }, [resumeAutoPlay])

  const goToPrevious = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + technologies.length) % technologies.length
    )
    setIsAutoPlaying(false)
    resumeAutoPlay()
  }, [resumeAutoPlay])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length)
    setIsAutoPlaying(false)
    resumeAutoPlay()
  }, [resumeAutoPlay])

  // Swipe handlers
  const minSwipeDistance = 50

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }, [])

  const onTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }
  }, [goToNext, goToPrevious])

  // Get visible items (5 items centered around currentIndex) - memoized
  const visibleItems = useMemo(() => {
    const items = []
    const visibleCount = 5
    const startIndex = currentIndex - Math.floor(visibleCount / 2)
    
    for (let i = 0; i < visibleCount; i++) {
      let index = (startIndex + i + technologies.length) % technologies.length
      items.push({ ...technologies[index], originalIndex: index })
    }
    return items
  }, [currentIndex])

  return (
    <div className="w-full py-8">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
        {/* Carousel Container with Gradient Background */}
        <div 
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 shadow-xl touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="flex justify-center gap-6 items-center">
            {visibleItems.map((tech, displayIndex) => {
              const Icon = tech.icon
              const isCenter = displayIndex === Math.floor(5 / 2)
              return (
                <motion.div
                  key={`${tech.name}-${tech.originalIndex}`}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1.2 : 0.8,
                    y: 0,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: isCenter ? 1.3 : 0.9, zIndex: 20 }}
                  className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 ${
                    isCenter ? 'z-10' : ''
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -10, rotateY: 5 }}
                    className={`rounded-2xl p-6 shadow-lg transition-all duration-300 flex flex-col items-center justify-center h-48 ${
                      isCenter 
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl' 
                        : 'bg-white border-2 border-gray-200'
                    }`}
                  >
                    <motion.div
                      animate={{ 
                        rotate: isCenter ? [0, 10, -10, 0] : 0,
                        scale: isCenter ? [1, 1.1, 1] : 1
                      }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <Icon
                        className={`w-20 h-20 ${isCenter ? 'text-white' : tech.color} mb-4`}
                        aria-label={tech.name}
                      />
                    </motion.div>
                    <h3 className={`text-sm font-bold text-center ${
                      isCenter ? 'text-white' : 'text-gray-700'
                    }`}>
                      {tech.name}
                    </h3>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Navigation Buttons with Better Design */}
        <motion.button
          onClick={goToPrevious}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all z-20 border-2 border-gray-200 hover:border-blue-500 group"
          aria-label="Previous"
        >
          <svg
            className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        <motion.button
          onClick={goToNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all z-20 border-2 border-gray-200 hover:border-blue-500 group"
          aria-label="Next"
        >
          <svg
            className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {technologies.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-3 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
