import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const initialProjects = [
  {
    title: "App de Delivery",
    description: "Aplicativo mobile para entrega de produtos",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Plataforma E-commerce",
    description: "Sistema completo de vendas online",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    title: "App de Gestão",
    description: "Sistema de gestão empresarial",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
];

const additionalProjects = [
  {
    title: "Sistema de CRM",
    description: "Plataforma de gestão de relacionamento com clientes",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    title: "App de Finanças",
    description: "Aplicativo para controle financeiro pessoal",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Rede Social",
    description: "Plataforma de conexão entre profissionais",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  show: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.3
    }
  }
};

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
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  layoutId={`image-${project.title}`}
                />
                <motion.div 
                  className="p-6 text-center"
                  layoutId={`content-${project.title}`}
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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