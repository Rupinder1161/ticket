import React, { Component } from 'react'
import  './selectionpart.css'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Router,Link } from 'react-router-dom';

const data = [
    {header:"Select The Movie" ,NameofThePic:"https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg",
     NamesOfTheMovie:['galaxy Of Guardians','rest','visible']},
     {NameofThePic:"https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg"},
     {NameofThePic:"https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg"},
     {NameofThePic:"https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg"},
     {NameofThePic:"https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg"},
     {NameofThePic:"https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg"},
     {NameofThePic:"https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg"},
     {NameofThePic:"https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg"},
     {NameofThePic:"https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg"},
     {NameofThePic:"https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg"},
     {NameofThePic:"https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg"},
     {NameofThePic:"https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg"},
     {NameofThePic:"https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg"},

]

const look = uuidv4()
export class SelectionPart extends Component {

    constructor(props) {
        super(props);
    
        
        this.state = {
          username: '',
          excercises:['']
        }
       this.data = this.data.bind(this);
    
      }

      data(){
        axios.get('http://localhost:5000/excercises/')
        .then(response => {
             console.log(response.data[0])
           this.setState({ username: response.data,
            exercises: response.data,
         })
           console.log(this.state.excercises[0]._id)
         // console.log(this.state.exercises.style)
        })
        .catch((error) => {
          console.log(error);
        })
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


    render() {



        return (
            <div className="selection">
                <h1>{data[0].header}</h1>
                
                <div className="PicDiv">
                  {data.map(name=>{
                      return <div className="pics"> <Link to ="/booking"><img  id = {look} style={{width:'200px',height:'400px'}} src="https://s3.birthmoviesdeath.com/images/made/X-Men-Dark-Phoenix-New-Poster_1200_1777_81_s.jpg"></img></Link>
                        {/* { this.data() } */}
                        </div>
                  })}
                </div>
            </div>
        )
    }
}

export default SelectionPart
