import React, { Component } from 'react'
import './aboutus.css'
import Button from '@material-ui/core/Button';
import Hello from './Hello.png'
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';




 const Welcome = (props) => {
    return <h1 >About, {props.name}</h1>;
  }

 const Button1 = (props) => {
 return <Button variant="contained"  className="Button" color="primary">{<GitHubIcon/>}</Button>
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
                            
                              <div className="Middle">
                                <div className="row1">
                                              <h2 className="logo">Code<span className="spanText">G</span>en</h2>
                                               <Button1  name="click me"/>
                                </div>
                                   <div className="About">
                                          <Welcome name="me" />
                                </div>
                                
                                <div className="codeIcon">
                                          <CodeIcon fontSize="large" style={{fontSize:"100px"}} />
                                </div>
                                <div className="TextDiv">
                                    <div className="textBox">
                                    <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                   </Typography>
                                    </div>
                                   
                                </div>

                             </div>
                           
                           
                          </div>
                           
                          
                              
                          
                              

            </div>
        )
    }
}

export default AboutUs
