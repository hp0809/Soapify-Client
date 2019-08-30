import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Section, Button} from '../../Components/Utils/Utils'
import APIContext from '../../APIContext'


export default class UserPage extends Component {

    static contextType = APIContext;
    
    parseUserInfo = () => {
        const userInfo = window.localStorage.userInfo
        return JSON.parse(userInfo)
    } 

    parseSoapInfo = () => {
        const soapInfo = window.localStorage.soapInfo
        console.log(soapInfo)
        
    }
    
    render() {
        const userInfo = this.parseUserInfo();
       
        return(
            <Section className='UserPage'>
                <h1> Welcome {userInfo.nickname || userInfo.user_name}!</h1>
                <div className="userInfo">
                    Username: {userInfo.user_name}
                    <br/>
                    User since: {userInfo.date_created}
                    <br/>             
                </div>  
                <div className='soapCalc'>
                <Link
                    to='/soapCalc'>
                        <Button>
                            Make New Soap!
                        </Button>
                    </Link>
                    </div>     

            </Section>
        )
    }
}

function ListSoaps() {
    const soapInfo = window.localStorage.soapInfo
    const soap = JSON.parse(soapInfo)
    return(
        <ul>
            {soap.map(soap =>
                <li key={soap.id} value={soap.id}>
                    <Link to={`/customSoap${soap.id}`}>
                        Hello
                        {soap.name}
                    </Link>
                </li>
            )}
        </ul>
    )
}