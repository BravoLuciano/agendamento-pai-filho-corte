
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const Servicos = () => {
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
    },
    {
      name: "Pigmentação",
      price: "R$ 50,00",
      description: "Tinta para barba ou cabelo, disfarçando falhas ou brancos.",
      image: "/lovable-uploads/fb45c50d-b5f8-424d-aaae-2e89430e0931.png"
    },
    {
      name: "Barba e cabelo",
      price: "R$ 65,00",
      description: "Combo especial com corte de cabelo e barba completa.",
      image: "/lovable-uploads/0dcaea1d-0948-4f8d-aef9-c5c669f69213.png"
    },
    {
      name: "Planos mensais",
      price: "a partir de R$ 100,00",
      description: "Pacotes mensais com serviços ilimitados.",
      image: "/lovable-uploads/712e9784-f8be-44a3-9fdc-4109bd9b38f1.png"
    }
  ];

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
          <h1 className="font-barber text-5xl mb-4 text-center">NOSSOS SERVIÇOS</h1>
          <p className="text-xl max-w-2xl mx-auto text-center">
            Conheça todos os serviços oferecidos pela Barbearia Pai e Filho
          </p>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="py-20 px-4 bg-barbershop-lightgray hero-pattern">
        <div className="container mx-auto">
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
        </div>
      </section>

      {/* Tabela de Preços */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-barber text-4xl mb-4">TABELA DE PREÇOS</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Confira nossos preços acessíveis para todos os serviços
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-barbershop-black text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-barber">Serviço</th>
                  <th className="py-4 px-6 text-right font-barber">Preço</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6">Planos mensais a partir</td>
                  <td className="py-4 px-6 text-right font-semibold">R$ 100,00</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6">Corte adulto e infantil</td>
                  <td className="py-4 px-6 text-right font-semibold">R$ 35,00</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6">Barba na toalha quente</td>
                  <td className="py-4 px-6 text-right font-semibold">R$ 35,00</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6">Pigmentação</td>
                  <td className="py-4 px-6 text-right font-semibold">R$ 50,00</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6">Barba e cabelo</td>
                  <td className="py-4 px-6 text-right font-semibold">R$ 65,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
