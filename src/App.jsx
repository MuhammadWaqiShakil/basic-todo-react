import React, { useState } from 'react'
import './App.css'

function App() {
  const [note, setNote] = useState("")
  const [notesArr, setNotesArr] = useState([])

  const addNote = () => {
    if (note.trim() !== "") {
      setNotesArr([...notesArr, note])
      setNote("")
    }
  }

  const editNote = (keyIndex)=>{
    const editedNote = prompt("Edit your Todo...")
    const editArr = [...notesArr]
    editArr[keyIndex] = editedNote
    setNotesArr(editArr)
  }
  
  const deleteNote = (keyIndex)=>{
    const updatedNotesArr  = notesArr.filter((_,index)=>index!==keyIndex)
    setNotesArr(updatedNotesArr)
  }

  const clearAll = () => {
    setNotesArr([])
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="container p-5 mt-5">
            <h1 className="heading mb-5">Todo App</h1>
            <input id="inputNote" className="input-group mb-4 br-4 rounded-pill ps-3 pb-2 pt-2"  value={note}
          onChange={(e) => setNote(e.target.value)} type="text" placeholder="Enter your Todo..."/>
            <div className="text-center">
                <button className="btn btn-light btn1 ps-5 pe-5 pt-2 pb-2" id="btnAdd" onClick={addNote}>Add</button>
                <button className="btn btn-light btn1 ms-2 ps-5 pe-5 pt-2 pb-2" id="btnClear" onClick={clearAll}>Clear All</button>
            </div>
        </div>
      </div>
      
      
    <div id="notes" className="mt-5 ms-auto me-auto ">          
          {notesArr.map((value, index) => (
            <div id="alertBox" key={index} className="alert alert-dark d-flex justify-content-between"  role="alert">
                {value}
                 <div>
                    <i className="fa-regular fa-pen-to-square" onClick={()=> editNote(index)}></i>
                    <i className="fa-solid fa-trash-can" onClick={()=> deleteNote(index)}></i>
                </div>
          </div>
          ))}
   </div>
    </div>
  )
}

export default App
