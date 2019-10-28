import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Section, Button} from '../../Components/Utils/Utils'
import './LandingPage.css'
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
            <Section className='forTesters'>
                <h3>Hello Testers!</h3>
                <p>Please register first to use the calculator!</p>

                <div className='about'>
                    <h3>About</h3>
                Soapify is a beginners tool to calculate the correct amount of ingredients for making soap!
                It includes the top 5 commonly used hard and soft oils and maintains a 1.5:1 water ratio as well as a 15% superfat rate.
                This app is designed for first time soap makers to just get a handle on making soap before diving head first into all the options there are for making soap. 
                    <br/>
                We hope you enjoy this app and happy soap making!
            </div>
            </Section>
            </>
        )
    }
}