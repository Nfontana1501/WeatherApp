import React from "react";
import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import '../weather.css';
import { Watch } from  'react-loader-spinner';

export default function WeatherApp(){

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        loadInfo();
    }, []);

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ""}`
    }, [weather]);

    async function loadInfo(city = 'Bangkok'){
        try{
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
            const json = await request.json();

            setTimeout(() => {
                setWeather(json);
            }, 5000);

            console.log(json)
        }
        catch{

        }
    }

    function handleChangeCity(city){
        setWeather(null);
        console.log(city)
        loadInfo(city);
    }

    return(
        <div className="mainContainer">
            <WeatherForm onChangeCity={handleChangeCity}/>
            {weather ? 
            <WeatherMainInfo weather={weather}/> :             
            <div style={{display: "flex", justifyContent: "center", marginTop: "20%"}}>
            <Watch height="80" width="80" radius="48"
            color="white"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            />
            </div> }
        </div>
    )
}
