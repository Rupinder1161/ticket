import React, { Component } from 'react'
import './aboutus.css'

 const Welcome = (props) => {
    return <h1>About, {props.name}</h1>;
  }

 const Button = (props) => {
 return <button> Cool {props.name} </button>
 }
export class AboutUs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
     

    render() {
        return (
            <div>
                          <div className="Header">
                            <Welcome name="me" />
                            {/* <br/>
                            <Button name="Click me"/>  */}
                          </div>
                           
                           <div className="Middle">
                               <div className="LeftBox"
                               ></div>
                               <div className="RightBox">

                               </div>
                               

                           </div>

                           {/* <div className="Middle">
                               <div className="LeftBox"
                               ></div>
                               <div className="RightBox">

                               </div>
                               

                           </div> */}

            </div>
        )
    }
}

export default AboutUs
