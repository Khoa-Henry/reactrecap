import React from 'react';
import './Todo.css'
import Button from "../../Components/Button/Button";

export default function Todo(){
    return(
        <div className="todo">
            <h1>Todo Page</h1>
            <input/>
            <Button buttonName="Submit"/>
            <h4>List of inputs:</h4>
        </div>
    )
}