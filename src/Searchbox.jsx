import "./searchbox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { blue } from "@mui/material/colors";




export default function Searchbox({updateInfo}){
    let URL_KEY="7b3fb22544aa9ecdc91c5b8ba96f43a2";
    let URL="https://api.openweathermap.org/data/2.5/weather";
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
   
        let apidata=async ()=>{
            try{

            
            let data =await fetch(`${URL}?q=${city}&appid=${URL_KEY}&units=metric`);
           let  jsondata=await data.json();
        
          let result={
             city:city,
             temp : jsondata.main.temp,
             tempMin:jsondata.main.temp_min,
             tempMax:jsondata.main.temp_max, 
             humidity:jsondata.main.humidity,
             feelsLike:jsondata.main.feels_like,
             weather:jsondata.weather[0].description
          }
          console.log(result);
          return result;
         }
         catch(err){
            throw err;
         }
        };

   
    let handleInput=(event)=>{
      setCity(event.target.value)
    };

    let handleSubmit=async(event)=>{
        event.preventDefault();
        setError(false);
try{
           
    
    setCity("");
   let newinfo=await apidata();
   updateInfo(newinfo);
}catch(err){
    setError(true);
}
       
    };
   

    return(<div className='searchbox'>
             <h1>Weather App</h1>
             <form  onSubmit={ handleSubmit}>
             <TextField id="city" label="City Name" variant="outlined" onChange={handleInput} value={city} required/>
             &nbsp;&nbsp;&nbsp;&nbsp;
             <Button type="submit" variant="contained">Search</Button>
             <div className="error">
             {error && <span >No such place exists!</span>}
             </div>
            
             </form>
             
             

    </div>
  )
}