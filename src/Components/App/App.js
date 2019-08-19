import React , {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../../Routes/LoginPage/LoginPage'
import RegistrationPage from '../../Routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage'
import LandingPage from '../../Routes/LandingPage/LandingPage'
import UserPage from '../../Routes/UserPage/UserPage'
import SoapCalcPage from '../../Routes/SoapCalcPage/SoapCalcPage'
import Header from '../../Components/Header/Header'
import './App.css'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: true}
  }

  render() {
    return (
      <div className='App'>
        <header className='App_header'>
          <Header />
        </header>
        <main className='App_main'>
          {this.state.hasError && <p className='red'>There was an error! </p>}
          <Switch>
            <Route 
              exact
              path={'/'}
              component={LandingPage} 
            />
            <Route
              path={'/login'}
              component={LoginPage}
            />
            <Route
              path={'/register'}
              component={RegistrationPage}
            />
            <Route 
              path={'/user/:userId'}
              component={UserPage}
            />
            <Route  
              path={'/soapCalc'}
              component={SoapCalcPage}
            />
            <Route  
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;