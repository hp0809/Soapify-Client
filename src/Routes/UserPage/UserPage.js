import React, {Component} from 'react'
import {format} from 'date-fns'
import {Link} from 'react-router-dom'
import {Section, Button} from '../../Components/Utils/Utils'
import APIContext from '../../APIContext'
import './UserPage.css'


export default class UserPage extends Component {

    static contextType = APIContext;
    
    parseUserInfo = () => {
        const userInfo = window.localStorage.userInfo
        return JSON.parse(userInfo)
    } 
    
    render() {
        const userInfo = this.parseUserInfo();
       
        return(
            <Section className='UserPage'>
                <h1> Welcome, {userInfo.nickname || userInfo.user_name}!</h1>
                <div className="userInfo">
                    <h4>Username: {userInfo.user_name}</h4>
                    <h4>User since: {format(userInfo.date_created, 'Do MMM YYYY')}</h4>             
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