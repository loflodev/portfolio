import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const experiences = [
  {
    id: 1,
    roleKey: 'experience.items.senior.role',
    companyKey: 'experience.items.senior.company',
    period: '2021 - Present',
    descriptionKey: 'experience.items.senior.description',
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB']
  },
  {
    id: 2,
    roleKey: 'experience.items.fullstack.role',
    companyKey: 'experience.items.fullstack.company',
    period: '2019 - 2021',
    descriptionKey: 'experience.items.fullstack.description',
    technologies: ['Vue.js', 'Python', 'Docker', 'PostgreSQL']
  },
  {
    id: 3,
    roleKey: 'experience.items.frontend.role',
    companyKey: 'experience.items.frontend.company',
    period: '2018 - 2019',
    descriptionKey: 'experience.items.frontend.description',
    technologies: ['React', 'JavaScript', 'SASS', 'Redux']
  }
]

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      <div className="glass-effect rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold">{t(experience.roleKey)}</h3>
            <p className="text-primary">{t(experience.companyKey)}</p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
            {experience.period}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {t(experience.descriptionKey)}
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const { t } = useTranslation()

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">
            {t('experience.title')}
          </h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
