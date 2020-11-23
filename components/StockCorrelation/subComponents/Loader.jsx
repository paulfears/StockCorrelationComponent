import React from 'react'
import './css/loader.css'
import Styled from 'styled-components'
const LoadAnimation = Styled.keyframes`
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
`
const LoadDiv = Styled.div`
  border: 16px solid blue;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 100%;
  height: 100%;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: {LoadAnimation} 2s linear infinite;
`
const ParentDiv = Styled.div`
  width: 100%;
  padding-top: 100%;
`

class Loader extends React.component{
  constructor(props){
    super();
    this.props = props;
    this.state = {display:"none"}
  }
  render(){
    <ParentDiv><LoadDiv style="display:{this.state.display}"></LoadDiv><ParentDiv>
  }


}

export default Loader;