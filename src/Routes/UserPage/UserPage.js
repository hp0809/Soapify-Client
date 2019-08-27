import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Section} from '../../Components/Utils/Utils'
import APIContext from '../../APIContext'
import SoapifyApiService from '../../services/soapify-api-service'


export default class LandingPage extends Component {

    static defaultProps = {
        match: {
          params: {}
        }
      }

    static contextType = APIContext;

    render() {
        const {soapify_users =[], users_soaps=[]} = this.context
        const userId = this.props.params
        
        return(
            <Section className='UserPage'>
                <h1> Welcome nickname || user_name</h1>
                    <div className="userInfo">
                    Username: {userId}
                    user_name
                    User since: date_created
                    Custom soaps: 
                    <ListSoaps />
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