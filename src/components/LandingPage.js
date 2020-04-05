import React, { Component } from 'react'
import './landingpage.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import Hel from './Hel.svg'


import { Timeline } from 'react-material-timeline';
import { Avatar, Icon } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';



const events = [
    {
      title: <h4 style={{textAlign:'center',color:'White'}}>Graduate Diploma In Information Technology</h4>,
      subheader: 'Feb 2019',
      description: <span style={{color:'white'}}>'Some description for event 1' </span>,
      icon: <Avatar>{<SchoolIcon/>}</Avatar>,
    },
    {
      title: <h4 style={{textAlign:'center',color:'white'}}>Bachelors In Computer Science</h4>,
      subheader: 'July 2017',
      description: [ 'Some description for event 2' ],
    icon: <Avatar className="Avatar">{<SchoolIcon/>}</Avatar>,
    }
    ,
    {
      title: <h4 style={{textAlign:'center',color:'white'}}>Event 1</h4>,
      subheader: new Date().toString(),
      description: [ 'Some description for event 2' ],
      icon: <Avatar>{<SchoolIcon/>}</Avatar>,
    }
    ,
    {
      title: <h4 style={{textAlign:'center',color:'white'}}>Event 1</h4>,
      subheader: new Date().toString(),
      description: [ 'Some description for event 2' ],
      icon: <Avatar>{<SchoolIcon/>}</Avatar>,
    }
    ,
    {
      title: <h4 style={{textAlign:'center',color:'white'}}>Event 1</h4>,
      subheader: new Date().toString(),
      description: [ 'Some description for event 2' ],
      icon: <Avatar>{<SchoolIcon/>}</Avatar>,
    }
  ];



export class LandingPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
         
    }
    

    h(props){
    return <div>{props.events}</div>
    }
  
    render() {
        return (
            <div className ="Header" >
                <div className="MainCenterDiv">

                <div className="design">
                                <div className= "Navbar">
            
                                          <h1>Code Gen</h1>
                                           <nav>
                                               <h4>Home</h4>
                                               <h4>Projects</h4>
                                               <h4>Blog</h4>   
                                           </nav>
                                           <span >
                                           <FacebookIcon style={{textAlign:"center",paddingRight:"30px"}}/>
                                           <GitHubIcon/>
                                           </span>
                                </div>
                     
                     {/* div two */}

                     <div className="DivTwo">
                       <Typography className="mainText">
                             <span style={{color:"pink",opacity:0.7,fontSize:"30px",lineHeight:"0px"}}>Hello</span>,
                           <br/>  <span style={{color:"rgb(255,1,255)",fontSize:"50px",lineHeight:"50px"}}><span style={{color:"white"}}>I'm</span> Gurpreet</span>,
                           <br/> <span style={{color:"rgb(1,255,220)",fontSize:"60px",lineHeight:"50px"}}>Web Developer</span>
                           <br/>Frontend End Developer | React Developer
                       </Typography>
                       <div className="svg">
                       <img src={Hel} style={{height:"100%",width:"100%"}}></img>
                       </div>
                       
                     </div>
                </div>
                 {/* div two */}
               
                   {/* div three */}
                  
                   <div className="Divthree">
                       <div className="Box1">
                           <Typography>
                             Product Design
                           </Typography>
                           <Typography style={{textAlign:"justify"}}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                           </Typography>
                           </div>
                       <div className="Box2">
                           <Typography>
                           Work
                           </Typography>
                           <Typography style={{textAlign:"justify"}}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                           </Typography>
                           </div>
                       <div className="Box3">
                           <Typography>
                            Github

                           </Typography>
                           <Typography style={{textAlign:"justify"}}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                           </Typography>
                           
                           </div>
                   </div>

                   {/* div three */}
                  <div className="Divfour">
                      <h1 style={{margin:"40px"}}>My Road To Glory</h1>
        {console.log(events.map(e => <h1 style={{color:"red"}}>{e}</h1>))}
                <Timeline   events={events}/>
                  </div>

                </div>
                
            </div>
        )
    }
}

export default LandingPage
