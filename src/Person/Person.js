import React from 'react';
import './Person.css'

const Person =(props)=>{
    return (
    <div className="Person">
        <p onClick={props.click}> Hello, I am {props.name } and age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name} />
    </div>
 )
};

export default Person;