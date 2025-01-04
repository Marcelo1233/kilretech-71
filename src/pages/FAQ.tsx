import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, HelpCircle } from "lucide-react";

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:gap-3 transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para página inicial
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <HelpCircle className="w-8 h-8 text-primary animate-bounce" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Central de Ajuda
          </h1>
        </motion.div>
      </div>
      <FAQSection />
    </motion.div>
  );
};

export default FAQ;