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
            <div className="flex gap-4">
              <Button size="lg">Começar Projeto</Button>
              <Button size="lg" variant="outline">Ver Portfolio</Button>
            </div>
          </div>
          <div className="relative h-[400px] animate-fade-up">
            <TooltipProvider>
              {/* Círculo 1 - Apps Mobile */}
              <Draggable>
                <div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div 
                        className="absolute top-1/4 left-1/4 animate-float-1 cursor-move"
                        onClick={() => handleCircleClick("Apps Mobile")}
                      >
                        <div className="p-6 bg-white/80 backdrop-blur rounded-full shadow-lg w-32 h-32 flex flex-col items-center justify-center transform hover:scale-110 transition-transform">
                          <Smartphone className="w-8 h-8 text-primary mb-2" />
                          <h3 className="font-semibold text-sm text-center">Apps Mobile</h3>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Desenvolvimento de aplicativos iOS e Android</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </Draggable>

              {/* Círculo 2 - Performance Otimizada */}
              <Draggable>
                <div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div 
                        className="absolute top-1/2 right-1/4 animate-float-2 cursor-move"
                        onClick={() => handleCircleClick("Performance Otimizada")}
                      >
                        <div className="p-6 bg-white/80 backdrop-blur rounded-full shadow-lg w-32 h-32 flex flex-col items-center justify-center transform hover:scale-110 transition-transform">
                          <Zap className="w-8 h-8 text-primary mb-2" />
                          <h3 className="font-semibold text-sm text-center">Performance Otimizada</h3>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Aplicações rápidas e responsivas</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </Draggable>

              {/* Círculo 3 - Desenvolvimento Web */}
              <Draggable>
                <div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div 
                        className="absolute bottom-1/4 left-1/3 animate-float-3 cursor-move"
                        onClick={() => handleCircleClick("Desenvolvimento Web")}
                      >
                        <div className="p-6 bg-white/80 backdrop-blur rounded-full shadow-lg w-32 h-32 flex flex-col items-center justify-center transform hover:scale-110 transition-transform">
                          <Code className="w-8 h-8 text-accent mb-2" />
                          <h3 className="font-semibold text-sm text-center">Desenvolvimento Web</h3>
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