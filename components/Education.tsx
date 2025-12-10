'use client'

import { motion } from 'framer-motion'

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      university: 'Alagappa University',
      location: 'Karaikudi, India',
      duration: 'July 2019 - June 2022',
      gpa: '7.65/10.0',
      coursework: [
        'Data Structures',
        'Algorithms',
        'Software Engineering',
        'Database Management',
        'Web Development',
      ],
    },
  ]

  return (
    <section id="education" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-12 text-lg"
        >
          My academic background
        </motion.p>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold mb-1">
                    {edu.university}
                  </p>
                  <p className="text-gray-600">{edu.location}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-sm text-gray-500 mb-1">Duration</p>
                  <p className="font-semibold text-gray-800 mb-2">{edu.duration}</p>
                  <p className="text-sm text-gray-500 mb-1">GPA</p>
                  <p className="text-2xl font-bold text-blue-600">{edu.gpa}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-bold text-gray-800 mb-4">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-4 py-2 bg-white text-gray-700 text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

