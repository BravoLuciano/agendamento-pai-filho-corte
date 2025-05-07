
import { WhatsApp } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  service?: string;
  className?: string;
}

const WhatsAppButton = ({ service, className }: WhatsAppButtonProps) => {
  const openWhatsApp = () => {
    let message = "Olá! Gostaria de agendar um horário na Barbearia Pai e Filho";
    
    if (service) {
      message += ` para ${service}.`;
    } else {
      message += ".";
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5519992953522?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Button
      onClick={openWhatsApp}
      className={`bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2 ${className}`}
    >
      <WhatsApp size={20} />
      <span>Agendar via WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;
