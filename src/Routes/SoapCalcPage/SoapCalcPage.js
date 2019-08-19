import React, { Component } from 'react'
import SoapCalcForm from '../../Components/SoapCalcForm/SoapCalcForm'
import { Section } from '../../Components/Utils/Utils'

export default class SoapCalcPage extends Component {

  render() {
    return (
      <Section className='SoapCalcPage'>
        <h2>Make Your Soap</h2>
        <SoapCalcForm/>
      </Section>
    )
  }
}