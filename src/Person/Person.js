import React from 'react';
import './Person.css';



const Person =(props)=>{
    return(
        <div className="Person">
            <p onClick={props.click}>Hello i am {props.name}  and age is {props.age} </p>
            <p>{props.children}</p>
            <input  type="text" value={props.name} onChange={props.changed}/> 
        </div>
    )
}

export default Person;