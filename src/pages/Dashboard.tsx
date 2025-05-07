
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
import AppointmentTable from "@/components/AppointmentTable";
import { Appointment } from "@/types/appointment";

const Dashboard = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "1",
      name: "João Silva",
      phone: "(19) 98765-4321",
      service: "Corte adulto",
      price: "R$35",
      date: "2025-05-10",
      time: "10:00",
      status: "confirmado"
    },
    {
      id: "2",
      name: "Pedro Oliveira",
      phone: "(19) 91234-5678",
      service: "Barba e cabelo",
      price: "R$65",
      date: "2025-05-10",
      time: "11:00",
      status: "pendente"
    },
    {
      id: "3",
      name: "Carlos Santos",
      phone: "(19) 99876-5432",
      service: "Pigmentação",
      price: "R$50",
      date: "2025-05-10",
      time: "14:00",
      status: "confirmado"
    },
    {
      id: "4",
      name: "Felipe Andrade",
      phone: "(19) 98888-7777",
      service: "Barba na toalha quente",
      price: "R$35",
      date: "2025-05-11",
      time: "09:00",
      status: "pendente"
    },
    {
      id: "5",
      name: "Lucas Ferreira",
      phone: "(19) 99999-8888",
      service: "Corte infantil",
      price: "R$35",
      date: "2025-05-11",
      time: "10:30",
      status: "confirmado"
    }
  ]);

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const filteredAppointments = appointments.filter(
    (appointment) => appointment.date === selectedDate
  );

  const updateAppointmentStatus = (id: string, status: string) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status } : appointment
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-barbershop-black text-white py-16">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/lovable-uploads/b4ce08d4-8ecb-4224-9f49-5bc0118c97a7.png" 
            alt="Barbearia" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-barber text-5xl mb-4 text-center">PAINEL DE AGENDAMENTOS</h1>
          <p className="text-xl max-w-2xl mx-auto text-center">
            Gerencie todos os agendamentos da Barbearia Pai e Filho
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 px-4 bg-barbershop-lightgray hero-pattern">
        <div className="container mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar size={24} className="text-barbershop-red" />
                <h2 className="font-barber text-2xl">AGENDAMENTOS</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex items-center space-x-2">
                  <label htmlFor="date" className="font-medium">
                    Selecionar Data:
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="border rounded p-2"
                  />
                </div>
              </div>
            </div>
            
            <AppointmentTable 
              appointments={filteredAppointments} 
              updateStatus={updateAppointmentStatus} 
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
