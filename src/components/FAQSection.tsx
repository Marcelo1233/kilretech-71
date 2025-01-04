import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Clock, DollarSign, Smartphone, Workflow, Shield, Wrench } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um aplicativo?",
    answer: "O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Apps simples podem levar de 2-3 meses, enquanto projetos mais complexos podem levar 6 meses ou mais. Fazemos uma análise detalhada do seu projeto para fornecer um cronograma preciso.",
    icon: Clock
  },
  {
    question: "Qual é o custo para desenvolver um aplicativo?",
    answer: "O custo depende de diversos fatores como funcionalidades, plataformas (iOS/Android) e complexidade do design. Oferecemos orçamentos personalizados após entender completamente as necessidades do seu projeto.",
    icon: DollarSign
  },
  {
    question: "Vocês desenvolvem para iOS e Android?",
    answer: "Sim! Desenvolvemos aplicativos nativos para ambas as plataformas, bem como soluções híbridas usando tecnologias como React Native, garantindo alta performance e experiência nativa em todas as plataformas.",
    icon: Smartphone
  },
  {
    question: "Como é o processo de desenvolvimento?",
    answer: "Nosso processo inclui: 1) Análise de requisitos e planejamento, 2) Design de interface e experiência do usuário, 3) Desenvolvimento e testes, 4) Revisão e ajustes, 5) Lançamento e suporte contínuo.",
    icon: Workflow
  },
  {
    question: "Oferecem suporte após o lançamento?",
    answer: "Sim, oferecemos suporte contínuo após o lançamento, incluindo manutenção, atualizações de segurança, correções de bugs e implementação de novas funcionalidades conforme necessário.",
    icon: Wrench
  },
  {
    question: "Como garantem a segurança dos aplicativos?",
    answer: "Implementamos as melhores práticas de segurança, incluindo criptografia de dados, autenticação segura, proteção contra vulnerabilidades comuns e conformidade com regulamentações de privacidade.",
    icon: Shield
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const FAQSection = () => {
  return (
    <section className="py-12 bg-transparent">
      <motion.div 
        className="container mx-auto px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          className="text-center mb-12"
          variants={item}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Tire suas dúvidas sobre nossos serviços de desenvolvimento
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg px-6 border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10 dark:bg-primary/20">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-lg font-medium">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4 pl-14">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
};