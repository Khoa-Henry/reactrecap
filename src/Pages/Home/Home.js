import React from 'react';
import './Home.css';
import Button from '../../Components/Button/Button';
import OverLay from '../../Components/OverLay/OverLay';

export default function Home(){
    return (
        <div className="home">
            <h1>Home Page</h1>
            <p>fjahfiuewhoifjewif</p>
            <Button  buttonName="Next"/>
            <Button buttonName="Back"/>
            <Button buttonName="Move"/>
            <OverLay name="hello" text="welcome"/>
            <OverLay name="hey" text="come in"/>
            <OverLay name="bye" text="plz leave"/>
        </div>
    )
};