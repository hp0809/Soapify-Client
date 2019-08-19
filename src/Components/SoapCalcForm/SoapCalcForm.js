import React, { Component } from 'react'
import { Button} from '../Utils/Utils'



export default class RegistrationForm extends Component {
  static defaultProps = {
    onSubmitSuccess: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      option: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        })
      }

  handleSubmit = ev => {
      ev.preventDefault()
      const { water, oils } = ev.target
      
      water.value = ''
      oils.value = ''
      this.props.onSubmitSuccess()
  }

  render() {
    return (
      <form
        className='SoapCalcForm'
        onSubmit={this.handleSubmit}
        >

        <p>Amount of Yield (in ml):</p>
        <input type="number" name="yield" placeholder="1000"/>ml<br/>
        <p>Total amount of Oil (in grams):</p>
        <input tye="number" name="oilAmount" />g <br/>

        <p>SELECT YOUR HARD OIL(S):</p>
        <label htmlFor='palmOil'>
          <input
            className='checkbox'
            name='option'
            type='checkbox'
            checked={this.state.checked}
            onChange={this.handleInputChange}/>
              Palm Oil
        </label>
        <label htmlFor='coconutOil'>
          <input 
            className='checkbox'
            name='option'
            type='checkbox'
            checked={this.state.checked}
            onChange={this.handleInputChange}/>
              Coconut Oil
        </label>
        <label htmlFor='animalLard'>
          <input 
            className='checkbox'
            name='option'
            type='checkbox'
            checked={this.state.checked}
            onChange={this.handleInputChange}/>
              Animal Lard
        </label>
        <label htmlFor='sheaButter'>
          <input 
            className='checkbox'
            name='option'
            type='checkbox'
            checked={this.state.checked}
            onChange={this.handleInputChange}/>
              Shea Butter
        </label>
        <label htmlFor='tallow'>
          <input 
            className='checkbox'
            name='option'
            type='checkbox'
            checked={this.state.checked}
            onChange={this.handleInputChange}/>
              Tallow
        </label>

        <p>SELECT YOUR SOFT OIL(S)</p>

        <label htmlFor='almondOil'>
          <input 
            className='checkbox'
            name='option'
            type='checkbox'
            checked={this.state.checked}
            onChange={this.handleInputChange}/>
              Almond Oil
        </label>
        <label htmlFor='oliveOil'>
          <input 
            className='checkbox'
            name='option'
            type='checkbox'
            checked={this.state.checked}
            onChange={this.handleInputChange}/>
              Olive Oil
        </label>
        <label htmlFor='arganOil'>
          <input 
            className='checkbox'
            name='option'
            type='checkbox'
            checked={this.state.checked}
            onChange={this.handleInputChange}/>
              Argan Oil
        </label>
        <label htmlFor='avocadoOil'>
          <input 
            className='checkbox'
            name='option'
            type='checkbox'
            checked={this.state.checked}
            onChange={this.handleInputChange}/>
              Avocado Oil
        </label>
        <label htmlFor='castorOil'>
          <input 
            className='checkbox'
            name='option'
            type='checkbox'
            checked={this.state.checked}
            onChange={this.handleInputChange}/>
              Castor Oil
        </label>
        <br/>
        <br/>

        <Button>
            Calculate
        </Button>
        <br/>
        <br/>
        
        <p>Water:</p>
        <input type="number" name="waterAmount"/> 
        <br/>

        <p>Caustic Soda needed (g):</p>
        <input type="number" name="causticSoda"/>
        <br/>
        <Button type='submit'>
            Save this soap
        </Button>
      </form>
    )
  }
}
