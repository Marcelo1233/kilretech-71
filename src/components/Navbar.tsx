import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();
  const { currentLanguage, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 py-3 md:py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Logo />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="text-sm md:text-base hover:text-primary transition-colors dark:text-gray-200">
            {t('nav.services')}
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-sm md:text-base hover:text-primary transition-colors dark:text-gray-200">
            {t('nav.portfolio')}
          </button>
          <button onClick={() => navigate('/faq')} className="text-sm md:text-base hover:text-primary transition-colors dark:text-gray-200">
            {t('nav.faq')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm md:text-base hover:text-primary transition-colors dark:text-gray-200">
            {t('nav.contact')}
          </button>
          <Button 
            size="lg" 
            className="text-sm md:text-base"
            onClick={() => scrollToSection('contact')}
          >
            {t('nav.requestQuote')}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="ml-2"
            aria-label="Toggle language"
          >
            <Globe className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="ml-2"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            <Globe className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <button 
            className="p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-sm hover:text-primary transition-colors py-2 dark:text-gray-200"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-sm hover:text-primary transition-colors py-2 dark:text-gray-200"
              >
                {t('nav.portfolio')}
              </button>
              <button 
                onClick={() => {
                  navigate('/faq');
                  setIsMenuOpen(false);
                }}
                className="text-sm hover:text-primary transition-colors py-2 dark:text-gray-200"
              >
                {t('nav.faq')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm hover:text-primary transition-colors py-2 dark:text-gray-200"
              >
                {t('nav.contact')}
              </button>
              <Button 
                className="w-full text-sm"
                onClick={() => scrollToSection('contact')}
              >
                {t('nav.requestQuote')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};