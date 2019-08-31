import React , {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../../Routes/LoginPage/LoginPage'
import RegistrationPage from '../../Routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage'
import LandingPage from '../../Routes/LandingPage/LandingPage'
import UserPage from '../../Routes/UserPage/UserPage'
import SoapCalcPage from '../../Routes/SoapCalcPage/SoapCalcPage'
import Header from '../../Components/Header/Header'
import PublicOnlyRoute from '../../Components/Utils/PublicOnlyRoute'
import PrivateRoute from '../../Components/Utils/PrivateRoute'
import APIContext from '../../APIContext'
import IdleService from '../../services/idle-service'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import './App.css'

class App extends Component {

  state = { 
    soapify_users: [],
    user_soaps: [],
    userObject: {
      userId: '',
      user_name: '',
      nickname: '',
      email: '',
      date_created: ''
    },
    hasError: false
   };

  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: true}
  }

  

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle)

    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken()
      })
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.forceUpdate()
  }

  handleAddSoap = soap => {
    this.setState({
      soap: [
        ...this.state.user_soaps,
        soap
      ]
    })
  }

  handleDeleteSoap = soapId => {
    this.setState({
      user_soaps: this.state.user_soaps.filter(soap => soap.id !== soapId)
    })
  }

  handleSetUserInfo = userInfo => { 
    this.setState({ 
      userInfo: userInfo
    })
  }


  render() {
    const value = {
      soapify_users: this.state.soapify_users,
      user_soaps: this.state.user_soaps,
      addSoap: this.handleAddSoap,
      deleteSoap: this.handleDeleteSoap,
      setUserInfo: this.handleSetUserInfo,
      userObject: this.state.userObject
    }

    return (
      <APIContext.Provider value={value}>
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
              <PublicOnlyRoute
                path={'/login'}
                component={LoginPage}
              />
              <PublicOnlyRoute
                path={'/register'}
                component={RegistrationPage}
              />
              <PrivateRoute
                path={'/user/:userId'}
                component={UserPage}
              />
              <PrivateRoute  
                path={'/soapCalc'}
                component={SoapCalcPage}
              />
              <Route  
                component={NotFoundPage}
              />
            </Switch>
          </main>
        </div>
      </APIContext.Provider>
    )
  }
}

export default App;