import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context';
import Maybutton from '../Button/MayButton';

const Navbar = () => {
  const { isAuth, setIsAuth} = useContext(AuthContext)

  const logaut = ()=>{
    setIsAuth(false)
    localStorage.removeItem("auth")
  }

    return (
        <div className='navbar'>
        <Maybutton onClick={() => logaut()}>auth</Maybutton>
        <div className='navbar__links'>
          <Link to="/about">About</Link>
          <Link to='posts'> posts</Link>
        </div>
      </div>
    );
}

export default Navbar;
