import { FC, useEffect, useRef, useState } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

interface AppointmentProps{
	patientName: string,
    age: any,
    gender: string,
    status: string,
    time: any,
    date: any,
    phoneNumber: string,
    doctorName: string,
	index: number
}

const Appointment: FC<AppointmentProps> = ({patientName, age, gender, status, time, date, phoneNumber, doctorName, index})=>{
	const [ showDropdown, toggleshowDropdown ] = useState<boolean>(false);
	const dropDownRef = useRef<HTMLDivElement>(null);
	const convertTo12Hr = (time:string):string=>{
		const [hour, minute] = time.split(":").map(Number);
		const ampm = hour>=12?"PM":"AM";
		const hour12 = hour%12 || hour;
		return `${(hour12)<10?"0":""}`+`${hour12}`+":"+`${(minute)<10?"0":""}`+`${minute}`+`${ampm}`
	}

	useEffect(()=>{
		const handleMouseClick = (e: MouseEvent) => {
			if(dropDownRef.current && !dropDownRef.current.contains(e.target as Node)){
				toggleshowDropdown(false);
			}
		}

		document.addEventListener("mousedown", handleMouseClick);
		return(()=>{
			document.removeEventListener("mousedown", handleMouseClick);
		})
	}, [dropDownRef]);

	const tr = <tr>
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
			<div className="dropdown open" ref={dropDownRef}>
				{(!showDropdown)?<a onClick={()=>{toggleshowDropdown(true)}} className="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
						aria-expanded="false">
							<i className="fa fa-ellipsis-v"></i>
				</a>:
				<DropDownMenu index={index}/>}
			</div>
		</td>
	</tr>
    return(tr)
}

export default Appointment;