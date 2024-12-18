import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const skills = [
  { name: "mongodb", level: 80 },
  { name: "tailwindCSS", level: 90 },
  { name: "express", level: 75 },
  { name: "typescript", level: 90 },
  { name: "react", level: 85 },
  { name: "vue", level: 80 },
  { name: "nodejs", level: 75 },
  { name: "wordpress", level: 95 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{t(`skills.items.${name}`)}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-secondary"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">
          {t("skills.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
