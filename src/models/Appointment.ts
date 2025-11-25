export interface Appointment {
  id: string;
  doctor: string;
  date: string;  // pode usar string por simplicidade; no futuro pode virar Date
  time: string;
}
