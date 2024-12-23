import { Smartphone, Globe, Rocket, Shield, Code2, Cpu, PaintBucket, Gauge } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Smartphone,
    title: "Desenvolvimento Mobile",
    description: "Apps nativos e híbridos para iOS e Android com experiências únicas para seus usuários.",
    color: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-500"
  },
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Sites e aplicações web modernas que destacam sua marca no mundo digital.",
    color: "from-purple-500/10 to-purple-600/10",
    iconColor: "text-purple-500"
  },
  {
    icon: PaintBucket,
    title: "UI/UX Design",
    description: "Design intuitivo e atraente que proporciona a melhor experiência aos seus clientes.",
    color: "from-pink-500/10 to-pink-600/10",
    iconColor: "text-pink-500"
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Otimização de velocidade e desempenho para manter seus sistemas sempre eficientes.",
    color: "from-green-500/10 to-green-600/10",
    iconColor: "text-green-500"
  },
  {
    icon: Code2,
    title: "Desenvolvimento Ágil",
    description: "Metodologias ágeis para entregar seu projeto com rapidez e qualidade.",
    color: "from-orange-500/10 to-orange-600/10",
    iconColor: "text-orange-500"
  },
  {
    icon: Shield,
    title: "Segurança Digital",
    description: "Proteção robusta para seus dados e sistemas com as melhores práticas de segurança.",
    color: "from-red-500/10 to-red-600/10",
    iconColor: "text-red-500"
  },
  {
    icon: Cpu,
    title: "Infraestrutura",
    description: "Soluções em nuvem escaláveis e confiáveis para seu negócio crescer.",
    color: "from-teal-500/10 to-teal-600/10",
    iconColor: "text-teal-500"
  },
  {
    icon: Rocket,
    title: "Inovação Contínua",
    description: "Mantemos seu projeto atualizado com as últimas tecnologias do mercado.",
    color: "from-indigo-500/10 to-indigo-600/10",
    iconColor: "text-indigo-500"
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
            Soluções Completas para seu Negócio
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Oferecemos um conjunto completo de serviços para transformar sua visão em realidade digital.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 inline-block`}>
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};