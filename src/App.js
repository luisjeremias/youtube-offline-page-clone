import React  from 'react';
import './App.css';
import Header from './Components/Header';
import LeftBar from './Components/LeftBar';
import Body from './Components/Body'

const page = () =>{
  return(
    <>
    <Header/>
    <LeftBar/>
    <Body/>
    </>
  )
}

export default page;