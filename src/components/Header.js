import React, {useEffect} from 'react';
import { auth } from '../utils/firebase';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const{ uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  },[])

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className='flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={require('../assets/logo.png')} alt="logo" />
      {
        user && <div className='flex p-2'>
          <img className='w-12 h-9' alt="userIcon" src={require('../assets/user.png')} />
          <button className="font-bold text-white" onClick={handleSignOut}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header;