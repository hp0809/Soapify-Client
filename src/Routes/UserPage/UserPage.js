import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Section} from '../../Components/Utils/Utils'


export default class LandingPage extends Component {
    render() {
        return(
            <Section className='UserPage'>
                <h1> Welcome Username-Here</h1>
                    <div className="userInfo">
                    Username: USERNAME
                    User since: DATE HERE
                    Custom soaps: 
                    <ul>
                        <li>
                            <Link to={'/user/:userId/:soapId'}>
                            Custom soap 1
                            </Link>
                        </li>
                        <li>
                            <Link to={'/user/:userId/:soapId'}>
                            Custom soap 2
                            </Link>
                        </li>
                        <li>
                            <Link to={'/user/:userId/:soapId'}>
                            Custom soap 3
                            </Link>
                        </li>
                    </ul>
                    </div>       

            </Section>
        )
    }
}