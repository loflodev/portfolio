import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const projects = [
  {
    id: 1,
    titleKey: 'projects.items.ecommerce.title',
    descriptionKey: 'projects.items.ecommerce.description',
    image: '/project1.jpg',
    year: '2023',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 2,
    titleKey: 'projects.items.taskmanager.title',
    descriptionKey: 'projects.items.taskmanager.description',
    image: '/project2.jpg',
    year: '2022',
    technologies: ['Vue.js', 'Firebase', 'Tailwind'],
    link: '#'
  },
  {
    id: 3,
    titleKey: 'projects.items.dashboard.title',
    descriptionKey: 'projects.items.dashboard.description',
    image: '/project3.jpg',
    year: '2022',
    technologies: ['React', 'GraphQL', 'Material-UI'],
    link: '#'
  }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="glass-effect rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="relative h-64">
          <img
            src={project.image}
            alt={t(project.titleKey)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-white text-sm bg-primary/80 px-3 py-1 rounded-full">
              {project.year}
            </span>
            <h3 className="text-xl font-bold text-white mt-2">{t(project.titleKey)}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t(project.descriptionKey)}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="mt-4 inline-block text-primary hover:underline"
          >
            {t('projects.viewProject')} →
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const { t } = useTranslation()

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">
            {t('projects.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
