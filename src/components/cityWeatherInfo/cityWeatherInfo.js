import React from 'react'
import { useSelector } from 'react-redux';

function CityWeatherInfo(props) {
    const weather = useSelector((state) => state.reducer.weatherData)
    const unique = weather.filter((elem, index) => 
    weather.findIndex(obj => obj.name === elem.name) === index);
    const loaded = useSelector((state) => state.reducer.isLoading)
    const icon = useSelector((state) => state.reducer.cityIcon)
    return (
        <div>
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

export default CityWeatherInfo
