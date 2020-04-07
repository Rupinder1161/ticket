import React, { Component } from 'react'
import './progressbar.css'


const skills =[
    {
        Name:"HTML",Percent:70,color:"linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",     
    },
    {
        Name:"CSS",Percent:50,color:"linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",     
    },
    {
        Name:"Javscript",Percent:70,color:"linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",     
    },
    {
        Name:"Version Control/Git",Percent:80,color:"linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",     
    },
    {
        Name:"Command Line",Percent:90,color:"linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",     
    },
]


export class ProgressBar extends Component {
           
    constructor(props) {
        super(props)
    
        this.state = {
             hello:"h"
        }
    }
    

    render() {
        console.log(document.getElementsByClassName('InnerDiv'))
        return (
            <div className ="mainProgress">
                {skills.map(h =>{
                    return <div className="Bar"> 

                              <div className ="InnerDiv" style={{backgroundImage:`${h.color}`,width:`${h.Percent}%`}}>
                                   <strong style={{marginRight:'10px',marginLeft:'10px'}}>{h.Name}</strong>
                                    <strong style={{marginRight:'10px',marginLeft:'10px'}}>{h.Percent}%</strong>
                              </div>
                    </div>
                })}
            </div>
        )
    }
}

export default ProgressBar
