import React,{ useState } from "react";
import styled from "styled-components";

//Components
import Lamp from "./Lamp";
import LightSwitch from "./LightSwitch"


const Room = styled.div`
position : relative;
width : 500px;
height : 500px;
border : 5px solid black;
margin : 0 auto;
border-radius : 10%;
`;




function App() {
// isLampOneOn is the name of the State
// setIsLampOneOn is the setter method for the state
// destructuring from the array that we get back from the useState hook
// state is immutable we should always use state setter to set the state

  //Lamp one
  const [isLampOneOn, setIsLampOneOn] = useState(false);
  //Lamp Two
  const [isLampTwoOn, setisLampTwoOn] = useState(true);


  //just two functions to be called when we click the button
  // these functions calls the setter functions and "prev" gets the inital values
  //insde the useState function (false,true);
  const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
  const handleLightSwitchTwo = () => setisLampTwoOn(prev => !prev);

  return (
    <Room>
      <Lamp lampOn = {isLampOneOn} position = 'left' />
      <Lamp lampOn = {isLampTwoOn} position = 'right' />

      <LightSwitch
        name='one'
        callback = {handleLightSwitchOne}
        switchOn = {isLampOneOn}
        position = 'left'
      />
      <LightSwitch
        name='two'
        callback = {handleLightSwitchTwo}
        switchOn = {isLampTwoOn}
        position = 'right'
      />
    </Room>
  );




}

export default App;
