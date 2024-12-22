import { Smartphone, Globe, Rocket, Shield } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Desenvolvimento Mobile",
    description: "Apps nativos e híbridos para iOS e Android com foco em experiência do usuário.",
  },
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Sites e aplicações web responsivas e modernas com as últimas tecnologias.",
  },
  {
    icon: Rocket,
    title: "UI/UX Design",
    description: "Design intuitivo e atraente que proporciona a melhor experiência aos usuários.",
  },
  {
    icon: Shield,
    title: "Manutenção e Suporte",
    description: "Suporte contínuo e atualizações para manter seu app funcionando perfeitamente.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em desenvolvimento de software para transformar sua visão em realidade.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};