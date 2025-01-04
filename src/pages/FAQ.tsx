import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
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
            className="flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para página inicial
          </Button>
        </motion.div>
      </div>
      <FAQSection />
    </motion.div>
  );
};

export default FAQ;