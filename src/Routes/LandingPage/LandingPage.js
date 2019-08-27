import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Section, Button} from '../../Components/Utils/Utils'
import './LandingPage'


export default class LandingPage extends Component {
    render() {
        return(
            <Section className='MainPage'>
                <h1>Soapify</h1>
                <h2>A Soap Calculation App</h2>
                <Link
                    to='/soapCalc'
                    className='soapCalc'>
                        <Button>                    
                            Get Started!
                        </Button>
                </Link>

            </Section>
        )
    }
}