import Appointment from "../Appointment/Appointment";
import { useSelector } from "react-redux";
import { stateType } from "../../redux/Store";

const List = ()=>{
	const {appointments} = useSelector((state: stateType) => state.appointBookingApp)
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