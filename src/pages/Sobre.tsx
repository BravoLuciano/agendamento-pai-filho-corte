
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Sobre = () => {
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
          <h1 className="font-barber text-5xl mb-4 text-center">SOBRE NÓS</h1>
          <p className="text-xl max-w-2xl mx-auto text-center">
            Conheça a história e a equipe da Barbearia Pai e Filho
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <img 
                src="/lovable-uploads/30a4b892-960e-4026-8999-9e584c42f456.png" 
                alt="Barbearia" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div>
                <h2 className="font-barber text-3xl mb-4">NOSSA HISTÓRIA</h2>
                <p className="text-gray-700 mb-4">
                  A Barbearia Pai e Filho nasceu da paixão por oferecer cortes de cabelo e barba de qualidade, em um ambiente familiar e acolhedor.
                </p>
                <p className="text-gray-700">
                  Fundada com o propósito de unir tradição e modernidade, nossa barbearia se tornou referência na região, atendendo clientes de todas as idades e estilos.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="font-barber text-3xl mb-4">NOSSO INSTITUTO</h2>
                <p className="text-gray-700 mb-4">
                  O Instituto Barbearia Pai e Filho é um espaço dedicado à formação de novos profissionais da barbearia, transmitindo conhecimentos técnicos e valores que prezamos.
                </p>
                <p className="text-gray-700">
                  Através dos nossos cursos, formamos barbeiros qualificados, preparados para oferecer serviços de excelência e perpetuar a cultura da barbearia tradicional.
                </p>
              </div>
              <img 
                src="/lovable-uploads/b4ce08d4-8ecb-4224-9f49-5bc0118c97a7.png" 
                alt="Instituto Barbearia" 
                className="rounded-lg shadow-lg w-full h-auto order-1 md:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4 bg-barbershop-lightgray hero-pattern">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-barber text-4xl mb-4">NOSSOS VALORES</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              O que nos guia todos os dias para oferecer o melhor serviço
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="font-barber text-xl mb-4">QUALIDADE</h3>
              <p className="text-gray-700">
                Comprometimento com a excelência em cada corte e serviço prestado.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="font-barber text-xl mb-4">FAMÍLIA</h3>
              <p className="text-gray-700">
                Ambiente acolhedor para todas as idades, cultivando relacionamentos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="font-barber text-xl mb-4">TRADIÇÃO</h3>
              <p className="text-gray-700">
                Respeito às técnicas tradicionais, combinadas com tendências modernas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-barber text-4xl mb-4">NOSSA EQUIPE</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Profissionais qualificados prontos para cuidar do seu visual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/b4cb7694-704b-4643-b5dd-170e13224281.png" 
                alt="Barbeiro" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-barber text-xl mb-2">MARCÍLIO SILVA</h3>
                <p className="text-gray-700 mb-4">Mestre Barbeiro</p>
                <p className="text-gray-600">
                  Especialista em cortes clássicos e modernos.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/712e9784-f8be-44a3-9fdc-4109bd9b38f1.png" 
                alt="Barbeiro" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-barber text-xl mb-2">EQUIPE INSTITUTO</h3>
                <p className="text-gray-700 mb-4">Barbeiros Formados</p>
                <p className="text-gray-600">
                  Profissionais treinados pelo Instituto Barbearia Pai e Filho.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/4ece7914-72a4-4b8c-b426-00b69dd3d39c.png" 
                alt="Família" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-barber text-xl mb-2">FAMÍLIA</h3>
                <p className="text-gray-700 mb-4">Suporte e Atendimento</p>
                <p className="text-gray-600">
                  Nossa equipe familiar que garante o melhor atendimento.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <WhatsAppButton className="mx-auto" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
