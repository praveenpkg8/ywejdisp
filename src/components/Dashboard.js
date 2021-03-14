import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';



import store from '../app/store';


import MaterialPrice from './Category/MaterialPrice'
import VerticalNav from "../components/VerticalNav";



const element = <FontAwesomeIcon icon={faTrash} />;

const Dashboard = () => {

  const [_logout, setLogout] = useState(false);


  const dispatch = useDispatch()
  const state = store.getState();
  const userState = state.user.user;
  const isLoggedIn = userState._login;

  const signout = () => {
    dispatch(
      logout()
    );
    setLogout(true);
  };

  if (_logout || isLoggedIn == null) {
    console.log('Redirecting to login')
    console.log(_logout || isLoggedIn == null)
    return <Redirect to='/login' />;
  }


  return (
    <>
      <MaterialPrice />
      <button className='btn btn-outline-info' onClick={(e) => signout()}>Logout</button>
    </>
  );
};

export default Dashboard;
