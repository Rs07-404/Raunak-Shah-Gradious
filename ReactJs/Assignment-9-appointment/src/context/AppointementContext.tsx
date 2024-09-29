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
    const [currentUpdateIndex, changeCurrentUpdateIndex] = useState(-1);

    const callUpdateForm = (index) => {
        changeformUpdate(true);
        changeCurrentUpdateIndex(index);
        const data = appointments;
        console.log(data[index])
        updateFormData({...data[index]})
    }

    const addAppointment = ()=>{
        updateAppointments([...appointments, formData]);
        updateFormData(defaultFormData);
    }

    const changeFormData = (data: appointmentType)=>{
        updateFormData({...data});
    }

    const deleteAppointment = (index)=>{
        const newAppointments = appointments.filter((appointment, i)=>{if (i!=index) return appointment})
        updateAppointments([...newAppointments]);
    }

    const updateAppointment = () => {
        const tempAppointments = appointments.map((appointment, i) =>
            i === currentUpdateIndex ? { ...formData } : { ...appointment }
        );
        updateAppointments(tempAppointments);
        updateFormData(defaultFormData);
        changeformUpdate(false);
        changeCurrentUpdateIndex(-1);
    };
    

    return(
        <AppointmentContext.Provider value={{appointments, formData, formUpdate, callUpdateForm, changeFormData, addAppointment, deleteAppointment, updateAppointment}}>
            {children}
        </AppointmentContext.Provider>
    )
}