import React from 'react';
import "./components/styles/app.css"
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/UI/NavBat/NavBar';
import Approuter from './components/AppRouter';
import { AuthContext } from './components/context';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem("auth")){
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  },[])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar />
        <Approuter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
