import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './percent.css'
import {
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";

  import Anime, {anime} from 'react-anime';
  import Typist from 'react-typist';


// const h = <h5> Hello <br/> {percentage}</h5>
export class PercentCircle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             percentage:0,
             percentage2:0,
        }
        this.increase = this.increase.bind(this)
        this.componentWillUnmount = this.componentWillUnmount(this)
    }

   increase = () =>{
     
      console.log("gurpreet")
        let str = this.state.percentage + 1;
        let number2 = this.state.percentage2 + 1;
        if (str <= 70){
          this.setState({
            percentage : str
          })
        }
        if(number2 <= 60){
          this.setState({
            percentage2:number2
          })
        }
        if(str === 70 ){
          clearInterval(this.interval);
      }
         
    }


  componentWillMount(){
       this.increase();
       
       this.interval = setInterval(this.increase, 100);
       
      
      // this.setState({
      //   percentage:this.increase()
      // })
  }
    
  componentWillUnmount(){
    console.log('componentWillMount')
  }
    render() {
   
          const text2 = "hello"
        const percentage = this.state.percentage;
        const percentageii = this.state.percentage2;
        return (
            <div className="prograssbar">    
              <div style={{marginRight:"10px"}}>
                               <CircularProgressbar value={percentage }  text={`${percentage}%`}
                              
                              styles={ buildStyles({
                                 // This is in units relative to the 100x100px
                                 // SVG viewbox.
                                 textSize: "25px",
                                 textColor:"white",
                                 backgroundColor: "red",
                                 pathColor: "yellow",
                               })}/> 
                              
           <div className="skillText">
             <Typist>
             <Typist.Delay ms={500}/>
             Front End
             </Typist>
             </div>
                 
              </div>
              <div >
              
                               <CircularProgressbar value={percentageii }  text={`${percentageii}%`}
                              
                              styles={ buildStyles({
                                 // This is in units relative to the 100x100px
                                 // SVG viewbox.
                                 textSize: "25px",
                                 textColor:"white",
                                 backgroundColor: "red",
                                 pathColor: "Green",
                               })}/> 
                             <Anime
                            //  loop={true}
                              easing="easeInOutQuint"
                               delay={(el, index) => index * 2}
         scale={[, 1.2]}
         >
           <div className="skillText">Back-End</div>
          
           </Anime>
                              
                 
              </div>
              {/* <div>
                               <CircularProgressbar value={percentage }  text={`${percentage}%`}
                              
                              styles={ buildStyles({
                                 // This is in units relative to the 100x100px
                                 // SVG viewbox.
                                 textSize: "25px",
                                 textColor:"white",
                                 backgroundColor: "red",
                                 pathColor: "orange",
                               })}/> 

                              <div className="skillText">React</div>
                              
                 
              </div> */}
              
              
              
            </div>
        )
    }
}

export default PercentCircle

