
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-barbershop-black text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/38a9d3fa-e001-4829-8310-25aa6dc17358.png" 
            alt="Barbearia Pai e Filho" 
            className="h-12"
          />
          <span className="font-barber text-xl hidden md:block">BARBEARIA PAI E FILHO</span>
        </Link>

        {/* Menu de navegação para desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-barbershop-red transition-colors">Início</Link>
          <Link to="/servicos" className="hover:text-barbershop-red transition-colors">Serviços</Link>
          <Link to="/galeria" className="hover:text-barbershop-red transition-colors">Galeria</Link>
          <Link to="/sobre" className="hover:text-barbershop-red transition-colors">Sobre</Link>
          <Link to="/contato" className="hover:text-barbershop-red transition-colors">Contato</Link>
        </div>

        <Button 
          variant="outline" 
          className="hidden md:flex bg-barbershop-red text-white hover:bg-red-700 border-none"
          asChild
        >
          <Link to="/agendar">Agendar Horário</Link>
        </Button>

        {/* Botão de menu para mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-barbershop-black bg-opacity-95 z-40 pt-20">
          <div className="container mx-auto flex flex-col items-center space-y-8 py-8">
            <Link to="/" className="text-xl" onClick={toggleMenu}>Início</Link>
            <Link to="/servicos" className="text-xl" onClick={toggleMenu}>Serviços</Link>
            <Link to="/galeria" className="text-xl" onClick={toggleMenu}>Galeria</Link>
            <Link to="/sobre" className="text-xl" onClick={toggleMenu}>Sobre</Link>
            <Link to="/contato" className="text-xl" onClick={toggleMenu}>Contato</Link>
            
            <Button 
              variant="outline" 
              className="bg-barbershop-red text-white hover:bg-red-700 border-none w-full max-w-xs"
              asChild
            >
              <Link to="/agendar" onClick={toggleMenu}>Agendar Horário</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
