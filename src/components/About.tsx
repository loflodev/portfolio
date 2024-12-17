import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            {t("about.title")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t("about.description1")}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t("about.description2")}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("about.location")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("about.locationValue")}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("about.experience")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("about.experienceValue")}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("about.availability")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("about.availabilityValue")}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("about.projects")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("about.projectsValue")}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
              <img
                src="/about-image.jpg"
                alt={t("about.imageAlt")}
                className="rounded-2xl w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
