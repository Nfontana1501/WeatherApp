import React from "react";
import { useState } from "react";
import '../weather.css'

export default function WeatherForm({onChangeCity}){

    const [city, setCity] = useState("")

    function handleChange(e){
        const listener = e.target.value;
        setCity(listener)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(city !== ""){
        onChangeCity(city);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="weatherForm">
                <input type="text" onChange={handleChange} className="input" />
            </form>
        </div>
    )
}