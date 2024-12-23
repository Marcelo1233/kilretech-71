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

export const HeroSection = () => {
  const { toast } = useToast();

  const handleCircleClick = (service: string) => {
    toast({
      title: `Serviço: ${service}`,
      description: "Entre em contato conosco para saber mais sobre este serviço!",
    });
  };

  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transformando Ideias em <span className="text-primary">Aplicativos Incríveis</span>
            </h1>
            <p className="text-lg text-gray-600">
              Desenvolvemos aplicativos mobile e web que impulsionam seu negócio para o futuro.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-primary font-semibold">
                ⏱️ Prazo de Entrega: 120 dias
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Garantimos a entrega do seu projeto em até 120 dias, com qualidade e excelência.
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg">Começar Projeto</Button>
              <Button size="lg" variant="outline">Ver Portfolio</Button>
            </div>
          </div>
          <div className="relative h-[450px] flex items-center justify-center animate-fade-up">
            <TooltipProvider>
              {/* Nuvem 1 - Apps Mobile */}
              <Draggable>
                <div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div 
                        className="absolute top-20 left-20 animate-float-1 cursor-move"
                        onClick={() => handleCircleClick("Apps Mobile")}
                      >
                        <div className="p-6 bg-[#D3E4FD]/95 backdrop-blur-sm w-52 h-44 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300" 
                             style={{ 
                               borderRadius: '85% 75% 75% 85% / 85% 85% 75% 75%',
                               boxShadow: '12px 12px 24px -8px rgba(0,0,0,0.15), -8px -8px 20px -6px rgba(255,255,255,0.7) inset',
                               border: '4px solid rgba(255,255,255,0.9)',
                               position: 'relative',
                             }}>
                          <div className="absolute -top-3 -right-2 w-8 h-8 bg-white rounded-full" 
                               style={{ boxShadow: '4px 4px 8px -4px rgba(0,0,0,0.1) inset' }} />
                          <div className="absolute -bottom-2 -left-3 w-6 h-6 bg-white rounded-full" 
                               style={{ boxShadow: '4px 4px 8px -4px rgba(0,0,0,0.1) inset' }} />
                          <Smartphone className="w-10 h-10 text-primary mb-3" />
                          <h3 className="font-semibold text-base text-center">Apps Mobile</h3>
                          <p className="text-sm text-gray-600 mt-1">IOS e Android</p>
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
              <Draggable>
                <div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div 
                        className="absolute top-32 right-20 animate-float-2 cursor-move"
                        onClick={() => handleCircleClick("Performance Otimizada")}
                      >
                        <div className="p-6 bg-[#FDE1D3]/95 backdrop-blur-sm w-52 h-44 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300" 
                             style={{ 
                               borderRadius: '75% 85% 85% 75% / 85% 75% 85% 75%',
                               boxShadow: '12px 12px 24px -8px rgba(0,0,0,0.15), -8px -8px 20px -6px rgba(255,255,255,0.7) inset',
                               border: '4px solid rgba(255,255,255,0.9)',
                               position: 'relative',
                             }}>
                          <div className="absolute -top-4 -left-2 w-8 h-8 bg-white rounded-full" 
                               style={{ boxShadow: '4px 4px 8px -4px rgba(0,0,0,0.1) inset' }} />
                          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white rounded-full" 
                               style={{ boxShadow: '4px 4px 8px -4px rgba(0,0,0,0.1) inset' }} />
                          <Zap className="w-10 h-10 text-primary mb-3" />
                          <h3 className="font-semibold text-base text-center">Performance</h3>
                          <p className="text-sm text-gray-600 mt-1">Alta velocidade</p>
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
              <Draggable>
                <div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div 
                        className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-float-3 cursor-move"
                        onClick={() => handleCircleClick("Desenvolvimento Web")}
                      >
                        <div className="p-6 bg-[#E5DEFF]/95 backdrop-blur-sm w-52 h-44 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300" 
                             style={{ 
                               borderRadius: '85% 75% 85% 75% / 75% 85% 75% 85%',
                               boxShadow: '12px 12px 24px -8px rgba(0,0,0,0.15), -8px -8px 20px -6px rgba(255,255,255,0.7) inset',
                               border: '4px solid rgba(255,255,255,0.9)',
                               position: 'relative',
                             }}>
                          <div className="absolute -top-2 -right-4 w-8 h-8 bg-white rounded-full" 
                               style={{ boxShadow: '4px 4px 8px -4px rgba(0,0,0,0.1) inset' }} />
                          <div className="absolute -bottom-4 -left-2 w-6 h-6 bg-white rounded-full" 
                               style={{ boxShadow: '4px 4px 8px -4px rgba(0,0,0,0.1) inset' }} />
                          <Code className="w-10 h-10 text-accent mb-3" />
                          <h3 className="font-semibold text-base text-center">Web</h3>
                          <p className="text-sm text-gray-600 mt-1">Sites modernos</p>
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