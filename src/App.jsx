import React from 'react'
import './App.css';
import Header from './components/Header';
import Exdashboard from './components/Exdashboard';
import Ppdashborad from './components/Ppdashborad';
import Registry from './components/Registry';


const App = () => {
  return (
    <div className='main'>
      <Header/>
      <h5>CNAPP Dashboard</h5>
      <Exdashboard/>
      <Ppdashborad/>
      <Registry/>
    </div>
  )
}

export default App