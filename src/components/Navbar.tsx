import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-3 md:py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Logo />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="text-sm md:text-base hover:text-primary transition-colors">
            Serviços
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-sm md:text-base hover:text-primary transition-colors">
            Portfolio
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm md:text-base hover:text-primary transition-colors">
            Contato
          </button>
          <Button 
            size="lg" 
            className="text-sm md:text-base"
            onClick={() => scrollToSection('contact')}
          >
            Solicitar Orçamento
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-sm hover:text-primary transition-colors py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-sm hover:text-primary transition-colors py-2"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm hover:text-primary transition-colors py-2"
              >
                Contato
              </button>
              <Button 
                className="w-full text-sm"
                onClick={() => scrollToSection('contact')}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};