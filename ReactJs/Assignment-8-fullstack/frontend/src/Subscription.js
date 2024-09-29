import React from "react";


export default function Subscription({onSubscriptionUpdate}) {

    const [subscription, setSubscription] = React.useState(getEmptySubscription())

    const comment = React.useRef();

    function handleChange(event){
        setSubscription((prevSub)=> {
            return {
                    ...prevSub,
                    [event.target.name]: event.target.type=="checkbox"?event.target.checked:
                                  event.target.value
            }
        })

    }
    function getEmptySubscription() {
        return {
            name:"",
            email:"",
            role:"",
            frequency:"",
            termAgreement: false
        }
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(subscription)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...subscription, comment: comment.current.value})
        };
        
        fetch('http://localhost:3001/addSubscription', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log("resp", data)
            setSubscription(getEmptySubscription())
            onSubscriptionUpdate()
        });


    }

    return (

        <div className="wrapper">
        <h2>Subscription</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" placeholder="Enter your name" required 
            name="name" value={subscription.name}  onChange={handleChange}/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" required 
            name="email" value={subscription.email} onChange={handleChange}/>
          </div>
          <div className="input-box" required>
            <select name="role"  default={subscription.name} onChange={handleChange}>
            <option value="Role" default>Role</option>
            <option value="CXO">CXO</option>
            <option value="Manager">Manager</option>
            <option value="Engineer">Engineer</option>
            <option value="Others">Others</option>        
            </select>
          </div>
          <div className="input-radio">
          <p>How would you like to receive news-letters?</p>
            <span><input type="radio" id="daily" name="frequency" 
            checked={subscription.frequency=="daily"}  value="daily"
            onChange={handleChange}/>
            <label htmlFor="daily">Daily</label></span>

            <span><input type="radio" id="weekly" name="frequency"
            checked={subscription.frequency=="weekly"}   value="weekly"
            onChange={handleChange}/>
            <label htmlFor="weekly">Weekly</label></span>        
          </div>
          <div className="policy">
            <input type="checkbox" checked={subscription.termAgreement}
            onChange={handleChange} name="termAgreement"/>
            <h3>I accept all terms & condition</h3>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter additional comments" required 
            name="email" ref={comment}/>
          </div>

          <div className="input-box button">
            <input type="Submit" value="Register Now"/>
          </div>
        </form>
      </div>
    




    )



}