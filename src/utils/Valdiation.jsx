import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const checkValdiation = (email,password,name) => {
  const isEmailValid = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isUserName = /([a-zA-Z0-9_\s]+)/.test(name);

  if(!isEmailValid) return "Email is not Valid"
  if(!isPasswordValid)return "Password is not Valid"
  if(!isUserName) return "name is invalid"
  return null;

}

export default checkValdiation