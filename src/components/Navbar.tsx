import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-3 md:py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Logo />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm md:text-base hover:text-primary transition-colors">Serviços</a>
          <a href="#portfolio" className="text-sm md:text-base hover:text-primary transition-colors">Portfolio</a>
          <a href="#contact" className="text-sm md:text-base hover:text-primary transition-colors">Contato</a>
          <Button size="lg" className="text-sm md:text-base">Solicitar Orçamento</Button>
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
              <a 
                href="#services" 
                className="text-sm hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#portfolio" 
                className="text-sm hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="text-sm hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <Button 
                className="w-full text-sm"
                onClick={() => setIsMenuOpen(false)}
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