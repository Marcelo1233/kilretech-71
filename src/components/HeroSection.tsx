import { Button } from "@/components/ui/button";
import { Smartphone, Code, Zap } from "lucide-react";

export const HeroSection = () => {
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
          <div className="relative animate-fade-up">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 bg-white/80 backdrop-blur rounded-2xl shadow-lg">
                  <Smartphone className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold">Apps Mobile</h3>
                </div>
                <div className="p-6 bg-white/80 backdrop-blur rounded-2xl shadow-lg">
                  <Code className="w-8 h-8 text-accent mb-2" />
                  <h3 className="font-semibold">Desenvolvimento Web</h3>
                </div>
              </div>
              <div className="pt-8">
                <div className="p-6 bg-white/80 backdrop-blur rounded-2xl shadow-lg">
                  <Zap className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold">Performance Otimizada</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};