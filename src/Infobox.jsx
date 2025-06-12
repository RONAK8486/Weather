import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./infobox.css";
import rainImage from '../src/assets/rain.jpg';
import summerImage from '../src/assets/summer.jpg';
import winterImage from '../src/assets/winter.jpg';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';


export default function Infobox({info}){
  
return(<div className='infobox'>
   
   <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 150}}
        
       image={info.humidity>75? rainImage:info.temp>15? summerImage:winterImage}
         title="green iguana"
      />
      <CardContent className='cardContent'>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>75? <UmbrellaIcon/>:info.temp>15? <SunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}  component={"span"}>
         <p>Temp :{info.temp}&deg;C</p>
         <p>TempMin :{info.tempMin}&deg;C</p>
         <p>TempMax :{info.tempMax}&deg;C</p>
         <p>Humidity :{info.humidity}&deg;C</p>
         <p> The Weather can be described as <b><i> {info.weather}</i></b> and feels like <b><i>{info.feelsLike}</i></b></p>
        </Typography>
      </CardContent>
     
    </Card>
  

</div>)
}