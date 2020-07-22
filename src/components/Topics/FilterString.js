import React, { Component } from 'react';


class FilterString extends Component{
    constructor(){
        super();
        this.state={
            arrayOfStrings: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }
    handleUserInput(value){
        this.setState({userInput:value})
    }
    handleFilteredArray(userInput){
        let names= this.state.arrayOfStrings
        let filteredNames = [];
        
        for(let i=0; i< names.length; i++){
            if(names[i].includes(userInput)){
                filteredNames.push(names[i])
            }
        }
        this.setState({filteredArray: filteredNames})

    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names:{JSON.stringify(this.state.arrayOfStrings,null, 10)}</span>
                <input className="inputLine" onChange={(event)=>this.handleUserInput(event.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.handleFilteredArray(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names:{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
            
        )
    }
}
export default FilterString;