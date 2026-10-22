import React, { useEffect } from 'react'
import axios from 'axios'

const App = () => {
    
    useEffect(() =>{
      axios.get("http://127.0.0.1:8000/student/mark/")
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
    })

    const CreateNewTask = () => {

      headers = {
        "content-Type" : "Application/json",
        "Authorization": ""
      }

      const new_marks = {
        "tamil" : 90,
        "english": 85,
        "maths":95,
        "science":90,
        "social_science":90
      }

      axios.post("http://127.0.0.1:8000/student/mark/",new_marks,{headers})
      .then(response => console.log(response.data))
      .catch(error => console.log(error))  
    }
    return (
      <div>
          <button onClick={CreateNewTask}>Create Task</button>
      </div>
    )
}





import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; --2

