import { useDispatch, useSelector } from "react-redux";
import { stateType, AppDispatch } from "../../redux/Store";
import { addAppointment, updateAppointment, changeFormData } from "../../redux/AppointmentRedux/AppointmentSlice";
import { appointmentType } from "../../types/appointment.type";

const Form = ()=>{
    const dispatch: AppDispatch = useDispatch();
    const { formUpdate, formData } = useSelector((state: stateType)=> state.appointBookingApp);
    
    const handleChange = (e)=>{
        const {name, value} = e.target
        dispatch(changeFormData({...formData,[name]:value} as appointmentType));
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch(addAppointment());
    }

    const handleUpdate = (e) =>{
        e.preventDefault();
        dispatch(updateAppointment());
    }
    return(
	<section className="form-content">
    <div className="container register-form">
                <div className="form">
                    <div className="note">
                        <p>Welcome to Gradious Doctor Appointment Booking</p>
                    </div>
    
                    <div className="form-content">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input name="patientName" type="text" className="form-control" placeholder="Patient Name *" onChange={handleChange} value={formData.patientName} required/>
                                </div>
                                <div className="form-group">
                                    <select name="gender" onChange={handleChange} value={formData.gender}  className="form-control" required>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option> 
                                    </select>            
                                </div>
                                <div className="form-group">
                                    <input name="age" type="number" onChange={handleChange} className="form-control" placeholder="Age *" value={formData.age} required/>
                                </div>
    
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input name="phoneNumber" onChange={handleChange} type="text" className="form-control" placeholder="Phone Number *" value={formData.phoneNumber} required/>
                                </div>
                                <div className="form-group">
                                    <input name="date" type="date" onChange={handleChange} className="form-control" placeholder="Date *" value={formData.date} required/>
                                </div>
    
                                <div className="form-group">
                                    <input name="time" type="time" onChange={handleChange} className="form-control" placeholder="Time *" value={formData.time} required/>
                                </div>
    
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input name="doctorName" type="text" className="form-control"  onChange={handleChange} placeholder="Doctor Name *" value={formData.doctorName} required/>
                                </div>
                                <div className="form-group">
                                    <select name="status" onChange={handleChange} value={formData.status} className="form-control" required>
                                    <option value="">Select Appointment Type</option>
                                    <option value="Consult">Consult</option>
                                    <option value="Revisit">Revisit</option> 
                                    </select>                               
    
                                </div>
                            </div>
    
                        </div>
                        {(!formUpdate)?<input type="submit" className="btnSubmit" onClick={handleSubmit} value="Book Appointment" />:<input type="submit" className="btnSubmit" onClick={handleUpdate} value="Update Appointment" />}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Form;