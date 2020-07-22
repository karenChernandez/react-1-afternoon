import React, { Component } from 'react';


class Sum extends Component{
        constructor(){
            super();
            this.state={
                number1: 0,
                number2: 0,
                sum:null
            }
        }


handleNumber1(val){
    this.setState({number1: parseInt(val, 10)})
}

handleNumber2(val){
    this.setState({number2: parseInt(val, 10)});
}

add(number1, number2){
this.setState({sum: number1 + number2})
}
    render() {
return(
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input className="inputLine" onChange={(event)=>this.handleNumber1(event.target.value)}></input>
      <input className="inputLine" onChange={(event)=> this.handleNumber2(event.target.value)}></input>
      <button className="confirmationButton" onClick={()=>this.add(this.state.number1, this.state.number2)}>Add</button>
      <span className="resultsBox">Sum:{this.state.sum}</span>
  </div>
)


    }
}
export default Sum;