import { useContext } from "react";
import { AppointmentContext } from "../../context/AppointementContext";
import { appointmentContextProps } from "../../types/appointment.context.props.type";

const Appointment = ({patientName, age, gender, status, time, date, phoneNumber, doctorName, index}: appointmentContextProps)=>{
	const { callUpdateForm, deleteAppointment } = useContext(AppointmentContext)
	const convertTo12Hr = (time:string):string=>{
		const [hour, minute] = time.split(":").map(Number);
		const ampm = hour>=12?"PM":"AM";
		const hour12 = hour%12 || hour;
		return `${(hour12)<10?"0":""}`+`${hour12}`+":"+`${(minute)<10?"0":""}`+`${minute}`+`${ampm}`
	}
	const td = <tr>
		<td>
			<div className="user-info">
				<div className="user-info__img">
					<img src="img/prof.png" alt="User Img" />
				</div>
				<div className="user-info__basic">
					<h5 className="mb-0">{patientName}</h5>
					<p className="text-muted mb-0">{age} yrs, {gender}</p>
				</div>
			</div>
		</td>
		<td>
			<span className="btn btn-success">{status}</span>
		</td>
		<td>
			<h6 className="mb-0">{convertTo12Hr(time)}</h6>
			<small>{(new Date(date)).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', 'year':'numeric'})}</small>
		</td>
		<td>
			<h6 className="mb-0">{phoneNumber}</h6>
			<a href={`tel:${phoneNumber}`}><small>Contact</small></a>
		</td>
		<td>
			<h6 className="mb-0">Dr. {doctorName}</h6>
		</td>
		<td>
			<div className="dropdown open">
				<a className="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
						aria-expanded="false">
							<i className="fa fa-ellipsis-v"></i>
				</a>
				<div className="dropdown-menu" aria-labelledby="triggerId1">
					<a className="dropdown-item" onClick={()=>(callUpdateForm(index))}><i className="fa fa-pencil mr-1"></i> Edit</a>
					<a className="dropdown-item text-danger" onClick={()=>deleteAppointment(index)}><i className="fa fa-trash mr-1"></i> Delete</a>
				</div>
			</div>
		</td>
	</tr>
    return(td)
}

export default Appointment;