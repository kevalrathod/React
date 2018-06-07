import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state={
    person:[
      {name:'max',age:'24'},
      {name:'mike',age:'28'},
      {name:'jon',age:'29'}
    ],
    otherstate:'some other value',
    showPerson: 'false'
  }

  switchName=(newName)=>{
    this.setState({
      person:[
        {name:newName,age:'24'},
        {name:'mike',age:'28'},
        {name:'jon',age:'29'}
      ]
    })
  }

  nameChangeValue =(event) =>{
    this.setState({
      person:[
        {name:'max',age:'24'},
        {name:event.target.value,age:'28'},
        {name:'jon',age:'29'}
      ]
    })
  }

  togglePersonhandler=()=>{
    const doesShow =this.state.showPerson;
    this.setState({showPerson:!doesShow});
  }

  render() {

    const style={
      padding:'8px',
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      cursor: 'pointer',
      margin:'1rem'
      
    };

    let persons =null;

    if(this.state.showPerson)
    {
      persons=(
        <div>
          {this.state.person.map(person=>{
            return <Person name={person.name}
                            age={person.age} />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Welcome.!</h1>
        <p> First react</p>
        <button 
        style={style}
        onClick={this.togglePersonhandler}>Switch Data </button>
        {persons}
      </div>      
    );
  }
}

export default App;
