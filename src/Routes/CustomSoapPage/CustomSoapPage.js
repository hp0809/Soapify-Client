import React from 'react'
import Soap from '../Soap/Soap'
import APIContext from '../../APIContext'

export default class CustomSoapPage extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = APIContext

  handleDeleteSoap = soapId => {
    this.props.history.push(`/`)
  }

  findSoap = (user_soaps=[], soapId) => {
      return user_soaps.find( (soap) => {
          return parseInt(soap.id) === parseInt(soapId)
      })
  }

  render() {
    const { userSoaps=[] } = this.context
    const { soapId } = this.props.match.params
    const soap = this.findSoap(userSoaps, soapId) || { content: '' }
    return (
      <section className='Soap_Page'>
        <Soap
          id={soap.id}
          name={soap.name}
          onDeleteSoap={this.handleDeleteSoap}
        />
        <div className='Soap_Page_Content'>
          {soap.text.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}