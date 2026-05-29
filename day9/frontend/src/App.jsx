import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'



const App = () => {
  const [notes, setnotes] = useState([])
  
  
  function fetchNotes(){
    axios.get("https://backend-6vsn.onrender.com/")
      .then((response)=>{
        setnotes(response.data.notes)
      })
  }
  function deleteHandle(noteId){
   axios.delete("https://backend-6vsn.onrender.com/"+noteId)
   .then(res=>{
    fetchNotes()
   })
  }
  useEffect(() => {
    fetchNotes()
  }, [])

  function handleSubmit(e){
   e.preventDefault()
   const {title,description} =e.target.elements
  //  console.log(title.value,description.value)

   axios.post("https://backend-6vsn.onrender.com/",{
    title:title.value,
    description:description.value
   })
   .then((response)=>{
    // console.log(response.data)
    fetchNotes()
   })
  }
  
  return (
    <>
    <form className='note-create-form' onSubmit={(e)=>{
      handleSubmit(e)
    }}>
      <input type="text" name="title" placeholder='Enter Title'/>
      <input type="text" name="description" placeholder='Enter description' />
      <button>Create Note</button>

    </form>
    
    <div className="notes">
      {notes.map((note,idx)=>{
        return <div className="note" key={idx}>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
        <button 
        onClick={()=>{
          deleteHandle(note._id) //note._id gives the value notes id created by mongoose in databse
        }}>
          delete
        </button>
      </div>
      })
      }
      
    </div>
      
    </>
  )
}

export default App
