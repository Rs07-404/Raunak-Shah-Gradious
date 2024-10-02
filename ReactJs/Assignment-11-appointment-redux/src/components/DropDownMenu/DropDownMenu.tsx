import { useDispatch } from "react-redux";
import { callUpdateForm, deleteAppointment } from "../../redux/AppointmentRedux/AppointmentSlice";
import { AppDispatch } from "../../redux/Store";
const DropDownMenu = (props)=>{
    const dispatch: AppDispatch = useDispatch();
    return(
        <div className="dropdown-menu" aria-labelledby="triggerId1">
				<a className="dropdown-item" onClick={()=>(dispatch(callUpdateForm(props.index)))}><i className="fa fa-pencil mr-1"></i> Edit</a>
				<a className="dropdown-item text-danger" onClick={()=>dispatch(deleteAppointment(props.index))}><i className="fa fa-trash mr-1"></i> Delete</a>
		</div>
    )
}

export default DropDownMenu;