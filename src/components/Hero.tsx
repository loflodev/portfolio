import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('hero.title')}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            {t('hero.subtitle')}
          </h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
            {t('hero.description')}
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              {t('hero.buttons.contact')}
            </button>
            <button className="px-6 py-3 border-2 border-primary text-primary dark:text-white rounded-lg hover:bg-primary/10 transition-colors">
              {t('hero.buttons.download')}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative z-10">
            <div className="absolute inset-0 -m-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-gradient-radial from-white/30 dark:from-white/10 to-transparent rounded-full blur-2xl" />
            </div>
            <img
              src="/me.png"
              alt={t('common.name')}
              className="rounded-full w-full max-w-md mx-auto relative z-10"
            />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <a
              href="#"
              className="p-3 bg-light dark:bg-dark rounded-full shadow-lg hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-light dark:bg-dark rounded-full shadow-lg hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-light dark:bg-dark rounded-full shadow-lg hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
