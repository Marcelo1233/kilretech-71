import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um aplicativo?",
    answer: "O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Apps simples podem levar de 2-3 meses, enquanto projetos mais complexos podem levar 6 meses ou mais. Fazemos uma análise detalhada do seu projeto para fornecer um cronograma preciso."
  },
  {
    question: "Qual é o custo para desenvolver um aplicativo?",
    answer: "O custo depende de diversos fatores como funcionalidades, plataformas (iOS/Android) e complexidade do design. Oferecemos orçamentos personalizados após entender completamente as necessidades do seu projeto."
  },
  {
    question: "Vocês desenvolvem para iOS e Android?",
    answer: "Sim! Desenvolvemos aplicativos nativos para ambas as plataformas, bem como soluções híbridas usando tecnologias como React Native, garantindo alta performance e experiência nativa em todas as plataformas."
  },
  {
    question: "Como é o processo de desenvolvimento?",
    answer: "Nosso processo inclui: 1) Análise de requisitos e planejamento, 2) Design de interface e experiência do usuário, 3) Desenvolvimento e testes, 4) Revisão e ajustes, 5) Lançamento e suporte contínuo."
  },
  {
    question: "Oferecem suporte após o lançamento?",
    answer: "Sim, oferecemos suporte contínuo após o lançamento, incluindo manutenção, atualizações de segurança, correções de bugs e implementação de novas funcionalidades conforme necessário."
  },
  {
    question: "Como garantem a segurança dos aplicativos?",
    answer: "Implementamos as melhores práticas de segurança, incluindo criptografia de dados, autenticação segura, proteção contra vulnerabilidades comuns e conformidade com regulamentações de privacidade."
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
    <section className="py-20 bg-white dark:bg-gray-900">
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
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
};