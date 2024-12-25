import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const initialProjects = [
  {
    title: "App de Delivery",
    description: "Aplicativo mobile para entrega de produtos",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    title: "Plataforma E-commerce",
    description: "Sistema completo de vendas online",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    title: "App de Gestão",
    description: "Sistema de gestão empresarial",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const additionalProjects = [
  {
    title: "Sistema de CRM",
    description: "Plataforma de gestão de relacionamento com clientes",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "App de Finanças",
    description: "Aplicativo para controle financeiro pessoal",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
  },
  {
    title: "Rede Social",
    description: "Plataforma de conexão entre profissionais",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
  },
];

export const PortfolioSection = () => {
  const [showMore, setShowMore] = useState(false);
  const projects = showMore ? [...initialProjects, ...additionalProjects] : initialProjects;

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
            Nosso Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Conheça alguns dos projetos incríveis que desenvolvemos para nossos clientes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => setShowMore(!showMore)}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300"
          >
            {showMore ? "Ver Menos" : "Ver Mais Projetos"}
          </Button>
        </div>
      </div>
    </section>
  );
};