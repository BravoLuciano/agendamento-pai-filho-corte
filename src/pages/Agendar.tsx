
import { useState } from "react";
import { Calendar, Clock, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Agendar = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Constrói a mensagem para o WhatsApp
    let whatsappMessage = `Olá! Gostaria de agendar um horário na Barbearia Pai e Filho.\n\n`;
    whatsappMessage += `Nome: ${nome}\n`;
    whatsappMessage += `Telefone: ${telefone}\n`;
    whatsappMessage += `Serviço: ${servico}\n`;
    whatsappMessage += `Data: ${data}\n`;
    whatsappMessage += `Horário: ${horario}\n`;
    
    if (mensagem) {
      whatsappMessage += `Mensagem: ${mensagem}\n`;
    }
    
    // Codifica a mensagem e abre o WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/5519992953522?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

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
          <h1 className="font-barber text-5xl mb-4 text-center">AGENDE SEU HORÁRIO</h1>
          <p className="text-xl max-w-2xl mx-auto text-center">
            Preencha o formulário abaixo para agendar um horário na Barbearia Pai e Filho
          </p>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <section className="py-20 px-4 bg-barbershop-lightgray hero-pattern">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="bg-barbershop-red text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <Calendar size={32} />
                </div>
                <h3 className="font-barber text-xl text-center">
                  INFORME SEUS DADOS E PREFERÊNCIAS
                </h3>
                <p className="text-gray-700 text-center">
                  Preencha o formulário para enviar sua solicitação de agendamento via WhatsApp
                </p>
              </div>

              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <MessageSquare size={32} />
                </div>
                <h3 className="font-barber text-xl text-center">
                  CONFIRME SEU HORÁRIO
                </h3>
                <p className="text-gray-700 text-center">
                  Após o envio, aguarde a confirmação do seu horário pelo WhatsApp
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input
                    id="nome"
                    placeholder="Seu nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    placeholder="(00) 00000-0000"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Serviço Desejado</Label>
                <RadioGroup 
                  value={servico} 
                  onValueChange={setServico}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                  required
                >
                  <div className="flex items-center space-x-2 border p-3 rounded-md">
                    <RadioGroupItem value="Corte adulto" id="corte-adulto" />
                    <Label htmlFor="corte-adulto" className="cursor-pointer flex-1">
                      Corte adulto - R$35
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border p-3 rounded-md">
                    <RadioGroupItem value="Corte infantil" id="corte-infantil" />
                    <Label htmlFor="corte-infantil" className="cursor-pointer flex-1">
                      Corte infantil - R$35
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border p-3 rounded-md">
                    <RadioGroupItem value="Barba na toalha quente" id="barba-toalha" />
                    <Label htmlFor="barba-toalha" className="cursor-pointer flex-1">
                      Barba na toalha - R$35
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border p-3 rounded-md">
                    <RadioGroupItem value="Barba e cabelo" id="barba-cabelo" />
                    <Label htmlFor="barba-cabelo" className="cursor-pointer flex-1">
                      Barba e cabelo - R$65
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border p-3 rounded-md">
                    <RadioGroupItem value="Pigmentação" id="pigmentacao" />
                    <Label htmlFor="pigmentacao" className="cursor-pointer flex-1">
                      Pigmentação - R$50
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border p-3 rounded-md">
                    <RadioGroupItem value="Plano mensal" id="plano" />
                    <Label htmlFor="plano" className="cursor-pointer flex-1">
                      Plano mensal - R$100
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="data">Data Preferida</Label>
                  <Input
                    id="data"
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="horario">Horário Preferido</Label>
                  <Select value={horario} onValueChange={setHorario} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um horário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="13:00">13:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="15:00">15:00</SelectItem>
                      <SelectItem value="16:00">16:00</SelectItem>
                      <SelectItem value="17:00">17:00</SelectItem>
                      <SelectItem value="18:00">18:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem (opcional)</Label>
                <Textarea
                  id="mensagem"
                  placeholder="Alguma observação ou pedido especial?"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageSquare size={18} className="mr-2" />
                Enviar Agendamento via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agendar;
