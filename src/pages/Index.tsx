
import { ArrowRight, Calendar, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const services = [
    {
      name: "Corte adulto",
      price: "R$ 35,00",
      description: "Corte moderno com acabamento perfeito para valorizar seu estilo.",
      image: "/lovable-uploads/afedbc19-3fe4-4ea9-b2d1-8d9f959e4683.png"
    },
    {
      name: "Corte infantil",
      price: "R$ 35,00",
      description: "Cortes especiais para crianças em ambiente familiar e descontraído.",
      image: "/lovable-uploads/90e7004d-b986-4930-9e13-77b9dc4c2cd4.png"
    },
    {
      name: "Barba na toalha quente",
      price: "R$ 35,00",
      description: "Tratamento premium para sua barba com toalha quente e produtos de qualidade.",
      image: "/lovable-uploads/3ced664e-e1dc-494e-addf-9cd22b4b2e52.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-barbershop-black text-white">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/lovable-uploads/b4ce08d4-8ecb-4224-9f49-5bc0118c97a7.png" 
            alt="Barbearia" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-barber text-5xl md:text-6xl mb-6">
              BARBEARIA
              <span className="block text-barbershop-red">PAI E FILHO</span>
            </h1>
            <p className="text-xl mb-8">
              Tradição e qualidade para deixar você no seu melhor estilo.
              Agende seu horário agora mesmo!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <WhatsAppButton />
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-barbershop-black" asChild>
                <Link to="/servicos">
                  Ver Serviços <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Populares */}
      <section className="py-20 px-4 bg-barbershop-lightgray hero-pattern">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-barber text-4xl mb-4">NOSSOS SERVIÇOS</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Oferecemos serviços de alta qualidade para todos os estilos e idades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.name}
                name={service.name}
                price={service.price}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-barbershop-black hover:bg-gray-800">
              <Link to="/servicos">
                Ver Todos os Serviços <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Como Agendar */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-barber text-4xl mb-4">COMO AGENDAR</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Agendar seu horário na Barbearia Pai e Filho é rápido e fácil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-barbershop-lightgray p-8 rounded-lg text-center">
              <div className="bg-barbershop-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={32} />
              </div>
              <h3 className="font-barber text-xl mb-2">ENTRE EM CONTATO</h3>
              <p className="text-gray-700">
                Clique no botão de WhatsApp e envie uma mensagem
              </p>
            </div>

            <div className="bg-barbershop-lightgray p-8 rounded-lg text-center">
              <div className="bg-barbershop-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={32} />
              </div>
              <h3 className="font-barber text-xl mb-2">ESCOLHA O SERVIÇO</h3>
              <p className="text-gray-700">
                Informe qual serviço você deseja agendar
              </p>
            </div>

            <div className="bg-barbershop-lightgray p-8 rounded-lg text-center">
              <div className="bg-barbershop-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} />
              </div>
              <h3 className="font-barber text-xl mb-2">CONFIRME SEU HORÁRIO</h3>
              <p className="text-gray-700">
                Confirme a data e hora disponíveis e pronto!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <WhatsAppButton className="mx-auto" />
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 px-4 bg-barbershop-black text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-barber text-4xl mb-4">GALERIA</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Veja alguns dos nossos trabalhos realizados
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/lovable-uploads/d89b6984-d2db-4cdf-8bb2-8dc4f722bdfc.png" alt="Corte" className="rounded-lg w-full h-64 object-cover" />
            <img src="/lovable-uploads/eef7d74f-ee53-4ffa-a576-88dbe7c7339b.png" alt="Barba" className="rounded-lg w-full h-64 object-cover" />
            <img src="/lovable-uploads/58fb5001-13a9-4547-af99-49a7d6431a7d.png" alt="Corte infantil" className="rounded-lg w-full h-64 object-cover" />
            <img src="/lovable-uploads/4ece7914-72a4-4b8c-b426-00b69dd3d39c.png" alt="Cliente" className="rounded-lg w-full h-64 object-cover" />
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-barbershop-black" asChild>
              <Link to="/galeria">
                Ver Mais Fotos <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Horários */}
      <section className="py-20 px-4 bg-barbershop-lightgray hero-pattern">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <h2 className="font-barber text-4xl mb-4">HORÁRIO DE FUNCIONAMENTO</h2>
              <div className="h-1 w-20 bg-barbershop-red mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-b border-gray-200 pb-4 mb-4 md:border-r md:border-b-0 md:pr-4 md:pb-0">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Segunda - Sexta</span>
                  <span>09:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Sábado</span>
                  <span>09:00 - 18:00</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Clock size={24} className="text-barbershop-red mr-2" />
                    <span className="font-semibold">Agende seu horário</span>
                  </div>
                  <WhatsAppButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
