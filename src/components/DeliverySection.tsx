import { Calendar, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const DeliverySection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prazo de Entrega Garantido
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprometidos com a excelência e pontualidade em cada projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">120 Dias de Desenvolvimento</h3>
                  <p className="text-gray-600">
                    Prazo máximo para entrega do seu projeto completo e funcional
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Atualizações Semanais</h3>
                  <p className="text-gray-600">
                    Acompanhamento constante do progresso do seu projeto
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Garantia de Qualidade</h3>
                  <p className="text-gray-600">
                    Testes rigorosos e validações em cada etapa do desenvolvimento
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Desenvolvimento de projeto"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};