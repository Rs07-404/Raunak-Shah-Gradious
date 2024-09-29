import { createContext, useState } from "react";
import { appointmentType } from "../types/appointment.type";
import { appointmentContextType } from "../types/appointment.context.type";

const defaultAppointmentContextValue: appointmentContextType = {
    appointments: [],
    addAppointments: ()=>{},
    deleteAppointment: ()=>{},
    updateAppointment: ()=>{}
}

export const AppointmentContext = createContext<appointmentContextType>(defaultAppointmentContextValue);

export const AppointmentContextProvider = ({children})=>{
    const [appointments, updateAppointments] = useState<appointmentType[]>([]);

    const addAppointments = (appointment: appointmentType)=>{
        updateAppointments([...appointments, appointment]);
    }

    const deleteAppointment = (index: number)=>{
        const newAppointments = appointments.filter((appointment, i)=>{if (i!=index) return appointment})
        updateAppointments([...newAppointments]);
    }

    const updateAppointment = (index: number, updatedAppointment: appointmentType)=>{
        let tempAppointments = appointments
        tempAppointments[index] = updatedAppointment
        updateAppointments(tempAppointments)
    }

    return(
        <AppointmentContext.Provider value={{appointments, addAppointments, deleteAppointment, updateAppointment}}>
            {children}
        </AppointmentContext.Provider>
    )
}