import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./i18n";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="fixed top-0 left-0 right-0 z-50 bg-light/80 dark:bg-dark/80 backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <span className="text-xl font-bold">{t("common.name")}</span>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-primary transition-colors">
                {t("nav.home")}
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                {t("nav.about")}
              </a>
              <a
                href="#skills"
                className="hover:text-primary transition-colors"
              >
                {t("nav.skills")}
              </a>
              <a
                href="#projects"
                className="hover:text-primary transition-colors"
              >
                {t("nav.projects")}
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                {t("nav.contact")}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-dark dark:bg-light text-light dark:text-dark"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? "🌞" : "🌙"}
              </button>
            </div>
          </nav>
        </header>

        <main className="pt-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
