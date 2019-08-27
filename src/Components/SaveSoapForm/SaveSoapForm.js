import React, { Component } from 'react'
import APIContext from '../../APIContext'
import { Button, Textarea } from '../Utils/Utils'

export default class SaveSoapForm extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = APIContext;

  handleSubmit = ev => {
    ev.preventDefault()
    const newSoap = {
      name: e.target['name'].value,
      text: e.target['text'].value,
      userId: this.context.user.id,
      modified: new Date(),
    }

    SoapifyApiService.postSoap(newSoap)
      .then(this.context.addSoap)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='SaveSoapForm'
        onSubmit={this.handleSubmit}
      >

        <div className='name'>
          <Textarea
            required
            aria-label='Name of custom soap'
            name='soap-name'
            id='soap-name'
            cols='20'
            rows='1'
            placeholder='Name your custom soap'>
          </Textarea>
        </div>
        <div className='text'>
          <Textarea
            required
            aria-label='Write some notes...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Write some notes...'>
          </Textarea>
        </div>

        <Button type='submit'>
          Save this soap
        </Button>
      </form>
    )
  }
}
