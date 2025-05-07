
import { Phone, Mail, MapPin, Instagram, WhatsApp } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contato = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-barbershop-black text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/lovable-uploads/b4ce08d4-8ecb-4224-9f49-5bc0118c97a7.png" 
            alt="Barbearia" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-barber text-5xl mb-4 text-center">CONTATO</h1>
          <p className="text-xl max-w-2xl mx-auto text-center">
            Fale conosco e agende seu horário na Barbearia Pai e Filho
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="font-barber text-3xl mb-6">FALE CONOSCO</h2>
              <p className="text-gray-700 mb-8">
                Estamos sempre prontos para atender você da melhor forma possível. Entre em contato conosco através dos canais abaixo:
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-barbershop-red rounded-full p-3">
                    <WhatsApp size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-barber text-xl mb-1">WHATSAPP</h3>
                    <p className="text-gray-700">
                      <a 
                        href="https://wa.me/5519992953522" 
                        target="_blank" 
                        rel="noreferrer"
                        className="hover:text-barbershop-red transition-colors"
                      >
                        (19) 99295-3522
                      </a>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Atendimento rápido para agendamentos
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-barbershop-red rounded-full p-3">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-barber text-xl mb-1">TELEFONE</h3>
                    <p className="text-gray-700">
                      <a 
                        href="tel:+5519992953522" 
                        className="hover:text-barbershop-red transition-colors"
                      >
                        (19) 99295-3522
                      </a>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Horário comercial
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-barbershop-red rounded-full p-3">
                    <Instagram size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-barber text-xl mb-1">INSTAGRAM</h3>
                    <p className="text-gray-700">
                      <a 
                        href="https://www.instagram.com/fbarbeariapaie" 
                        target="_blank" 
                        rel="noreferrer"
                        className="hover:text-barbershop-red transition-colors"
                      >
                        @fbarbeariapaie
                      </a>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Siga-nos para ver nossos trabalhos
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-barbershop-red rounded-full p-3">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-barber text-xl mb-1">ENDEREÇO</h3>
                    <p className="text-gray-700">
                      A definir
                    </p>
                    <p className="text-gray-600 text-sm">
                      Venha nos fazer uma visita
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-barbershop-lightgray p-8 rounded-lg shadow-lg">
              <h2 className="font-barber text-3xl mb-6">HORÁRIO DE FUNCIONAMENTO</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b border-gray-300 pb-2">
                  <span className="font-semibold">Segunda-feira</span>
                  <span>09:00 - 19:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-2">
                  <span className="font-semibold">Terça-feira</span>
                  <span>09:00 - 19:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-2">
                  <span className="font-semibold">Quarta-feira</span>
                  <span>09:00 - 19:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-2">
                  <span className="font-semibold">Quinta-feira</span>
                  <span>09:00 - 19:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-2">
                  <span className="font-semibold">Sexta-feira</span>
                  <span>09:00 - 19:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-2">
                  <span className="font-semibold">Sábado</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Domingo</span>
                  <span>Fechado</span>
                </div>
              </div>

              <a 
                href="https://wa.me/5519992953522?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20Barbearia%20Pai%20e%20Filho."
                target="_blank" 
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 w-full transition-colors"
              >
                <WhatsApp size={20} />
                <span>Agendar via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
