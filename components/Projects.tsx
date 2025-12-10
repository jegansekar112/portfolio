'use client'

import { motion } from 'framer-motion'

// Move static data outside component to prevent recreation on every render
const projects = [
    {
      title: 'Nextenti - Health Job Portal',
      company: 'Nextenti Tech Private Limited',
      description:
        'A comprehensive health job portal platform connecting healthcare professionals with job opportunities. Built with React.js, Next.js, and Python Flask, featuring real-time job matching, advanced search filters, and seamless application processes. The platform handles thousands of job listings and user profiles with scalable cloud infrastructure.',
      tech: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Python', 'Flask', 'Apache Kafka', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
      achievements: [
        'Developed scalable React.js applications with 95% code coverage',
        'Implemented Next.js SSR for improved SEO, increasing visibility by 60%',
        'Built responsive UI with Tailwind CSS, reducing load time by 35%',
        'Integrated Apache Kafka for real-time data streaming',
        'Deployed on AWS with Docker and Kubernetes',
      ],
      link: 'https://www.nextenti.ai',
      logo: '🏥',
    },
    {
      title: 'AI-Powered Job Recommendation Platform',
      description:
        'A personalized job recommendation platform built with React.js and Redux for state management. Features real-time job updates and user activity streaming using Apache Kafka, with backend APIs developed in Python and Flask for intelligent job data processing and personalized recommendations.',
      tech: ['React.js', 'Redux', 'Tailwind CSS', 'Python', 'Flask', 'Apache Kafka', 'Webpack'],
      achievements: [
        'Built personalized job recommendation engine',
        'Real-time job updates and user activity streaming',
        'Intelligent job data processing',
      ],
    },
  ]

export default function Projects() {
  return (
    <section id="projects" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Key <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-12 text-lg"
        >
          Some of my recent work and projects
        </motion.p>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.logo && (
                    <div className="text-4xl">{project.logo}</div>
                  )}
                  <div>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full">
                      {project.company ? 'Professional Project' : 'Featured Project'}
                    </span>
                  </div>
                </div>
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit Site
                  </motion.a>
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              {project.company && (
                <p className="text-blue-600 font-semibold mb-4">{project.company}</p>
              )}
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                {project.description}
              </p>

              {project.achievements && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-gray-700 flex items-start"
                      >
                        <span className="text-blue-600 mr-2 mt-1">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-white text-blue-600 text-sm font-semibold rounded-full border border-blue-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
