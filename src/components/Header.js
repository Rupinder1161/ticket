import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './header.css'


const g = [
    {header:"Home"},
    {header:"Book Ticket"},
    {header:"About us"},

]

export class Header extends Component {
    static propTypes = {

    }
   

    render() {
        return (
            <div className="header">
                
                {g.map(h => {
                    console.log(h.header)
                    return <h4>{h.header}</h4>
                    })} 
            </div>
        )
    }
}

export default Header
