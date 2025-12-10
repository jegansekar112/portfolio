'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      company: 'Nextenti Tech Private Limited',
      role: 'Full Stack Software Engineer',
      location: 'Hyderabad, India',
      duration: 'April 2024 - Present',
      description:
        'Nextenti is a health job portal platform connecting healthcare professionals with job opportunities. I work across the full stack, handling frontend, backend, and cloud infrastructure to deliver scalable applications that help healthcare professionals find their ideal positions.',
      website: 'https://www.nextenti.ai',
      achievements: [
        {
          title: 'Frontend Development',
          details: [
            'Developed and maintained scalable React.js applications with Redux state management, achieving 95% code coverage',
            'Built responsive user interfaces using Tailwind CSS with mobile-first design principles',
            'Optimized frontend performance using Webpack bundling and code splitting, reducing initial load time by 35%',
            'Addressed SEO challenges by implementing Next.js SSR on critical pages, improving search engine visibility by 60%',
          ],
        },
        {
          title: 'Backend Development',
          details: [
            'Developed backend APIs using Python and Flask, reducing server response latency by 30%',
            'Integrated Apache Kafka for real-time data streaming, increasing event throughput by 60%',
            'Built RESTful APIs enabling real-time data synchronization',
          ],
        },
        {
          title: 'System Architecture & Cloud DevOps',
          details: [
            'Designed and architected scalable system solutions for high-traffic applications',
            'Implemented GitHub Actions for CI/CD pipelines, reducing deployment time by 45%',
            'Worked with AWS services for cloud infrastructure and deployment',
            'Utilized Docker and Kubernetes for containerization and orchestration',
            'Streamlined CI/CD workflows, improving release reliability',
            'Architected microservices-based solutions for improved scalability and maintainability',
          ],
        },
      ],
      technologies: [
        'React.js',
        'Next.js',
        'Redux',
        'Tailwind CSS',
        'Python',
        'Flask',
        'Node.js',
        'Apache Kafka',
        'AWS',
        'Docker',
        'Kubernetes',
        'GitHub Actions',
        'Webpack',
      ],
    },
    {
      company: 'Smartail Tech Private Limited',
      role: 'Full Stack Product Engineer',
      location: 'Chennai, India',
      duration: 'October 2023 - March 2025',
      description:
        'Developed responsive web applications, implemented efficient caching strategies, and worked on both frontend and backend systems to improve performance and user engagement.',
      achievements: [
        {
          title: 'Key Achievements',
          details: [
            'Developed responsive web applications using React and JavaScript, reducing page load time by 35% and increasing user engagement by 50%',
            'Implemented client-side caching strategies using localStorage and sessionStorage, reducing frontend latency by 30%',
            'Applied Tailwind CSS for rapid UI development and consistent design system implementation',
            'Built scalable component architecture with proper state management using Redux',
            'Developed RESTful APIs using Node.js, Python, and Flask, enabling real-time data synchronization and reducing server response latency by 30%',
            'Integrated Apache Kafka for asynchronous messaging, enhancing system throughput by 50%',
            'Streamlined CI/CD workflows using GitLab Runner, decreasing release cycle duration by 35% and improving development efficiency',
            'Ensured responsive design across all devices and screen sizes, improving mobile user experience by 40%',
            'Collaborated with cross-functional teams including designers, backend developers, and QA specialists',
          ],
        },
      ],
      technologies: [
        'React.js',
        'JavaScript',
        'Redux',
        'Tailwind CSS',
        'Python',
        'Flask',
        'Node.js',
        'Apache Kafka',
        'GitLab Runner',
      ],
    },
  ]

  return (
    <section id="experience" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-12 text-lg"
        >
          My professional journey
        </motion.p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xl text-blue-600 font-semibold">
                      {exp.company}
                    </p>
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        title="Visit company website"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600">{exp.location}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
                    {exp.duration}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{exp.description}</p>

              {exp.achievements.map((achievement, achIndex) => (
                <div key={achIndex} className="mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {achievement.title}
                  </h4>
                  <ul className="space-y-2 ml-4">
                    {achievement.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="text-gray-700 leading-relaxed flex items-start"
                      >
                        <span className="text-blue-600 mr-2 mt-1">▸</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 text-sm font-semibold rounded-full border border-gray-200"
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
