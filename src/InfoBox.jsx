/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./InfoBox.css";
export default function InfoBox({ info }) {
  const cold_img =
    "https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const rain_img =
    "https://images.unsplash.com/photo-1685853434430-419a8c0d1d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const hot_img =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="infoBox">
      <div className="weatherCard">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                info.humidity > 80
                  ? rain_img
                  : info.temp > 15
                  ? hot_img
                  : cold_img
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b>{info.city_name}</b>&nbsp; &nbsp;{" "}
                <span>
                  {info.humidity > 80 ? (
                    <ThunderstormIcon />
                  ) : info.temp > 15 ? (
                    <WbSunnyIcon />
                  ) : (
                    <AcUnitIcon />
                  )}
                </span>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                <div>temperature : {info.temp}&deg;C;</div>
                <div>humidity : {info.humidity}%</div>
                <div>temperature_min : {info.temp_min}&deg;C</div>
                <div>temperature_max : {info.temp_max}&deg;C;</div>
                <div>
                  Weather can be described as <b><i>{info.weather}</i></b>  and Feels
                  like : {info.feels_like}
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
