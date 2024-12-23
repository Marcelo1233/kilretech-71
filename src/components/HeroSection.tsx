import { Button } from "@/components/ui/button";
import { Smartphone, Code, Zap } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import Draggable from "react-draggable";
import { useIsMobile } from "@/hooks/use-mobile";

export const HeroSection = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleCircleClick = (service: string) => {
    toast({
      title: `Serviço: ${service}`,
      description: "Entre em contato conosco para saber mais sobre este serviço!",
    });
  };

  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-accent/30 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center md:text-left animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-primary">
              Transformando Ideias em <span className="text-secondary">Aplicativos Incríveis</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Desenvolvemos aplicativos mobile e web que impulsionam seu negócio para o futuro.
            </p>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-accent/20 shadow-lg">
              <p className="text-secondary font-semibold text-lg md:text-xl">
                ⏱️ Prazo de Entrega: 120 dias
              </p>
              <p className="text-sm md:text-base text-gray-600 mt-2">
                Garantimos a entrega do seu projeto em até 120 dias, com qualidade e excelência.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size={isMobile ? "default" : "lg"} 
                className="bg-primary hover:bg-primary-hover text-white font-medium px-8"
              >
                Começar Projeto
              </Button>
              <Button 
                size={isMobile ? "default" : "lg"} 
                variant="outline" 
                className="border-2 border-primary/20 hover:bg-primary/5 text-primary font-medium px-8"
              >
                Ver Portfolio
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[450px] flex items-center justify-center animate-fade-up">
            <TooltipProvider>
              {/* Nuvem 1 - Apps Mobile */}
              <Draggable disabled={isMobile}>
                <div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div 
                        className="absolute top-10 md:top-20 left-10 md:left-20 animate-float-1 cursor-move"
                        onClick={() => handleCircleClick("Apps Mobile")}
                      >
                        <div className="p-4 md:p-6 bg-white/95 backdrop-blur-sm w-40 md:w-52 h-32 md:h-44 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg border-2 border-accent/50" 
                             style={{ 
                               boxShadow: '0 10px 30px -10px rgba(155, 135, 245, 0.2)',
                             }}>
                          <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-secondary mb-2 md:mb-3" />
                          <h3 className="font-semibold text-sm md:text-base text-center text-primary">Apps Mobile</h3>
                          <p className="text-xs md:text-sm text-gray-600 mt-1">IOS e Android</p>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Desenvolvimento de aplicativos iOS e Android</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </Draggable>

              {/* Nuvem 2 - Performance */}
              <Draggable disabled={isMobile}>
                <div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div 
                        className="absolute top-20 md:top-32 right-10 md:right-20 animate-float-2 cursor-move"
                        onClick={() => handleCircleClick("Performance Otimizada")}
                      >
                        <div className="p-4 md:p-6 bg-white/95 backdrop-blur-sm w-40 md:w-52 h-32 md:h-44 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg border-2 border-accent/50" 
                             style={{ 
                               boxShadow: '0 10px 30px -10px rgba(155, 135, 245, 0.2)',
                             }}>
                          <Zap className="w-8 h-8 md:w-10 md:h-10 text-secondary mb-2 md:mb-3" />
                          <h3 className="font-semibold text-sm md:text-base text-center text-primary">Performance</h3>
                          <p className="text-xs md:text-sm text-gray-600 mt-1">Alta velocidade</p>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Aplicações rápidas e responsivas</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </Draggable>

              {/* Nuvem 3 - Web */}
              <Draggable disabled={isMobile}>
                <div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div 
                        className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 animate-float-3 cursor-move"
                        onClick={() => handleCircleClick("Desenvolvimento Web")}
                      >
                        <div className="p-4 md:p-6 bg-white/95 backdrop-blur-sm w-40 md:w-52 h-32 md:h-44 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg border-2 border-accent/50" 
                             style={{ 
                               boxShadow: '0 10px 30px -10px rgba(155, 135, 245, 0.2)',
                             }}>
                          <Code className="w-8 h-8 md:w-10 md:h-10 text-secondary mb-2 md:mb-3" />
                          <h3 className="font-semibold text-sm md:text-base text-center text-primary">Web</h3>
                          <p className="text-xs md:text-sm text-gray-600 mt-1">Sites modernos</p>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Sites e aplicações web modernas</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </Draggable>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};