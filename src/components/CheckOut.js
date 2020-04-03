import React, { Component } from 'react'
import './checkout.css'
import mastercard from './mastercard.png'
import chip from './chip.png'

import TextField from '@material-ui/core/TextField'
import { KeyboardDatePicker } from '@material-ui/pickers'

// import form from '@material-ui/core/form'


// console.log(a)
const Card = (props) => {
          
    return   <div className ="card">
                        <div className ="logoDiv"><img className ="masterlogo" src={mastercard}></img></div>
                        <div className ="chipDiv"><img className ="masterlogo" style={{color:"yellow"}} src={chip}></img></div>
                        <div className="cardNumber"> <h1>{props.Number.slice(0, 4)}</h1><h1>{props.Number.slice(4, 8)}</h1><h1>{props.Number.slice(8, 12)}</h1><h1>{props.Number.slice(12, 16)}</h1></div>
                        <div className="namesTitle"> <h3 > CARDHOLDER NAME</h3> <h3>VALID THRU</h3></div>
                        <div className="names"> <h3 > {props.Name}</h3> <h3>{props.Month}/{props.Year}</h3></div>
</div>
}

const Form = (props) => {

   return  <div className ="form">
             <div>
             <form  noValidate autoComplete="off" className = "forMain">
             <TextField id="outlined-basic" label="Your Name" margin= "normal" onChange={props.Change} autoFocus value={props.Name} variant="outlined"color="secondary" style={{width:"80%"}} />
             <TextField id="outlined-basic" label="Your Number" margin= "normal" value ={props.Number} onChange={props.AdjustNum} variant="outlined" color="secondary" style={{width:"80%"}} />
             <TextField id="outlined-basic" label="Your Name"  type="month" margin= "normal"   variant="outlined" color="secondary" style={{width:"80%"}} />
           
            
                 </form>
             </div>
            </div>
}

export class CheckOut extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cardName:"Your Name",
             cardNumber:['1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7'],
             expiryMonth:"06",
             expiryYear:"22",
             privacyNumber:""
        }
        this.AdjustName = this.AdjustName.bind(this)
        this.AdjustNumber = this.AdjustNumber.bind(this)
    }
    

   AdjustName(e){
      
    this.setState({
        cardName: e.target.value
    })

   }

   AdjustNumber(e){
      
    this.setState({
        cardNumber: e.target.value
    })

   }

    

    render() {
        console.log(this.state.cardNumber)
        let a = this.state.cardNumber;
        return (
            <div className="Header">
                
                <div className="MainCenterDiv">
                          <Card Number={this.state.cardNumber} Name={this.state.cardName}  Month ={this.state.expiryMonth} Year = {this.state.expiryYear}/>   
                     
                         <Form Number={this.state.cardNumber} Name={this.state.cardName}  Month ={this.state.expiryMonth} Year = {this.state.expiryYear} Change={this.AdjustName} AdjustNum={this.AdjustNumber}/>
                     
                </div>

            </div>
        )
    }
}

export default CheckOut
