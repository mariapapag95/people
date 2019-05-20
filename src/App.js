import React from 'react';
import Routes from './components/Routes'
import Navbar from './components/Navbar'
import './App.css';
import CreateList from './components/CreateList';

function App(props) {

  return (
    <div>
      <Navbar/>
      <div className="form">
        <Routes/>
      </div>
    </div>

  )
}
  
export default App;