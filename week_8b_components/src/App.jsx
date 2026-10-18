import { useState } from 'react'
import './App.css'

function App() {
  const name= "Courtney"; 
  const paragraph= "Hope you're having fun learning about react";
  
  return (
    <>
      <div> 
        <h1>Welcome, {name}</h1>
        <p>{paragraph}</p> 
      </div> 
    </>
  )
}

export default App
