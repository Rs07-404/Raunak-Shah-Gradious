import { createContext, useState } from "react";
import { appointmentType } from "../types/appointment.type";
import { appointmentContextType } from "../types/appointment.context.type";


const defaultFormData = {
    patientName: "",
    age: "",
    gender: "",
    status: "",
    time: "",
    date: "",
    phoneNumber: "",
    doctorName: "",
}

const defaultAppointmentContextValue: appointmentContextType = {
    appointments: [],
    formData: defaultFormData,
    formUpdate: false,
    callUpdateForm: ()=>{},
    changeFormData: ()=>{},
    addAppointment: ()=>{},
    deleteAppointment: ()=>{},
    updateAppointment: ()=>{}
}

export const AppointmentContext = createContext<appointmentContextType>(defaultAppointmentContextValue);

export const AppointmentContextProvider = ({children})=>{
    const emptyFormData:appointmentType = defaultFormData;
    const [formData, updateFormData] = useState<appointmentType>(emptyFormData);
    const [appointments, updateAppointments] = useState<appointmentType[]>([]);
    const [formUpdate, changeformUpdate] = useState<boolean>(false);
    let currentUpdateIndex = -1;

    const callUpdateForm = (index: number) => {
        changeformUpdate(true);
        currentUpdateIndex = index;
        updateFormData({...appointments[index]})
    }

    const addAppointment = ()=>{
        updateAppointments([...appointments, formData]);
        updateFormData(defaultFormData);
    }

    const changeFormData = (data: appointmentType)=>{
        updateFormData({...data});
    }

    const deleteAppointment = (index: number)=>{
        const newAppointments = appointments.filter((appointment, i)=>{if (i!=index) return appointment})
        updateAppointments([...newAppointments]);
        currentUpdateIndex = -1;
    }

    const updateAppointment = ()=>{
        let tempAppointments = appointments;
        tempAppointments[currentUpdateIndex] = formData;
        updateAppointments(tempAppointments);
        updateFormData(defaultFormData);
        changeformUpdate(false);
    }

    return(
        <AppointmentContext.Provider value={{appointments, formData, formUpdate, callUpdateForm, changeFormData, addAppointment, deleteAppointment, updateAppointment}}>
            {children}
        </AppointmentContext.Provider>
    )
}