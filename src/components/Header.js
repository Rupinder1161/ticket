import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar';
import './header.css'
import axios from 'axios';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const he = "hello"

const g = [
    {header:"Home", url:'/'},
    {header:"Book Ticket" ,url:'/booking'},
    {header:"About us",url:'/About'},

]

export class Header extends Component {
    static propTypes = {

    }
    constructor(props) {
      super(props);
  
      
      this.state = {
        username: '',
        excercises:[]
      }
      this.data = this.data.bind(this);
  
    }

    data(){
      axios.get('http://localhost:5000/excercises/')
      .then(response => { 
       // console.log(response.data._id)
         this.setState({ excercises: response.data })
         console.log(this.state.excercises.map(h => h._id))
       // console.log(this.state.exercises.style)
      })
      .catch((error) => {
        console.log(error);
      })
    return this.state.excercises.map(h=> <h1>{h.description}</h1>)
    }
      
    // data(){
    //     axios.get('http://localhost:5000/')
    //     .then(response => {
    //       this.setState({ username: response.data })
    //       console.log(response.data )
    //       // console.log(this.state.exercises)
    //      // console.log(this.state.exercises.style)
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    //     axios.post('http://localhost:5000/he',he)
    //     .then( res =>console.log("data sent"))
    //     .catch(err => console.log(err))
    //   }
      
    render() {
        return (
            
            <div className="header">     
                {g.map(h => {
                    // console.log(h.url)
                    return <h4> <Link to={h.url} className="Link">{h.header}</Link></h4>
                    })} 
                    {/* <button onClick={this.data}> {this.data()}</button> */}
            </div>
           
        )
    }
}

export default Header
