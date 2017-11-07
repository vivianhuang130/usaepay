import React, { Component } from "react";
import axios from '../axios'

class Form extends Component {
  state = {
  shouldRedirect : false
}

handleFormSubmit(evt){
  evt.preventDefault()
  const formData = {
    cname: this.refs.cname.value,
    cnumber: this.refs.cnumber.value,
    edate: this.refs.edate.value,
    cvv: this.refs.cvv.value,
    saddress: this.refs.saddress.value,
    zcode: this.refs.zcode.value,
    tip: this.refs.tip.value
  }
  axios.signUp(formData).then(success => {
    if(success) this.setState({shouldRedirect : true})
  })

}
  render() {
    return (
        <div className="cardHolder">
          <h1>Fill out credit card information</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input className="form" ref="email" type="text" placeholder="Email" />
            <input className="form" ref="password" type="password" placeholder="Password" />
            <button>Confirm Payment</button>
          </form>
        </div>
      )
  }
}

export default Form;
