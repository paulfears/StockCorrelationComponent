import Styled, {keyframes} from 'styled-components'
import React from 'react'
const MainDiv = Styled.div`
  border: 1px solid black;
  border-radius: 10px;
  align-content: right;
  width: 300px;
  height: 300px;
  text-align: center;
  
  align-items: center;
  diplay: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  
  
`
const UpperDiv = Styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #0D0B04;
  padding-bottom: 40px;
`
const BottomDiv = Styled.div`
  
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3D3B30;
  
`
const Button = Styled.button`
  padding: 20px;
  margin: auto;
  cursor: pointer;
  align-self: center;
  text-decoration: none;
  background-color: #8C98DE;
  color: white;
  border-radius: 1em;

  border:none;
`
const Row = Styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
const Col = Styled.div`
  display:flex;
  flex-direction: column;
  align-content: center;
`

const TickerInput = Styled.input`
  
 
  font-size: 150%;
  text-align: center;
`
const LoadAnimation = keyframes`
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
`
const LoadDiv = Styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid red;
  width: 90%;
  height: 90%;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: ${LoadAnimation} 2s linear infinite;
`

class StockCorrelation extends React.Component{

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      correlation:null, 
      stock1:props.stock1, 
      stock2:props.stock2, 
      display1:props.stock1, 
      display2:props.stock2,
      loadig: false
    };
    
    this.getCorrelation = this.getCorrelation.bind(this);
    this.handleTicker1 = this.handleTicker1.bind(this);
    this.handleTicker2 = this.handleTicker2.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  
  async getCorrelation(ticker1, ticker2){
    this.startLoad()
    const url = 'https://ak25ue8dgl.execute-api.us-east-2.amazonaws.com/default/correlation'
    let raw_data = await fetch(url,
      {
        method:"POST",
        headers:{
          "content-type":"text/plain"
        },
        body:JSON.stringify({"ticker1":ticker1, "ticker2":ticker2})
      }
    );
    let result = await raw_data.text()
    result = JSON.parse(result).output;
    console.log(result);
    await this.setState({"correlation":result});
    this.setState({"display1":ticker1,"display2":ticker2})
    console.log("here");
    this.endLoad();
  }
  startLoad(){
    this.setState({"loading": true})
  }
  endLoad(){
    this.setState({"loading": false})
  }

  handleTicker1(event){
    this.setState({stock1:event.target.value})
  }
  handleTicker2(event){
    this.setState({stock2:event.target.value})
  }
  handleUpdate(){
    console.log(this.state.ticker1)
    console.log(this.state.ticker2)
    this.getCorrelation(this.state.stock1, this.state.stock2);
  }

  componentDidMount(){
    this.getCorrelation(this.props.stock1, this.props.stock2);
  }

  render(){
    return(
      <MainDiv style={{width: this.props.width, height: this.props.height}}>
        <LoadDiv style={{display: this.state.loading? "block":"none"}}></LoadDiv>
          <UpperDiv style={{display: this.state.loading? "none":"flex"}}>
            <h2>Price Correlation</h2>
            <Row>
              <Col>
                
                <TickerInput size="4" maxlength="4" value={this.state.stock1} onChange={this.handleTicker1}/>
                <label>Ticker 1</label>
              </Col>
              <Col>
                <h1>{this.state.correlation}%</h1>
              </Col>
              <Col>
              
             <TickerInput size="4" maxlength="4" value={this.state.stock2} onChange={this.handleTicker2}/>
              <label>Ticker 2</label>  
              </Col>
            </Row>
          </UpperDiv>
          <BottomDiv style={{display: this.state.loading? "none":"flex"}}>
            <Button onClick={this.handleUpdate}>Update</Button>
          </BottomDiv>
        
      </MainDiv>
    );
  }

}


export default StockCorrelation;