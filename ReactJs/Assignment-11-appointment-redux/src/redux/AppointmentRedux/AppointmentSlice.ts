import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appointmentType } from "../../types/appointment.type";

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

interface appointmentState {
    appointments: appointmentType[];
    formData: appointmentType;
    formUpdate: boolean;
    currentUpdateIndex;
}

const initialState: appointmentState = {
    appointments: [],
    formData: defaultFormData,
    formUpdate: false,
    currentUpdateIndex: -1,
}


export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {
        addAppointment: (state) => {
            state.appointments.push(state.formData);
            state.formData = defaultFormData;
        },

        deleteAppointment: (state, action: PayloadAction<number>) => {
            state.appointments = state.appointments.filter((appointment, i)=>{if (i!=action.payload) return appointment})
        },

        updateAppointment: (state) => {
            state.appointments[state.currentUpdateIndex] = { ...state.formData };
            state.formData = defaultFormData;
            state.formUpdate = false;
            state.currentUpdateIndex = -1;
        },

        changeFormData: (state, action: PayloadAction<appointmentType>) => {
            state.formData = {...action.payload};
        },

        callUpdateForm: (state, action: PayloadAction<number>) => {
            state.formUpdate = true;
            state.currentUpdateIndex = action.payload;
            state.formData = {...state.appointments[action.payload]};
        }

    }

})

export const {callUpdateForm, changeFormData, addAppointment, deleteAppointment, updateAppointment} = appointmentSlice.actions;
const appointmentReducer = appointmentSlice.reducer
export default appointmentReducer;