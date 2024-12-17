import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  console.log(i18n.language.slice(0,2));

  return (
    <select
      value={i18n.language.slice(0, 2)}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
