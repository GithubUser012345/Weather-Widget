
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Info.css";
//mui-icons
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Info({data}){

    const cold_img = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const hot_img = "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.jpg?s=612x612&w=is&k=20&c=8lBjGJTMN8NFtnKf-p6NWcvatv-2TYenr0MVj8VKags=";

    const rain_img = "https://images.unsplash.com/photo-1695781401227-2762f7889d9e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="Climate image"
                height="140"
                image= {data.humidity > 80 ? rain_img : data.temp >15 ? hot_img : cold_img}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                {data.city}   {data.humidity > 80 ? <ThunderstormIcon /> : data.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temp = {data.temp} &deg; C</p>
                    <p>Humidity = {data.humidity}</p>
                    <p>Max Temp = {data.temp_max} &deg; C</p>
                    <p>Min Temp = {data.temp_min} &deg; C</p>
                    <p>Weather looks like <i>{data.description}</i> and feels like <i>{data.feels_like} &deg; C </i></p>

                </Typography>
            </CardContent>
            </Card>
        </div>
    )
}