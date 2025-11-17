import { Appointment } from "../models/Appointment";

const appointments: Appointment[] = [];

export const AppointmentService = {
  getAll: (): Appointment[] => {
    return appointments;
  },

  add: (appointment: Appointment) => {
    appointments.push(appointment);
  },

  remove: (id: string) => {
    const index = appointments.findIndex(a => a.id === id);
    if (index !== -1) {
      appointments.splice(index, 1);
    }
  }
};
