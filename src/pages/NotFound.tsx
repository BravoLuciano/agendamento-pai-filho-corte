
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-barbershop-lightgray hero-pattern py-20 px-4">
        <div className="text-center max-w-md mx-auto">
          <img 
            src="/lovable-uploads/38a9d3fa-e001-4829-8310-25aa6dc17358.png" 
            alt="Barbearia Pai e Filho" 
            className="h-32 mx-auto mb-6"
          />
          <h1 className="font-barber text-6xl mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-8">
            Oops! A página que você está procurando não foi encontrada.
          </p>
          <Button asChild className="bg-barbershop-red hover:bg-red-700">
            <Link to="/">
              Voltar para a Página Inicial
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
