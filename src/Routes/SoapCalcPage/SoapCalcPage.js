import React, { Component } from 'react'
import SoapCalcForm from '../../Components/SoapCalcForm/SoapCalcForm'
import APIContext from '../../APIContext'
import { Button, Section } from '../../Components/Utils/Utils'

export default class SoapCalcPage extends Component {

  static contextType = APIContext;

  handleAddSoap = soap => {
    this.context.setState({
      userSoaps: [
        ...this.state.userSoaps,
        soap
      ]
    })
  }
  

  render() {
    return (
      <Section className='SoapCalcPage'>
        <h2>Make Your Soap</h2>
        <SoapCalcForm/>
        <Button type='submit'>
            Save this soap
        </Button>
      </Section>
    )
  }
}