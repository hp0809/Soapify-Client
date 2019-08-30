import React, { Component } from 'react'
import { Button} from '../Utils/Utils'
import SoapifyApiService from '../../services/soapify-api-service'



export default class SoapCalcForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      palmOil:'',
      coconutOil:'',
      animalLard:'',
      sheaButter:'',
      tallow:'',
      almondOil:'',
      oliveOil:'',
      arganOil:'',
      avocadoOil:'',
      castorOil:'',
      soapYield:''
    }
  }

  componentDidMount() {
    SoapifyApiService.getSAPValues()

  }

 /* parseSoapInfo = () => {
    const oilInfo = window.localStorage.oils
    console.log(oilInfo)
    
}
*/
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(`handleInputChange's`, target)

    this.setState({
      [name]: value
    })

    this.handleAmountOfOil(event)
    console.log(`handle amount of oil ran`)
  }
  
  /*calculate = () => {
      document.getElementById("calculate").addEventListener('click',
      function(event){
        event.preventDefault()
      })
      const oil = this.handleAmountOfOil()
      return oil
  }
  */

  handleAmountOfOil = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    console.log(target)
    console.log(value)
    console.log(target.id)

    if(target.id === "oil") {
      const sapValue = name.sapValue
      
    } else if (target.id === "soapYield") {
      console.log(value)
    } else {
      return `didn't work`
    }

    
  }


  

  render() {
    

    return (
      <form
        className='SoapCalcForm'
        //onSubmit={this.handleSubmit()}
        >

        <p>Amount of Yield (the size of your container):</p>
        <input type="number" name="soapYield" id="soapYield" placeholder="1000" onChange={this.handleInputChange}/>ml<br/>
        
        <br/>

        <p>SELECT YOUR PERCENTAGE OF HARD OIL(S):</p>
        <p className='suggestion'>***Suggested ratio of hard to soft is 6:4***<br/>
          ie. 30% Coconut, 30% Shea Butter, 20% Avocado Oil, 20% Argan Oil  </p>
        <label htmlFor='palmOil'>
          <input
            className='percentage' 
            name='palmOil'
            type='number'
            id='oil'
            onChange={this.handleInputChange}
            />
              Palm Oil
        </label>
        <label htmlFor='coconutOil'>
          <input 
            className='percentage' 
            name='coconutOil'
            type='number'
            id='oil'
            onChange={this.handleInputChange} 
            //sapValue={this.state.sapValue}          
             />
              Coconut Oil
        </label>
        <label htmlFor='animalLard'>
          <input 
            className='percentage' 
            name='animalLard'
            type='number'
            id='oil'
            onChange={this.handleInputChange}            
             />
              Animal Lard
        </label>
        <label htmlFor='sheaButter'>
          <input 
            className='percentage' 
            name='sheaButter'
            type='number'
            id='oil'
            onChange={this.handleInputChange}            
             />
              Shea Butter
        </label>
        <label htmlFor='tallow'>
          <input 
            className='percentage'
            name='tallow'
            type='number'
            id='oil' 
            onChange={this.handleInputChange}          
             />
              Tallow
        </label>

        <p>SELECT YOUR PERCENTAGE OF SOFT OIL(S)</p>

        <label htmlFor='almondOil'>
          <input 
            className='percentage' 
            name='almondOil'
            type='number'
            id='oil'
            onChange={this.handleInputChange}
             
             />
              Almond Oil
        </label>
        <label htmlFor='oliveOil'>
          <input 
            className='percentage' 
            name='oliveOil'
            type='number'
            id='oil'
            onChange={this.handleInputChange}
             
             />
              Olive Oil
        </label>
        <label htmlFor='arganOil'>
          <input 
            className='percentage' 
            name='arganOil'
            type='number'
            id='oil'
            onChange={this.handleInputChange}
             
             />
              Argan Oil
        </label>
        <label htmlFor='avocadoOil'>
          <input 
            className='percentage' 
            name='avocadoOil'
            type='number'
            id='oil'
            onChange={this.handleInputChange}
             
             />
              Avocado Oil
        </label>
        <label htmlFor='castorOil'>
          <input 
            className='percentage' 
            name='castorOil'
            type='number'
            id='oil'
            onChange={this.handleInputChange}
             
             />
              Castor Oil
        </label>
        <br/>
        <br/>

        <Button  id='calculate'>
            Calculate
        </Button>
        <br/>
        <br/>
        
        <p>Water:</p>
        <input type="number" name="waterAmount" readOnly>
        
        </input>
        <br/>
        <p>Total weight of Oils:</p>
        <p id='oilTotal'></p>

        <p>Caustic Soda needed (g):</p>
        <input type="number" name="causticSoda" readOnly/>
        <br/>
      </form>
    )
  }
}
