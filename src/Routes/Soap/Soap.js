import React from 'react'
import { Link } from 'react-router-dom'
import APIContext from '../../APIContext'
import config from '../../config'

export default class Note extends React.Component {
  static defaultProps = {
    onDeleteSoap: () => {}
  }
  static contextType = APIContext;

  handleClickDelete = e => {
    e.preventDefault()
    const soapId = this.props.id


    fetch(`${config.API_ENDPOINT}/user/:userId/customSoap/${soapId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    }) 
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))        
      })
      .then(() => {
        this.context.deleteNote(soapId)
        this.props.onDeleteNote(soapId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { name, id } = this.props
    return (
      <div className='Soap'>
        <h2 className='Soap_Title'>
          <Link to={`/user/:userId/customSoap/${id}`}>
            {name}
          </Link>
        </h2>
        <button
          className='Soap_delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          remove
        </button>
      </div>
    )
  }
}