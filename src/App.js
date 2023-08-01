import React, { useEffect, useState } from 'react';
import './App.css';
import Loader from './Features/Loader/Loader';
import Dashboard from './Pages/Dashboard/Dashboard';

const App = () => {
  const [loader, setLoader] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false);
    }, 2800);
  });
  
  return (
    <div className="App">
      {
        loader ? <Loader /> : <Dashboard />
      }
    </div>
  )
}

export default App