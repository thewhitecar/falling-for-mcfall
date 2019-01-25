import React, { Component } from 'react';
import styled from 'styled-components'
import background from '../../assets/background.jpg'
import overlay from '../../assets/mcfallwhitecar.png'

export default class SplashPage extends Component {
  
  render() {
    return (
      <Background>
        <Gradient/>
        <Overlay src={overlay}/>
      </Background>
    );
  }
}

const Background = styled.div`
  z-index: -1;
  background-image: url(${background}) ;
  background-position: center center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;
  background-color: #999;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;

  @media screen and (min-width: 1025px){
    background-position: 0% 70%;
  }
`

const Gradient = styled.div`
  position: absolute;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
`

const Overlay = styled.img`
  z-index: 100;
  position: absolute;
  top: 30%;
  left: 50%;
  width: 300px;
  height: 300px;
  margin-top: -150px;
  margin-left: -150px;
  overflow: visible;

  @media screen and (min-width: 321px){
    width: 320px;
    height: 320px;
    margin-top: -160px;
    margin-left: -160px;
  }

  @media screen and (min-width: 768px){
    width: 600px;
    height: 600px;
    margin-top: -300px;
    margin-left: -300px;
  }

  @media screen and (min-width: 1024px){
    width: 800px;
    height: 800px;
    margin-top: -400px;
    margin-left: -400px;
    top: 32%;
  }

  @media screen and (min-width: 1025px){
    top: 40%;
    width: 600px;
    height: 600px;
    margin-top: -300px;
    margin-left: -300px;
  }

`

