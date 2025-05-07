
import { Link } from 'react-router-dom';
import { Instagram, Phone, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-barbershop-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/lovable-uploads/38a9d3fa-e001-4829-8310-25aa6dc17358.png" 
              alt="Barbearia Pai e Filho" 
              className="h-24 mb-4"
            />
            <p className="text-center md:text-left text-gray-400 max-w-xs">
              Barbearia de qualidade com ambiente familiar e atendimento exclusivo.
            </p>
          </div>

          {/* Links úteis */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-barber text-xl mb-4">Links Úteis</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-barbershop-red transition-colors">Início</Link>
              <Link to="/servicos" className="hover:text-barbershop-red transition-colors">Serviços</Link>
              <Link to="/galeria" className="hover:text-barbershop-red transition-colors">Galeria</Link>
              <Link to="/sobre" className="hover:text-barbershop-red transition-colors">Sobre</Link>
              <Link to="/agendar" className="hover:text-barbershop-red transition-colors">Agendar</Link>
            </nav>
          </div>

          {/* Contato */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-barber text-xl mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5519992953522" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-2 hover:text-barbershop-red transition-colors"
              >
                <MessageSquare size={18} />
                <span>(19) 99295-3522</span>
              </a>
              <a 
                href="tel:+5519992953522" 
                className="flex items-center space-x-2 hover:text-barbershop-red transition-colors"
              >
                <Phone size={18} />
                <span>(19) 99295-3522</span>
              </a>
              <a 
                href="https://www.instagram.com/fbarbeariapaie" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-2 hover:text-barbershop-red transition-colors"
              >
                <Instagram size={18} />
                <span>@fbarbeariapaie</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Barbearia Pai e Filho. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
