import React, { useEffect, useState } from 'react';
import './App.css';
import ComingSoon from './Pages/ComingSoon';
import Loader from './Features/Loader/Loader';

const App = () => {
  const [loader, setLoader] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false);
    }, 6000);
  });
  
  return (
    <div className="App">
      {
        loader ? <Loader /> : <ComingSoon />
      }
    </div>
  )
}

export default App