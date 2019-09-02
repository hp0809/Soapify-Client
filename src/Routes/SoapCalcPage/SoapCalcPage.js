import React, { Component } from 'react'
import SoapCalcForm from '../../Components/SoapCalcForm/SoapCalcForm'
import APIContext from '../../APIContext'
import { Section } from '../../Components/Utils/Utils'

export default class SoapCalcPage extends Component {

  static contextType = APIContext;  

  render() {
    return (
      <Section className='SoapCalcPage'>
        <h2>Make Your Soap</h2>
        <SoapCalcForm/>
      </Section>
    )
  }
}