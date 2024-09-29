
const List = ()=>{
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
					<tr>
						<td>
							<div className="user-info">
								<div className="user-info__img">
									<img src="img/prof.png" alt="User Img"/>
								</div>
								<div className="user-info__basic">
									<h5 className="mb-0">Mukul Rao</h5>
									<p className="text-muted mb-0">28 yrs, Male</p>
								</div>
							</div>
						</td>
						<td>
							<span className="btn btn-primary">Revisit</span>
						</td>
						<td>
							<h6 className="mb-0">06:00 PM</h6>
							<small>2 Feb 2021</small>
						</td>
						<td>
							<h6 className="mb-0">+91 9876543215</h6>
							<a href="#!"><small>Contact</small></a>
						</td>
						<td>
							<h6 className="mb-0">Dr. Ananth</h6>
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
					<tr>
						<td>
							<div className="user-info">
								<div className="user-info__img">
									<img src="img/prof.png" alt="User Img"/>
								</div>
								<div className="user-info__basic">
									<h5 className="mb-0">Neeraj Sharma</h5>
									<p className="text-muted mb-0">28 yrs, Male</p>
								</div>
							</div>
						</td>
						<td>
							<span className="btn btn-success">Consult</span>
						</td>
						<td>
							<h6 className="mb-0">06:00 PM</h6>
							<small>2 Feb 2021</small>
						</td>
						<td>
							<h6 className="mb-0">+91 9876543215</h6>
							<a href="#!"><small>Contact</small></a>
						</td>
						<td>
							<h6 className="mb-0">Dr. Ananth</h6>
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
				</tbody>
			</table>
		</div>
	</section>
    )
}

export default List;