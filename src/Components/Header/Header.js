import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Header.css'


export default class Header extends Component {
  handleLogoutClick = () => {
  }

  renderLogoutLink() {
    return (
      <div className='Header_logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
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
