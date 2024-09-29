import { useContext } from "react";
import { AppointmentContext } from "../../context/AppointementContext";
import Appointment from "../Appointment/Appointment";

const List = ()=>{
	const {appointments} = useContext(AppointmentContext)
    return(
        <section className="main-content">
		<div className="container">
			<br />
			<br />
			<table className="table">
				<thead>
					<tr>
						<th>Patient</th>
						<th>Status</th>
						<th>Appointment</th>
						<th>Phone</th>
						<th>Doctor</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{appointments.map((appointment, i)=><Appointment key={i} {...appointment} index={i} />)}
				</tbody>
			</table>
		</div>
	</section>
    )
}

export default List;