import { appointmentType } from "./appointment.type"

export type appointmentContextType = {
    appointments: appointmentType[],
    formData: appointmentType,
    formUpdate: boolean,
    callUpdateForm: Function,
    changeFormData: Function,
    addAppointment: Function,
    deleteAppointment: Function,
    updateAppointment: Function
}