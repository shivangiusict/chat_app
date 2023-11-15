import React,{useState, useEffect} from 'react'
import styled from "styled-components";
import Robot from "../assets/robot.gif";


export default function Welcome({currentUser}) {
  return (
    <Container>
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>
        Please select a chat to start Messaging.
      </h3>
    </Container>
  )
}
const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
color:white;
gap:1rem;
img{
    height:20rem;
}
span{
    color:#4e0eff;
}
`;