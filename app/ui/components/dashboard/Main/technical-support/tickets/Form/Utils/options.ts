import { TicketOption } from "@/types";

export const priorityOptions: TicketOption[] = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];
  
export const issueTypeOptions: TicketOption[] = [
  { value: 'development', label: 'Development' },
  { value: 'housekeeping', label: 'Housekeeping' },
  { value: 'finance', label: 'Finance' },
  { value: 'task', label: 'Task' },
];

export  const developmentTypeOptions: TicketOption[] = [
  { value: 'New Implementation', label: 'New Implementation' },
  { value: 'Fix', label: 'Fix' },
  { value: 'Optimization', label: 'Optimization' },
];
  
export  const locationOptions: TicketOption[] = [
  { value: 'page', label: 'Page' },
  { value: 'room', label: 'Room' },
  { value: 'hotel', label: 'Hotel' },
];

export  const assigneeOptions: TicketOption[] = [
  { value: 'roman-feliz', label: 'Roman Feliz' },
  { value: 'alipio-feliz-matos', label: 'Alipio Feliz Matos' },
  { value: 'ayelin-de-la-cruz', label: 'Ayeling de la Cruz' },
];