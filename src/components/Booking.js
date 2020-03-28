import React, { Component } from 'react'
import './booking.css'
import EventSeatIcon from '@material-ui/icons/EventSeat';
import Grid from '@material-ui/core/Grid';
import ReactHorizontalDatePicker from "react-horizontal-strip-datepicker";
import Divider from '@material-ui/core/Divider';
var g = ['']

const h =[
    {time:"1"}
]

     for(var x = 0; x <= 30 ; x++){
        g.push(<EventSeatIcon className='seat' fontSize="large" />);
     }
    //  console.log(g)


    const timee = [
       {time:"9.00"},
       {time:"12.00"},
       {time:"3.00"},
       {time:"6.00"},
       {time:"9.00"},
       
    ]

   

    const startDate = "26-04-2017";

    const endDate = "26-05-2017";
    const toggle = true;
  
  
    const onSelectedDay = (d) =>{
        console.log(d)
    };



export class Booking extends Component { 
    constructor(props) {
        super(props);   
        this.state = {
          username: '',
          excercises:[],
         
        }
    
      }
      
      

    render() {

        
        return (
            <div className="main">
                
                <div className="topDiv">


                 <div className="topDivLeft">
                 <img  style={{width:'200px',height:'400px'}} src="https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg"></img>
                 </div>

                 <div className="topDivRight">
                 <ReactHorizontalDatePicker selectedDay={onSelectedDay} enableScroll={true} enableDays={90} style={{padding:"10px",fontSize:"50px"}}/> 
                 
                 {/* {timee.map(h => <h4 className ="cool">{h.time}</h4>)}  */}
                 </div>

                </div>
                  
                <Divider/>
                
            <div className="mainView">
                <div className="seatsRight">
                 {g.map(g => g)}
                </div>
                <div className="seatsLeft">
                {g.map(g => g)}
                </div>
            </div></div>
        )
    }
}

export default Booking
