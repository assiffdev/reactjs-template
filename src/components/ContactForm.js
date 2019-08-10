import React, { Component } from 'react'
import '../styles/ContactForm.css';
export class ContactForm extends Component {
    constructor(props){
       super(props);
       this.state =  {userName: '',email: '', phone: '', message: ''};
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        alert (JSON.stringify(this.state));
       event.preventDefault();
    }
    handleChange(event) {
        
         const inputName = event.target.name;
         const value = event.target.value;
         this.setState({[inputName]: value});
        
         
    }
    render() {
        return (
                <React.Fragment>
                <form onSubmit={this.handleSubmit} >
                  <div className="form-left">
                  <input type="text"
                  autoComplete="off"
                  name="userName"
                   onChange = {this.handleChange}
                   value={this.state.userName}
                   placeholder="Your Name" />
                   
                   <input type="text" 
                   autoComplete="off"
                   name = "email"
                   onChange = {this.handleChange}
                   value={this.state.email}
                   placeholder="Email" />
                   
                   <input type="text" 
                   name="phone"
                   autoComplete="off"
                   onChange = {this.handleChange}
                   value={this.state.phone}
                   placeholder="Phone" />
                   </div>
                   <div className="form-right">
                       <textarea 
                       autoComplete="off"
                       name="message"
                       value={this.state.message}
                       placeholder="Message"
                       onChange={this.handleChange} />
                       
                       <input type="submit" value="Submit" />
                   </div>
                </form>
                </React.Fragment>
            
        )
    }
}

export default ContactForm
