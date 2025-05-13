
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled 
          ? "bg-white shadow-md py-3" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold text-dental-darkBlue">
          Dr. Silva <span className="text-dental-turquoise">Odonto</span>
        </a>

        {/* Navigation for desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-dental-darkBlue hover:text-dental-turquoise font-medium transition-colors">
            Início
          </a>
          <a href="#about" className="text-dental-darkBlue hover:text-dental-turquoise font-medium transition-colors">
            Sobre
          </a>
          <a href="#services" className="text-dental-darkBlue hover:text-dental-turquoise font-medium transition-colors">
            Serviços
          </a>
          <a href="#testimonials" className="text-dental-darkBlue hover:text-dental-turquoise font-medium transition-colors">
            Depoimentos
          </a>
          <a href="#contact" className="text-dental-darkBlue hover:text-dental-turquoise font-medium transition-colors">
            Contato
          </a>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2">
              <Phone className="h-4 w-4 text-dental-blue" />
              <span className="text-dental-darkBlue font-medium">(11) 98765-4321</span>
            </div>
            <Button className="bg-dental-turquoise hover:bg-dental-blue text-white rounded-full px-6">
              Agende Agora
            </Button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="text-dental-darkBlue"
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <a href="#home" className="text-dental-darkBlue hover:text-dental-turquoise font-medium transition-colors">
            Início
          </a>
          <a href="#about" className="text-dental-darkBlue hover:text-dental-turquoise font-medium transition-colors">
            Sobre
          </a>
          <a href="#services" className="text-dental-darkBlue hover:text-dental-turquoise font-medium transition-colors">
            Serviços
          </a>
          <a href="#testimonials" className="text-dental-darkBlue hover:text-dental-turquoise font-medium transition-colors">
            Depoimentos
          </a>
          <a href="#contact" className="text-dental-darkBlue hover:text-dental-turquoise font-medium transition-colors">
            Contato
          </a>
          <div className="flex items-center gap-2 py-2">
            <Phone className="h-4 w-4 text-dental-blue" />
            <span className="text-dental-darkBlue font-medium">(11) 98765-4321</span>
          </div>
          <Button className="bg-dental-turquoise hover:bg-dental-blue text-white rounded-full">
            Agende Agora
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
