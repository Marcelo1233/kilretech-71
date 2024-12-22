import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "App de Delivery",
    description: "Aplicativo mobile para entrega de produtos",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React Native", "Node.js"],
  },
  {
    title: "Plataforma E-commerce",
    description: "Sistema completo de vendas online",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "TypeScript"],
  },
  {
    title: "App de Gestão",
    description: "Sistema de gestão empresarial",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["Flutter", "Firebase"],
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos incríveis que desenvolvemos para nossos clientes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">Ver Mais Projetos</Button>
        </div>
      </div>
    </section>
  );
};