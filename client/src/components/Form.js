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
  axios.userInfo(formData).then(success => {
    if(success) this.setState({shouldRedirect : true})
  })

}
  render() {
    return (
        <div className="cardHolder">
          <h1>Credit Card Information</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <div>
              <p className="input">CardHolder's Name</p>
              <input className="form" ref="cname" type="text" placeholder="CardHolder's Name" />
            </div>
            <div>
              <p className="input">Credit Card Number</p>
              <input className="form" ref="cnumber" type="text" placeholder="Credit Card Number" />
            </div>
            <div>
              <p className="input">Expiration Date</p>
              <input className="form" ref="edate" type="date" placeholder="Expiration Date" />
            </div>
            <div>
              <p className="input">CVV</p>
              <input className="form" ref="cvv" type="text" placeholder="CVV" />
            </div>
            <div>
              <p className="input">Street Address</p>
              <input className="form" ref="saddress" type="text" placeholder="Street Address" />
            </div>
            <div>
              <p className="input">Zip Code</p>
              <input className="form" ref="zcode" type="text" placeholder="Zip Code" />
            </div>
            <div>
              <p className="input">Tip</p>
              <input className="form" ref="tip" type="text" placeholder="Tip" />
            </div>
            <button className="button">Confirm Payment</button>
          </form>
        </div>
      )
  }
}

export default Form;
