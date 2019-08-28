import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Section} from '../../Components/Utils/Utils'
import APIContext from '../../APIContext'
import SoapifyApiService from '../../services/soapify-api-service'


export default class LandingPage extends Component {

    static contextType = APIContext;
    
    

    render() {
        const {user_soaps = []} = this.context
        return(
            <Section className='UserPage'>
                <h1> Welcome nickname || user_name</h1>
                    <div className="userInfo">
                    Username: 
                    user_name
                    User since: date_created
                    Custom soaps: 
                    <ListSoaps soaps={user_soaps} />
                    </div>       

            </Section>
        )
    }
}

function ListSoaps({user_soaps =[]}) {
    return(
        <ul>
            {user_soaps.map(soap =>
                <li key={soap.id} value={soap.id}>
                    <Link to={'/:userSoapsId'}>
                        Hello
                        {soap.name}
                    </Link>
                </li>
            )}
        </ul>
    )
}