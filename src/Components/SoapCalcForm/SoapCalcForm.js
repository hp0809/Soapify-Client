import React, { Component } from 'react'
import { Button} from '../Utils/Utils'
import { Link } from "react-scroll"
import SoapifyApiService from '../../services/soapify-api-service'
import './SoapCalcForm.css'




export default class SoapCalcForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      isHidden: true,
      disabled: false,
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
      soapYield: 0,
      totalOil: [],
      totalWater:'',
      totalLye:''
    }
    this.results = React.createRef()
  }

  componentDidMount() {
    SoapifyApiService.getSAPValues()
  }

  
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
   

    if(name === 'Palm Oil') {
      this.setState({
        palmOil: value
      })
      
    }  if (name === 'Coconut Oil'){
      this.setState({
        coconutOil: value
      })
    }  if (name === 'Animal Lard'){
      this.setState({
        animalLard: value
      })
    }  if (name === 'Shea Butter'){
      this.setState({
        sheaButter: value
      })
    }  if (name === 'Tallow'){
      this.setState({
        tallow: value
      })
    }  if (name === 'Almond Oil'){
      this.setState({
        almondOil: value
      })
    }  if (name === 'Olive Oil'){
      this.setState({
        oliveOil: value
      })
    }  if (name === 'Argan Oil'){
      this.setState({
        arganOil: value
      })
    }  if (name === 'Avocado Oil'){
      this.setState({
        avocadoOil: value
      })
    }  if (name === 'Castor Oil'){
      this.setState({
        castorOil: value
      })
    }
  }
  
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
    
    let sapValArr = [...this.state.userIpArr]    

    if(!!this.state.palmOil.length) {      
      let object = {
        name: 'Palm Oil', value: this.state.palmOil
      }
      sapValArr.push(object)
     

    } if (!!this.state.coconutOil.length ){
      let object = {
        name: 'Coconut Oil', value: this.state.coconutOil
      }
      sapValArr.push(object)
      

    } if (!!this.state.animalLard.length ){
      let object = {
        name: 'Animal Lard', value: this.state.animalLard
      }
      sapValArr.push(object)
      

    }  if (!!this.state.sheaButter.length ){
      let object = {
        name: 'Shea Butter', value: this.state.sheaButter
      }
      sapValArr.push(object)
    

    }  if (!!this.state.tallow.length ){
      let object = {
        name: 'Tallow', value: this.state.tallow
      }
      sapValArr.push(object)
     

    }  if (!!this.state.almondOil.length ){
      let object = {
        name: 'Almond Oil', value: this.state.almondOil
      }
      sapValArr.push(object)
   

    }  if (!!this.state.oliveOil.length ){
      let object = {
        name: 'Olive Oil', value: this.state.oliveOil
      }
      sapValArr.push(object)
     

    }  if (!!this.state.arganOil.length ){
      let object = {
        name: 'Argan Oil', value: this.state.arganOil
      }
      sapValArr.push(object)
      

    }  if (!!this.state.avocadoOil.length ){
      let object = {
        name: 'Avocado Oil', value: this.state.avocadoOil
      }
      sapValArr.push(object)
     

    }  if (!!this.state.castorOil.length ){
      let object = {
        name: 'Castor Oil', value: this.state.castorOil
      }
      sapValArr.push(object)
    }
    this.setState({
      userIpArr: sapValArr
    }, () => {
      this.handleOilWeightAndLye()
    }) 
    }

    handleOilWeightAndLye = () => {

      const oilInfoArray = this.parseOilInfo()
      const soapYield = this.state.soapYield     
      const userIpArr = this.state.userIpArr
      
      let lyeAmounts = []
      let oilAmounts = []
        
        for(let i = 0; i < userIpArr.length; i ++) {
          const value = userIpArr[i].value
      
          for(let n = 0; n < oilInfoArray.length; n++) {
            
            if(userIpArr[i].name === oilInfoArray[n].oil_name){  
                          
              const sapValue= parseFloat(oilInfoArray[n].sap_value)
              const oilWeights = Math.round((soapYield * (parseFloat(value)/100)))
              let object = {
                oil: `${userIpArr[i].name}`, weight: oilWeights
              }
              oilAmounts.push(object)
              
              const lyeSapAmount = (soapYield * (parseFloat(value) / 100) *  sapValue)
              lyeAmounts.push(lyeSapAmount)
              
              
            }
          }
        }
        const oilTotalWeight = oilAmounts        
        const lyeSum = arr => arr.reduce((a,b) => a+b,0)
        const lyeTotal = Math.round((lyeSum(lyeAmounts) * 0.85))
        this.handleAmountOfWater(lyeTotal)
        this.setState({
          totalLye: lyeTotal,
          totalOil: oilTotalWeight
        }, () => {
          this.handleAmountOfWater(lyeTotal)
        })
      }       
    
  

  handleAmountOfWater=(lyeTotal)=> {
    const waterTotal = Math.round(lyeTotal * 1.75)
    this.setState({
      totalWater: waterTotal
    }, () => {
      this.renderResults()
    })
  }
    
  handleSubmit=(ev)=> {
    ev.preventDefault()
    this.handleAmountOfOil()
    this.handleDisableButton()
    this.handleScroll()
        
  }

  toggleHidden= ()=> {
    
    console.log(`handlescroll ran`)
    this.setState({
      isHidden: !this.state.isHidden
    })
    
    
  } 

  renderResults =() => {
    let totalOil = this.state.totalOil || {}
    
    return(
      <div className="results" id="results" >
      <h2 ref={this.results}>Your Results</h2>
        <h4 >Water (ml):</h4>  
             
          <p> {this.state.totalWater}</p>
        
        <h4>Total weight of Oils (g):</h4>
          <ul id='oilTotal'>
            {totalOil.map(obj =>
              <li key={obj.oil}> {obj.oil} : {obj.weight}</li>)}
          </ul>
        <h4>Caustic Soda needed (g):</h4>
          <p >{this.state.totalLye}</p>
      <br/>
      </div>
      
    )
  }

  handleDisableButton = () => {
    if(this.state.disabled) {
      return;
    }
    this.setState({
      disabled: true
    })
  }
  handleReset = () => {
    return window.location.href = '/soapCalc'
  }

  handleScroll = () => {
    if(!this.state.hidden){
      this.results.current.scrollIntoView({ 
         behavior: "smooth"
      })
  }
}

  render() { 
    return (
      <>
      <form
        onSubmit={this.handleSubmit}
        className='SoapCalcForm'
        >

        <p>Amount of Yield (the size of your container):</p>
        <input type="number" name="soapYield" id="soapYield" placeholder="1000" min='0' onChange={this.handleSoapYield}/>ml<br/>
        
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
            sapvalue=' 0.141'
            onChange={this.handleInputChange}
            min='0'
            max='100'
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
            min='0'
            max='100'        
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
            min='0'
            max='100'            
             />
              Animal Lard
        </label>
        <label htmlFor='Shea Butter'>
          <input 
            className='percentage' 
            name='Shea Butter'
            type='number'
            id='oil'
            sapvalue='0.183'
            onChange={this.handleInputChange} 
            min='0'
            max='100'           
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
            min='0'
            max='100'        
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
            min='0'
            max='100'
             
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
            min='0'
            max='100'
             
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
            min='0'
            max='100'
             
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
            min='0'
            max='100'
             
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
            min='0'
            max='100'
             
             />
              Castor Oil
        </label>
        <br/>
        <br/>
        
          <Button type='submit' id='calculate' onClick={this.toggleHidden}  disabled={this.state.disabled}>
          Calculate 
        </Button> 
       
              
        <Button type='reset' id='reset' onClick={this.handleReset}>
          Reset
        </Button>
        <br/>  
      </form>    
        
        {!this.state.isHidden && this.renderResults()}
      
      </>
    )
  }
}
