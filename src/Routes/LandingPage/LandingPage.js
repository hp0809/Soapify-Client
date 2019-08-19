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
                <Button>
                    <Link
                        to='/soapCalc'>
                            Get Started!
                    </Link>
                </Button>

            </Section>
        )
    }
}