import { appointmentType } from "./appointment.type"

export type appointmentContextType = {
    appointments: appointmentType[],
    addAppointments: Function,
    deleteAppointment: Function,
    updateAppointment: Function
}