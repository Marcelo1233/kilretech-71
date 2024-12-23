import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Entre em Contato</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
              Vamos conversar sobre seu projeto e como podemos ajudar a torná-lo realidade.
            </p>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <div>
                  <h3 className="text-sm md:text-base font-semibold">Email</h3>
                  <p className="text-sm text-gray-600">contato@kilretech.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <div>
                  <h3 className="text-sm md:text-base font-semibold">Telefone</h3>
                  <p className="text-sm text-gray-600">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <div>
                  <h3 className="text-sm md:text-base font-semibold">Endereço</h3>
                  <p className="text-sm text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
            <form className="space-y-4 md:space-y-6">
              <div>
                <Input placeholder="Nome completo" className="text-sm md:text-base" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="text-sm md:text-base" />
              </div>
              <div>
                <Input placeholder="Assunto" className="text-sm md:text-base" />
              </div>
              <div>
                <Textarea placeholder="Mensagem" className="min-h-[120px] md:min-h-[150px] text-sm md:text-base" />
              </div>
              <Button className="w-full text-sm md:text-base" size="lg">Enviar Mensagem</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};