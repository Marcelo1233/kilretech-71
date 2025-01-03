import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export const Footer = () => {
  const handleSocialClick = (network: string) => {
    toast({
      title: "Em breve!",
      description: `Nossa página no ${network} estará disponível em breve.`,
      duration: 3000,
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">KilreTech</h3>
            <p className="text-sm md:text-base text-gray-400">
              Transformando ideias em realidade através da tecnologia.
            </p>
          </div>
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm md:text-base text-gray-400">
              <li>Desenvolvimento Mobile</li>
              <li>Desenvolvimento Web</li>
              <li>UI/UX Design</li>
              <li>Consultoria</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <Link to="/sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <button 
                onClick={() => handleSocialClick("Facebook")} 
                className="hover:text-primary transition-colors"
              >
                <Facebook size={20} className="md:w-6 md:h-6" />
              </button>
              <a href="https://www.instagram.com/kilretech" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={20} className="md:w-6 md:h-6" />
              </a>
              <button 
                onClick={() => handleSocialClick("LinkedIn")} 
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-sm md:text-base text-gray-400">&copy; 2025 KilreTech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};