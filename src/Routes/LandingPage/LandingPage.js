import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Section, Button} from '../../Components/Utils/Utils'
import './LandingPage'
import TokenService from '../../services/token-service';



export default class LandingPage extends Component {
    renderCalcLink() {
        return(
            <Link  
                to= '/soapCalc'
                className='soapCalc'
                >
                    <Button >
                        Get Started
                    </Button>
                </Link>
        )
    }

    renderLoginLink() {
        return(
            <Link
                to='/login'>
                    <Button>
                        Get Started
                    </Button>
                </Link>
        )
    }
    render() {
        return(
            <>
            <Section className='MainPage'>
                <h1>Soapify</h1>
                <h2>A Soap Calculation App</h2>
                {TokenService.hasAuthToken()
                    ? this.renderCalcLink()
                    : this.renderLoginLink()}
            </Section>
            <Section className='ForTesters'>
                <h3>Hello Testers!</h3>
                <p>Please register first to use the calculator!</p>
            </Section>
            </>
        )
    }
}