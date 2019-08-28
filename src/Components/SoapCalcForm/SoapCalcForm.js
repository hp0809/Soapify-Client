import React, { Component } from 'react'
import { Button} from '../Utils/Utils'



export default class SoapCalcForm extends Component {
  
  handleSubmit = ev => {
      ev.preventDefault()
      
  }

  handleAmountOfOil = ev => {
    
    const totalSoapYield = document.getElementById("soapYield")
    const percentOfOil = document.getElementById('oil')
    const weightOfOils = totalSoapYield * (percentOfOil % 100)

    return weightOfOils
  }


  

  render() {
    

    return (
      <form
        className='SoapCalcForm'
        onSubmit={this.handleAmountOfOil()}
        >

        <p>Amount of Yield (the size of your container):</p>
        <input type="number" name="soapYield" id="soapYield" placeholder="1000" value="1000"/>ml<br/>
        <p>Total amount of Oil (in grams):</p>
        <input type="number" name="oilAmount" readOnly defaultValue={this.handleAmountOfOil} />
        
        <br/>

        <p>SELECT YOUR PERCENTAGE OF HARD OIL(S):</p>
        <label htmlFor='palmOil'>
          <input
            className='percentage' 
            name='oil'
            type='number'
            id='oil'
            
             />
              Palm Oil
        </label>
        <label htmlFor='coconutOil'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
            id='oil'
             
             />
              Coconut Oil
        </label>
        <label htmlFor='animalLard'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
            id='oil'
             
             />
              Animal Lard
        </label>
        <label htmlFor='sheaButter'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
            id='oil'
             
             />
              Shea Butter
        </label>
        <label htmlFor='tallow'>
          <input 
            className='percentage'
            name='oil'
            type='number' 
            id='oil'            
             />
              Tallow
        </label>

        <p>SELECT YOUR PERCENTAGE OF SOFT OIL(S)</p>

        <label htmlFor='almondOil'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
            id='oil'
             
             />
              Almond Oil
        </label>
        <label htmlFor='oliveOil'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
            id='oil'
             
             />
              Olive Oil
        </label>
        <label htmlFor='arganOil'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
            id='oil'
             
             />
              Argan Oil
        </label>
        <label htmlFor='avocadoOil'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
            id='oil'
             
             />
              Avocado Oil
        </label>
        <label htmlFor='castorOil'>
          <input 
            className='percentage' 
            name='oil'
            type='number'
            id='oil'
             
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
        <input type="number" name="waterAmount" readOnly>
        
        </input>
        <br/>
        <p>Total weight of Oils:</p>
        <input type="number" name="totalOil" readOnly defaultValue={this.handleAmountOfOil}/>

        <p>Caustic Soda needed (g):</p>
        <input type="number" name="causticSoda" readOnly/>
        <br/>
      </form>
    )
  }
}
