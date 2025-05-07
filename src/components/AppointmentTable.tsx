
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";
import { Appointment } from "@/types/appointment";

interface AppointmentTableProps {
  appointments: Appointment[];
  updateStatus: (id: string, status: string) => void;
}

const AppointmentTable = ({ appointments, updateStatus }: AppointmentTableProps) => {
  const handleStatusChange = (id: string, value: string) => {
    updateStatus(id, value);
  };

  return (
    <>
      {/* Desktop view - Table */}
      <div className="hidden md:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Horário</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Serviço</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell className="font-medium">{appointment.time}</TableCell>
                  <TableCell>{appointment.name}</TableCell>
                  <TableCell>{appointment.phone}</TableCell>
                  <TableCell>{appointment.service}</TableCell>
                  <TableCell>{appointment.price}</TableCell>
                  <TableCell>
                    <Select
                      value={appointment.status}
                      onValueChange={(value) => handleStatusChange(appointment.id, value)}
                    >
                      <SelectTrigger className="w-[130px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pendente">Pendente</SelectItem>
                        <SelectItem value="confirmado">Confirmado</SelectItem>
                        <SelectItem value="cancelado">Cancelado</SelectItem>
                        <SelectItem value="concluído">Concluído</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          window.open(`tel:${appointment.phone.replace(/\D/g, "")}`, "_blank");
                        }}
                      >
                        <Phone size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-green-600 text-white hover:bg-green-700"
                        onClick={() => {
                          const message = `Olá ${appointment.name}, sobre seu agendamento para ${appointment.service} às ${appointment.time}`;
                          const encodedMessage = encodeURIComponent(message);
                          window.open(
                            `https://wa.me/${appointment.phone.replace(/\D/g, "")}?text=${encodedMessage}`,
                            "_blank"
                          );
                        }}
                      >
                        <MessageSquare size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6">
                  Nenhum agendamento encontrado para esta data
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile view - Cards */}
      <div className="md:hidden space-y-4">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <Card key={appointment.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gray-100 p-3 border-b flex justify-between items-center">
                  <div className="font-medium">{appointment.time}</div>
                  <div>
                    <Select
                      value={appointment.status}
                      onValueChange={(value) => handleStatusChange(appointment.id, value)}
                    >
                      <SelectTrigger className="w-[130px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pendente">Pendente</SelectItem>
                        <SelectItem value="confirmado">Confirmado</SelectItem>
                        <SelectItem value="cancelado">Cancelado</SelectItem>
                        <SelectItem value="concluído">Concluído</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Nome:</span>
                    <span>{appointment.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Telefone:</span>
                    <span>{appointment.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Serviço:</span>
                    <span>{appointment.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Valor:</span>
                    <span>{appointment.price}</span>
                  </div>
                  <div className="flex justify-center space-x-3 pt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        window.open(`tel:${appointment.phone.replace(/\D/g, "")}`, "_blank");
                      }}
                    >
                      <Phone size={16} className="mr-2" />
                      <span>Ligar</span>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 text-white hover:bg-green-700"
                      onClick={() => {
                        const message = `Olá ${appointment.name}, sobre seu agendamento para ${appointment.service} às ${appointment.time}`;
                        const encodedMessage = encodeURIComponent(message);
                        window.open(
                          `https://wa.me/${appointment.phone.replace(/\D/g, "")}?text=${encodedMessage}`,
                          "_blank"
                        );
                      }}
                    >
                      <MessageSquare size={16} className="mr-2" />
                      <span>WhatsApp</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-8 bg-white rounded-lg">
            Nenhum agendamento encontrado para esta data
          </div>
        )}
      </div>
    </>
  );
};

export default AppointmentTable;
