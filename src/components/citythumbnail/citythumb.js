import React, {useEffect, memo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import star from '../../assets/star.png';
import startwo from '../../assets/star-2.png';
import './citythumb.css';
import { fetchWeatherData } from '../../api/weatherData';

function Citythumb(props) {
    const dispatch = useDispatch()
    const loaded = useSelector((state) => state.reducer.isLoading)
    const icon = useSelector((state) => state.reducer.cityIcon)
    const weather = useSelector((state) => state.reducer.weatherData)
    const unique = useSelector((state) =>  state.reducer.uniqueWeather)
    useEffect(() => {
        dispatch(fetchWeatherData(props.name))
    }, [])
    return (
        <div id='cityThumb'>
            <div className='cityThumb__topbar'>
                <h4>{unique[props.i].name}</h4>
                <img src={startwo} alt='unselectedStar' className='cityThumb_fav' />
            </div>
            {loaded ? null : 
            <div>
                <img className="cityThumb_imgs" src={require(`../../assets/icons/${icon[props.i] ? icon[props.i] : '01d'}.png`).default} alt='weatherIcon' />
                <div className="cityThumb_weatherInfo">
                    <div className="cityThumb_weatherInfo_tab">
                        <p>Temperature</p>
                        <p>{parseFloat(unique[props.i].main.temp - 273.15).toFixed() + '\u00B0'}c</p>
                    </div>
                    <div>
                        <p>Wind</p>
                        <p>{unique[props.i].wind.speed} KM</p>
                    </div>
                    <div>
                        <p>Humidity</p>
                        <p>{unique[props.i].main.humidity}</p>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
// temp humidity speed
export default memo(Citythumb)
