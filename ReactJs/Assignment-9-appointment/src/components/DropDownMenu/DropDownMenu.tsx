import { useContext } from "react"
import { AppointmentContext } from "../../context/AppointementContext"

const DropDownMenu = (props)=>{
    const { callUpdateForm, deleteAppointment } = useContext(AppointmentContext)
    return(
        <div className="dropdown-menu" aria-labelledby="triggerId1">
				<a className="dropdown-item" onClick={()=>(callUpdateForm(props.index))}><i className="fa fa-pencil mr-1"></i> Edit</a>
				<a className="dropdown-item text-danger" onClick={()=>deleteAppointment(props.index)}><i className="fa fa-trash mr-1"></i> Delete</a>
		</div>
    )
}

export default DropDownMenu;