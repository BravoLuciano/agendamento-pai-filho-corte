
import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";

interface ServiceCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
}

const ServiceCard = ({ name, price, description, image }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-48 relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-barbershop-red text-white px-3 py-1 m-2 rounded">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-barber text-xl mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <WhatsAppButton service={name} className="w-full" />
      </div>
    </div>
  );
};

export default ServiceCard;
