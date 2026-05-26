import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [notes, setnotes] = useState([
    {
    title:"test title 1",
    description:"title 1 description"
  },{
    title:"test title 2",
    description:"title 2 description"
  },{
    title:"test title 3",
    description:"title 3 description"
  },{
    title:"test title 4",
    description:"title 4 description"
  }
])

 axios.get("http://localhost:3000/api/notes/")
  .then((response)=>{
    // console.log(response.data)
    setnotes(response.data.notes)
  })
  return (
    <>
    <div className="notes">
      {notes.map((note,idx)=>{
        return <div className="note" key={idx}>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
      </div>
      })
      }
      
    </div>
      
    </>
  )
}

export default App
