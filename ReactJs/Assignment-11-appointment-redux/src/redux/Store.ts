import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "./AppointmentRedux/AppointmentSlice";

export const store = configureStore({
    reducer: {
        appointBookingApp: appointmentReducer
    }
})


export type AppDispatch = typeof store.dispatch;
export type stateType = ReturnType<typeof store.getState>;