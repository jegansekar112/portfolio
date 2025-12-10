'use client'

import { motion } from 'framer-motion'
import TechCarousel from './TechCarousel'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'Dart'],
    },
    {
      title: 'Frameworks',
      skills: ['React.js', 'Node.js', 'Next.js', 'Flask', 'Flutter'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Kafka', 'Linux'],
    },
    {
      title: 'CI/CD & Version Control',
      skills: ['Git', 'GitHub Actions', 'GitLab Runner'],
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL'],
    },
    {
      title: 'Other Skills',
      skills: ['SEO Optimization', 'Tailwind CSS'],
    },
  ]

  return (
    <section id="skills" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-12 text-lg"
        >
          Technologies and tools I work with
        </motion.p>

        {/* Technology Carousel with Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <TechCarousel />
        </motion.div>

        {/* Skills Grid - Compact Modern Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.03) }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
