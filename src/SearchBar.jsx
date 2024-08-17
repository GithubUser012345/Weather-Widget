 import "./SearchBar.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBar({updateInfo}) {

    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;
    // const apiKey = process.env.REACT_APP_API_KEY;


    //api
    let weatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let weatherObj = {
                city : city,
                feels_like : jsonResponse.main.feels_like,
                temp : jsonResponse.main.temp,
                humidity : jsonResponse.main.humidity,
                temp_max : jsonResponse.main.temp_max,
                temp_min : jsonResponse.main.temp_min,
                description : jsonResponse.weather[0].description

            };
            return weatherObj;
        }catch(err){
            throw err;
        }
    }

    function handleChange(evt) {
        setCity(evt.target.value);
    }

    async function handleSubmit(evt){
        try{
            evt.preventDefault();
            console.log(city);
            let info = await weatherInfo();
            setCity("");
            console.log("info is", info);
            updateInfo(info);
        }catch{
            setErr(true);
        }
    }

    return (
        <>
            <div className='searchDiv'>
                <h3>Weather Wedget</h3>
                <form onSubmit={handleSubmit}>
                    <TextField id="searchBar" label="Search By City" variant="outlined" value={city} onChange={handleChange} required/>
                    <br></br><br></br>
                    <Button variant="contained" type='submit' > Search </Button>
                </form>
                {err && <p style={{color: "red"}}>NO SUCH PLACE IN OUR API</p>}
            </div>
        </>
    )
}

