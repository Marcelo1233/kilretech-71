import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Code, Smartphone, Zap } from "lucide-react";

export const HeroSection = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleServiceClick = (service: string) => {
    toast({
      title: `Serviço: ${service}`,
      description: "Entre em contato conosco para saber mais sobre este serviço!",
    });
  };

  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left animate-fade-up">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight">
              Transformando Ideias em{" "}
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Aplicativos Incríveis
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              Desenvolvemos aplicativos mobile e web que impulsionam seu negócio para o futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size={isMobile ? "default" : "lg"} 
                className="group"
              >
                Começar Projeto
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size={isMobile ? "default" : "lg"} 
                variant="outline"
              >
                Ver Portfolio
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 animate-fade-up">
            <div 
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleServiceClick("Apps Mobile")}
            >
              <div className="h-full flex flex-col items-center justify-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Apps Mobile</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">iOS e Android</p>
              </div>
            </div>

            <div 
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleServiceClick("Performance Otimizada")}
            >
              <div className="h-full flex flex-col items-center justify-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Performance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Alta velocidade</p>
              </div>
            </div>

            <div 
              className="col-span-2 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleServiceClick("Desenvolvimento Web")}
            >
              <div className="h-full flex flex-col items-center justify-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Desenvolvimento Web</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Sites modernos e responsivos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};