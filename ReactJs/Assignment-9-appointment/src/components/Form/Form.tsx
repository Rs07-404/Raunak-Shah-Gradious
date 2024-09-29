const Form = ()=>{
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
                                    <input type="text" className="form-control" placeholder="Patient Name *" value=""/>
                                </div>
                                <div className="form-group">
                                    <select  className="form-control" value="">
                                        <option value="M">Male</option>
                                        <option value="F">Female</option> 
                                    </select>                               
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Age *" value=""/>
                                </div>
    
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Phone Number *" value=""/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Date *" value=""/>
                                </div>
    
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Time *" value=""/>
                                </div>
    
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Doctor Name *" value=""/>
                                </div>
                                <div className="form-group">
                                    <select  className="form-control" value="">
                                    <option value="Consult">Consult</option>
                                    <option value="Revisit">Revisit</option> 
                                    </select>                               
    
                                </div>
                            </div>
    
                        </div>
                        <button type="button" className="btnSubmit">Book Appointment</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Form;