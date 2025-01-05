import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Code, Smartphone, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  const handleServiceClick = (service: string) => {
    toast({
      title: `Serviço: ${service}`,
      description: "Entre em contato conosco para saber mais sobre este serviço!",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight">
              {t('hero.title')}{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
                {t('hero.subtitle')}
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size={isMobile ? "default" : "lg"} 
                className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                {t('hero.startProject')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size={isMobile ? "default" : "lg"} 
                variant="outline"
                className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => scrollToSection('portfolio')}
              >
                {t('hero.seePortfolio')}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div 
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700"
              onClick={() => handleServiceClick(t('hero.mobileApps'))}
            >
              <div className="h-full flex flex-col items-center justify-center space-y-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{t('hero.mobileApps')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('hero.mobileAppsDesc')}</p>
              </div>
            </div>

            <div 
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700"
              onClick={() => handleServiceClick(t('hero.performance'))}
            >
              <div className="h-full flex flex-col items-center justify-center space-y-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{t('hero.performance')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('hero.performanceDesc')}</p>
              </div>
            </div>

            <div 
              className="col-span-2 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700"
              onClick={() => handleServiceClick(t('hero.webDev'))}
            >
              <div className="h-full flex flex-col items-center justify-center space-y-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{t('hero.webDev')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('hero.webDevDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};