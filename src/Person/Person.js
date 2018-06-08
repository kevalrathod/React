import React from 'react';
import classes from './Person.css';
import Radium from 'radium';


const Person =(props)=>{
    const style={
        '@media(min-width:500px)':{
            width:'450px'
        }
    }
    return(
        <div className={classes.Person}>
            <p onClick={props.click}>Hello i am {props.name}  and age is {props.age} </p>
            <p>{props.children}</p>
            <input  type="text" value={props.name} onChange={props.changed}/> 
        </div>
    )
}

export default Person;