import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';

import store from '../app/store';


import Category from './Category/Category'
import AddCategory from './Category/AddCategory'
import AddStock from './Stock/AddStock'


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
  if (_logout || isLoggedIn == null){
    return <Redirect to='/login'/>;
  }

  
  return (
    <>
      <AddCategory />
      <Category />
      <AddStock />
      
      <button className='btn btn-outline-info' onClick={(e) => signout()}>Logout</button>

    </>
  );
};

export default Dashboard;
