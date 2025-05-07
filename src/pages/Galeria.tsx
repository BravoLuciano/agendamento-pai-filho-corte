
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Galeria = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const images = [
    {
      src: "/lovable-uploads/d89b6984-d2db-4cdf-8bb2-8dc4f722bdfc.png",
      alt: "Cliente recebendo corte de cabelo"
    },
    {
      src: "/lovable-uploads/eef7d74f-ee53-4ffa-a576-88dbe7c7339b.png",
      alt: "Cliente com barba sendo feita"
    },
    {
      src: "/lovable-uploads/58fb5001-13a9-4547-af99-49a7d6431a7d.png",
      alt: "Criança após corte de cabelo"
    },
    {
      src: "/lovable-uploads/4ece7914-72a4-4b8c-b426-00b69dd3d39c.png",
      alt: "Cliente com certificado"
    },
    {
      src: "/lovable-uploads/afedbc19-3fe4-4ea9-b2d1-8d9f959e4683.png",
      alt: "Barbeiro fazendo acabamento"
    },
    {
      src: "/lovable-uploads/fb45c50d-b5f8-424d-aaae-2e89430e0931.png",
      alt: "Barbeiro com cliente"
    },
    {
      src: "/lovable-uploads/0dcaea1d-0948-4f8d-aef9-c5c669f69213.png",
      alt: "Cliente recebendo barba"
    },
    {
      src: "/lovable-uploads/712e9784-f8be-44a3-9fdc-4109bd9b38f1.png",
      alt: "Cliente satisfeito"
    },
    {
      src: "/lovable-uploads/b4cb7694-704b-4643-b5dd-170e13224281.png",
      alt: "Barbeiro trabalhando"
    },
    {
      src: "/lovable-uploads/b4ce08d4-8ecb-4224-9f49-5bc0118c97a7.png",
      alt: "Interior da barbearia"
    },
    {
      src: "/lovable-uploads/1b6df77c-76b5-4d7f-86d2-3a188e5af84f.png",
      alt: "Logotipo da barbearia"
    },
    {
      src: "/lovable-uploads/7c3b7914-5c20-478b-9952-2cea1737141c.png",
      alt: "Logotipo da barbearia com contato"
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
          <h1 className="font-barber text-5xl mb-4 text-center">GALERIA</h1>
          <p className="text-xl max-w-2xl mx-auto text-center">
            Confira os melhores momentos e trabalhos da Barbearia Pai e Filho
          </p>
        </div>
      </section>

      {/* Galeria de Fotos com Carrossel */}
      <section className="py-20 px-4 bg-barbershop-lightgray hero-pattern">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="font-barber text-4xl mb-4 text-center">NOSSOS MOMENTOS</h2>
            <div className="h-1 w-20 bg-barbershop-red mx-auto"></div>
          </div>

          {/* Carrossel Principal */}
          <div className="mx-auto max-w-5xl">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className={isMobile ? "basis-full" : "basis-1/2 md:basis-1/3"}>
                    <Card className="border-none">
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-8">
                <CarouselPrevious 
                  className="relative static transform-none bg-barbershop-black text-white hover:bg-barbershop-red hover:text-white" 
                />
                <CarouselNext 
                  className="relative static transform-none bg-barbershop-black text-white hover:bg-barbershop-red hover:text-white" 
                />
              </div>
            </Carousel>
          </div>

          {/* Grade Complementar de Imagens */}
          <div className="mt-16 hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.slice(0, 8).map((image, index) => (
              <div key={`grid-${index}`} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Galeria;
