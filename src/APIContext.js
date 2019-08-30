import React from 'react'

export default React.createContext({
  soapify_users: [],
  soapify_oils: [],
  addSoap: () => {},
  deleteSoap: () => {},
  setUserInfo: () => {},
  userObject: {
    userId: '',
    user_name: '',
    nickname: '',
    email: '',
    date_created: ''
  }
})