import React, { useEffect, useState } from 'react';
import './App.css';
import Loader from './Features/Loader/Loader';
import Dashboard from './Pages/Dashboard/Dashboard';
// import Admin from './admin/Admin';

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
        // loader ? <Loader /> : <Admin />
      }
    </div>
  )
}

export default App