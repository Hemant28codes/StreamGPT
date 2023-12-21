import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className='flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={require('../assets/logo.png')} alt="logo" />
      {
        user && <div className='flex p-2'>
          <img className='w-12 h-10' alt="userIcon" src={require('../assets/user.png')} />
          <button className="font-bold text-gray-900" onClick={handleSignOut}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header;