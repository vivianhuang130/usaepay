import React, { Component } from "react";
import FormComponent from "./Form";
import { formValueSelector, reduxForm, SubmissionError } from "redux-form";
import fetch from "isomorphic-fetch";
import { connect } from "react-redux";
import sha256 from "sha256";
import { reduxForm } from 'redux-form';

const seed = "abcdefghijklmnop";
const apikey = "_u33u6XAjiK4x2dX9Ue6jPZsi142c64l";
const apipin = "1234";
const prehash = apikey + seed + apipin;
const apihash = `s2/${seed}/${sha256(prehash)}`;
const authKey = new Buffer(`${apikey}:${apihash}`).toString("base64");

const selector = formValueSelector("dollarform");

const Form = reduxForm({
  form: "dollarform",
  initialValues: {
    command: "cc:sale",
    amount: 1,
    amount_detail: {
      tip: 0,
      tax: 1
    },
    creditcard: {
      cardholder: "Vivian Huang",
      number: 4000101111112221,
      expiration: 1219,
      cvc: 123,
      avs_street: "1234 Home",
      avs_zip: "500011"
    },
    invoice: "90017"
  },
  onSubmit: function(values) {
    fetch("https://sandbox.usaepay.com/api/v2/transactions", {
      method: "POST",
      headers: {
        "User-Agent": "uelib v6.8",
        "Content-Type": "application/json",
        Authorization: `Basic ${authKey}`
      },
      body: JSON.stringify(values)
    })
      .then(response => response.json())
      .then(response => {
        console.log("Everything is fine");
      })
      .catch(err => console.log(err));
  }
})(FormComponent);

export default connect(state => selector(state, "amount", "amount_detail"))(
  Form
);
