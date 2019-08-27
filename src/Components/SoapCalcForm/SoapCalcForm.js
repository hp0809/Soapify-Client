import React, { Component } from 'react'
import { Button} from '../Utils/Utils'



export default class SoapCalcForm extends Component {
  static defaultProps = {
    onSubmitSuccess: () => {}
  }

  
  handleSubmit = ev => {
      ev.preventDefault()
      
  }

  render() {
    return (
      <form
        className='SoapCalcForm'
        onSubmit={this.handleSubmit}
        >

        <p>Amount of Yield (the size of your container):</p>
        <input type="number" name="soapYield" placeholder="1000"/>ml<br/>
        <p>Total amount of Oil (in grams):</p>
        <input type="number" name="oilAmount" />g <br/>

        <p>SELECT YOUR PERCENTAGE OF HARD OIL(S):</p>
        <label htmlFor='palmOil'>
          <input
            className='percentage' 
            name='oil'
            type='number'
            
             />
              Palm Oil
        </label>
        <label htmlFor='coconutOil'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
             
             />
              Coconut Oil
        </label>
        <label htmlFor='animalLard'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
             
             />
              Animal Lard
        </label>
        <label htmlFor='sheaButter'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
             
             />
              Shea Butter
        </label>
        <label htmlFor='tallow'>
          <input 
            className='percentage'
            name='oil'
            type='number'             
             />
              Tallow
        </label>

        <p>SELECT YOUR PERCENTAGE OF SOFT OIL(S)</p>

        <label htmlFor='almondOil'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
             
             />
              Almond Oil
        </label>
        <label htmlFor='oliveOil'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
             
             />
              Olive Oil
        </label>
        <label htmlFor='arganOil'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
             
             />
              Argan Oil
        </label>
        <label htmlFor='avocadoOil'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
             
             />
              Avocado Oil
        </label>
        <label htmlFor='castorOil'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
             
             />
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
      </form>
    )
  }
}
