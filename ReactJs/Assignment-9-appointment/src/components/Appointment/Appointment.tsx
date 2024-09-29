import { appointmentType } from "../../types/appointment.type";

const Appointment = ({name, age, gender, status, time, date, number, doctor}: appointmentType)=>{
    return(
        <tr>
			<td>
				<div className="user-info">
					<div className="user-info__img">
						<img src="img/prof.png" alt="User Img" />
					</div>
					<div className="user-info__basic">
						<h5 className="mb-0">{name}</h5>
						<p className="text-muted mb-0">{age} yrs, {gender}</p>
					</div>
				</div>
			</td>
			<td>
				<span className="btn btn-success">{status}</span>
			</td>
			<td>
				<h6 className="mb-0">{time}</h6>
				<small>{date}</small>
			</td>
			<td>
				<h6 className="mb-0">{number}</h6>
				<a href={`tel:${number}`}><small>Contact</small></a>
			</td>
			<td>
				<h6 className="mb-0">Dr. {doctor}</h6>
			</td>
			<td>
				<div className="dropdown open">
					<a href="#!" className="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
							aria-expanded="false">
								<i className="fa fa-ellipsis-v"></i>
					</a>
					<div className="dropdown-menu" aria-labelledby="triggerId1">
						<a className="dropdown-item" href="#"><i className="fa fa-pencil mr-1"></i> Edit</a>
						<a className="dropdown-item text-danger" href="#"><i className="fa fa-trash mr-1"></i> Delete</a>
					</div>
				</div>
			</td>
		</tr>
    )
}

export default Appointment;