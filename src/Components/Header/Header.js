import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import APIContext from '../../APIContext'
import './Header.css'


export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()

  }

  static contextType = APIContext;

  renderLogoutLink() {
   const {soapify_users} = this.context
    return (
      <div className='Header_logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
        <Link 
          to={`/user/${soapify_users.id}`} activeClassName="active" >
          Your Page
            </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header_not-logged-in'>
        <ul>
          <li>
            <Link
              to='/register'>
              Register
            </Link>
          </li>
          <li>
            <Link 
              to='/login'>
                Log in
            </Link>
          </li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            Soapify
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}
