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
      userIpArr: [],
      soapYield: 0
    }
  }

  componentDidMount() {
    SoapifyApiService.getSAPValues()
  }

 
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name)
    if(name === 'palmOil') {
      this.setState({
        palmOil: value
      })
      console.log(this.state)
    } else if (name === 'cococnutOil'){
      this.setState({
        coconutOil: value
      })
    } else if (name === 'animalLard'){
      this.setState({
        animalLard: value
      })
    } else if (name === 'sheaButter'){
      this.setState({
        sheaButter: value
      })
    } else if (name === 'tallow'){
      this.setState({
        tallow: value
      })
    } else if (name === 'almondOil'){
      this.setState({
        almondOil: value
      })
    } else if (name === 'oliveOil'){
      this.setState({
        oliveOil: value
      })
    } else if (name === 'arganOil'){
      this.setState({
        arganOil: value
      })
    } else if (name === 'avocadoOil'){
      this.setState({
        avocadoOil: value
      })
    } else if (name === 'castorOil'){
      this.setState({
        castorOil: value
      })
    }
  }
/*
    const prevVal = this.state.userIpArr;
    const inArray = prevVal.includes(name)
    const alsoInArray = prevVal.includes(value)
    console.log(inArray)
    console.log(alsoInArray)
    console.log(prevVal)
    
    if(!inArray && !alsoInArray) {
      const currArr = prevVal.push({name: name, value: value})
      console.log(currArr)
      this.setState({
        userIpArr: prevVal
      })
    }
    console.log(this.state.userIpArr)
    */
  
 handleSoapYield = (event) => {
  this.setState({
      soapYield: event.currentTarget.value
 })
}

 parseOilInfo = () => {
  const oilInfo = window.localStorage.oilInfo
  return JSON.parse(oilInfo)
  
}

  handleAmountOfOil() {
    const oilInfoArray = this.parseOilInfo()
    const soapYield = this.state.soapYield     
    const userIpArr = this.state.userIpArr
    let sapValArr = [...this.state.userIpArr]

    console.log(this.state.palmOil)

    if(this.state.palmOil === '') {
      let object = {
        name: 'palmOil', value: this.state.palmOil
      }
      sapValArr.push(object)

      this.setState({
        userIpArr: sapValArr
      })
    } else if (this.state.coconutOil === ''){
      let object = {
        name: 'coconutOil', value: this.state.coconutOil
      }
      sapValArr.push(object)

      this.setState({
        userIpArr: sapValArr
      })
    } else if (this.state.animalLard === ''){
      let object = {
        name: 'animalLard', value: this.state.animalLard
      }
      sapValArr.push(object)

      this.setState({
        userIpArr: sapValArr
      })
    } else if (this.state.sheaButter === ''){
      let object = {
        name: 'sheaButter', value: this.state.sheaButter
      }
      sapValArr.push(object)

      this.setState({
        userIpArr: sapValArr
      })
    } else if (this.state.tallow === ''){
      let object = {
        name: 'tallow', value: this.state.tallow
      }
      sapValArr.push(object)

      this.setState({
        userIpArr: sapValArr
      })
    } else if (this.state.almondOil === ''){
      let object = {
        name: 'almondOil', value: this.state.almondOil
      }
      sapValArr.push(object)

      this.setState({
        userIpArr: sapValArr
      })
    } else if (this.state.oliveOil === ''){
      let object = {
        name: 'oliveOil', value: this.state.oliveOil
      }
      sapValArr.push(object)

      this.setState({
        userIpArr: sapValArr
      })
    } else if (this.state.arganOil === ''){
      let object = {
        name: 'arganOil', value: this.state.arganOil
      }
      sapValArr.push(object)

      this.setState({
        userIpArr: sapValArr
      })
    } else if (this.state.avocadoOil === ''){
      let object = {
        name: 'avocadoOil', value: this.state.avocadoOil
      }
      sapValArr.push(object)

      this.setState({
        userIpArr: sapValArr
      })
    } else if (this.state.castorOil === ''){
      let object = {
        name: 'castorOil', value: this.state.castorOil
      }
      sapValArr.push(object)

      this.setState({
        userIpArr: sapValArr
      })
    }
    console.log(this.state.userIpArr)

    for(let i = 0; i < userIpArr.length; i ++) {
      console.log(userIpArr[i])
      for(let n = 0; n < oilInfoArray.length; n++) {
        if(userIpArr[i] === oilInfoArray[n].oil_name){
          
          const sapValue= parseFloat((oilInfoArray[n].sap_value) )
          console.log(sapValue)


          //console.log((soapYield * (value / 100)) *  sapValue)
        }
      }
    }
  }



        //if(oilInfoArray[i].oil_name === name) {
          //const sapValue= parseFloat((oilInfoArray[i].sap_value) )
          //console.log((soapYield * (value / 100)) *  sapValue)
       // }      

  handleAmountOfWater=()=> {
    console.log(`hello`)
  }
    
  handleSubmit=(ev)=> {
    ev.preventDefault()
    this.handleAmountOfOil()    
  }
  
  render() {
    

    return (
      <form
        onSubmit={this.handleSubmit}
        className='SoapCalcForm'
        >

        <p>Amount of Yield (the size of your container):</p>
        <input type="number" name="soapYield" id="soapYield" placeholder="1000" onChange={this.handleSoapYield}/>ml<br/>
        
        <br/>

        <p>SELECT YOUR PERCENTAGE OF HARD OIL(S):</p>
        <p className='suggestion'>***Suggested ratio of hard to soft is 6:4***<br/>
          ie. 30% Coconut, 30% Shea Butter, 20% Avocado Oil, 20% Argan Oil  </p>
        <label htmlFor='palmOil'>
          <input
            className='percentage' 
            name='Palm Oil'
            type='number'
            id='oil'
            coef=' 0.141'
            onChange={this.handleInputChange}
            />
              Palm Oil
        </label>
        <label htmlFor='coconutOil'>
          <input 
            className='percentage' 
            name='Coconut Oil'
            type='number'
            id='oil'
            onChange={this.handleInputChange} 
            sapvalue='0.183'         
             />
              Coconut Oil
        </label>
        <label htmlFor='animalLard'>
          <input 
            className='percentage' 
            name='Animal Lard'
            type='number'
            id='oil'
            sapvalue='0.141'
            onChange={this.handleInputChange}            
             />
              Animal Lard
        </label>
        <label htmlFor='Shea Butter'>
          <input 
            className='percentage' 
            name='sheaButter'
            type='number'
            id='oil'
            sapvalue='0.183'
            onChange={this.handleInputChange}            
             />
              Shea Butter
        </label>
        <label htmlFor='tallow'>
          <input 
            className='percentage'
            name='Tallow'
            type='number'
            id='oil' 
            sapvalue='0.140'
            onChange={this.handleInputChange}          
             />
              Tallow
        </label>

        <p>SELECT YOUR PERCENTAGE OF SOFT OIL(S)</p>

        <label htmlFor='almondOil'>
          <input 
            className='percentage' 
            name='Almond Oil'
            type='number'
            id='oil'
            sapvalue='0.139'
            onChange={this.handleInputChange}
             
             />
              Almond Oil
        </label>
        <label htmlFor='oliveOil'>
          <input 
            className='percentage' 
            name='Olive Oil'
            type='number'
            id='oil'
            sapvalue='0.135'
            onChange={this.handleInputChange}
             
             />
              Olive Oil
        </label>
        <label htmlFor='arganOil'>
          <input 
            className='percentage' 
            name='Argan Oil'
            type='number'
            id='oil'
            sapvalue='0.188'
            onChange={this.handleInputChange}
             
             />
              Argan Oil
        </label>
        <label htmlFor='avocadoOil'>
          <input 
            className='percentage' 
            name='Avocado Oil'
            type='number'
            id='oil'
            sapvalue='0.133'
            onChange={this.handleInputChange}
             
             />
              Avocado Oil
        </label>
        <label htmlFor='castorOil'>
          <input 
            className='percentage' 
            name='Castor Oil'
            type='number'
            id='oil'
            sapvalue='0.183'
            onChange={this.handleInputChange}
             
             />
              Castor Oil
        </label>
        <br/>
        <br/>

        <Button type='submit' id='calculate' >
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
