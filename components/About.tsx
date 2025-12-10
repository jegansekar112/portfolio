'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

// Move static data outside component to prevent recreation on every render
const achievements = [
  'Improved frontend performance by 40% through Webpack optimization',
  'Enhanced user engagement by 50% through responsive design',
  'Improved search engine visibility by 60% through Next.js SSR',
  'Delivered 100% of project tasks on schedule',
]

export default function About() {

  // Calculate experience dynamically from October 2023 (earliest start date)
  const experienceYears = useMemo(() => {
    const startDate = new Date('2023-10-01') // October 2023 - earliest experience
    const currentDate = new Date()
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime())
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25)
    return Math.floor(diffYears * 10) / 10 // Round to 1 decimal place
  }, [])

  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-gray-700 leading-relaxed text-lg">
              I'm a passionate <strong>Full Stack Developer</strong> with{' '}
              <strong>{experienceYears}+ years of experience</strong> in building robust web
              applications, <strong>architecting scalable system designs</strong>, and creating scalable solutions. Currently working at{' '}
              <strong>Nextenti Tech Private Limited</strong> in{' '}
              <strong>Hyderabad</strong>, I specialize in creating efficient,
              user-friendly applications using modern technologies.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              My expertise spans across <strong>frontend development</strong> (React.js, Next.js, Redux),
              <strong> backend development</strong> (Python, Flask, Node.js), <strong>system architecture design</strong>, and{' '}
              <strong>cloud infrastructure</strong> (AWS, Docker, Kubernetes). I'm <strong className="text-blue-600">always eager to
              learn new technologies</strong> and tackle challenging problems, continuously expanding my skill set to stay at the forefront of technology.
            </p>
            
            {/* Open to Relocate Highlight */}
            <div className="mt-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Open to Relocate & Remote Opportunities
              </motion.div>
            </div>
          </div>
          
          {/* Stats in a single row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 pt-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{experienceYears}+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">📍</div>
              <div className="text-gray-600 font-medium">Chennai, India</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">💼</div>
              <div className="text-gray-600 font-medium">Full Stack Developer</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <span className="text-green-600 text-xl mt-1">✓</span>
                <p className="text-gray-700">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
