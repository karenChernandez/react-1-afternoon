import React, { Component } from 'react';



class FilterObjects extends Component{
    constructor(){
        super();
        this.state={
            unFilteredArray: [{
                name: 'Karen',
                title: 'Student',
                age: 30,
            },
                {
                    name: 'Camden',
                    title: 'Student'
                },
                {
                    name: 'Cavin',
                    title: 'Student',
                },
                {
                    name: 'Darryl',
                    title: 'Student',
                },
                {
                    name: 'Elijah',
                    title: 'Student',
                }],
            userInput:'',
            filteredArray:[]
        }
    }


    handleUserInput(value){
        this.setState({userInput:value})
    }
    handleFilterArray(prop){
        let employees =this.state.unFilteredArray;
        let filteredEmployees =[];
        for(let i=0; i <employees.length; i++){
            if (employees[i].hasOwnProperty(prop)){
                filteredEmployees.push(employees[i])
            }
        }
        this.setState({filteredArray:filteredEmployees})
    }
    render(){
        return(
            <div className="puzzleBox filterObjectPB">

                <h4>Filter Object</h4>
                <span className="puzzleText">Original:{JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(event)=>this.handleUserInput(event.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.handleFilterArray(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filter:{JSON.stringify(this.state.filteredArray)}</span>

            </div>
        )
    }

}
export default FilterObjects;