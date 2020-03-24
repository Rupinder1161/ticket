import React, { Component } from 'react'
import  './selectionpart.css'
import { v4 as uuidv4 } from 'uuid';

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
    render() {
        return (
            <div className="selection">
                <h1>{data[0].header}</h1>
                <div className="PicDiv">
                  {data.map(name=>{
                      return <div className="pics"><img  id = {look} style={{width:'200px',height:'400px'}} src={name.NameofThePic}>{console.log({look})}</img></div>
                  })}
                </div>
            </div>
        )
    }
}

export default SelectionPart
