import React from 'react'
import './css/loader.css'
import Styled from 'styled-components'
const LoadAnimation = Styled.keyframes`
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
`
const LoadDiv = Styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 100%;
  height: 100%;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: {LoadAnimation} 2s linear infinite;
`

class Loader extends React.component{
  constructor(props){
    super();
    this.props = props;
    this.state = {display:"none"}
  }
  render(){
    <LoadDiv style="display:{this.state.display}"></LoadDiv>
  }


}

export default Loader;