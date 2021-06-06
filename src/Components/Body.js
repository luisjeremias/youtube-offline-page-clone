import React from 'react';
import styled from 'styled-components'
import image from './logo-offline.jpeg';


const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 100px;
  padding: -140px 0px 0px;
  align-items: center;
  img {
    margin: 10px;
  }
  span {
    color: #fff;
    font-weight: 0;
    font-size: 24px;
    font-family: arial;
    margin: 0px 0px 16px;
  }
  p {
    margin: 5px;
    font-weight: 0;
    font-family: arial;
    font-size: 14px;
    color: #fff;
  }
  button {
    width:80px;
    height:35px;
    color:#3EA6FF;
    background-color:transparent;
    border:1px solid #3EA6FF;
    margin: 19px;
    cursor:pointer;
  }
`;

const Body = () =>{
  
 
  return (
    <BodyContainer>
      <img src={image} alt="offline" draggable="false" />
      <span>Connect to the internet</span>
      <p>You're offline. Check your connection.</p>
      <button >RETRY</button>
    </BodyContainer>
  );
}

export default Body