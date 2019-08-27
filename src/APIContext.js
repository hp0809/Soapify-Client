import React from 'react'

export default React.createContext({
  soapify_users: [],
  user_soaps: [],
  addSoap: () => {},
  deleteSoap: () => {},
})