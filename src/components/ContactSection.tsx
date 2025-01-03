import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:contato.kilretech@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email preparado!",
      description: "Seu cliente de email foi aberto com a mensagem.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
              Vamos Criar Algo Incrível Juntos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Estamos prontos para transformar suas ideias em soluções digitais inovadoras. Entre em contato e descubra como podemos ajudar seu negócio a crescer.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a 
                    href="mailto:contato.kilretech@gmail.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    contato.kilretech@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <a 
                    href="https://wa.me/557996585070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    +55 (79) 9658-5070
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg">Endereço</h3>
                  <p className="text-gray-600 dark:text-gray-300">Rua Floriano Peixoto, 120 Povoado Crasto - Santa Luzia do Itanhy - SE</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg">Horário</h3>
                  <p className="text-gray-600 dark:text-gray-300">Segunda a Sexta, 9h às 18h</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome completo" 
                  className="border-2 focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <Input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  className="border-2 focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto" 
                  className="border-2 focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mensagem" 
                  className="min-h-[150px] border-2 focus:border-primary transition-colors"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 group"
                size="lg"
              >
                Enviar Mensagem
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};