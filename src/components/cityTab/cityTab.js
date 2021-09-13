import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../../api/weatherData'

function CityTab(props) {
    const dispatch = useDispatch()
    const loaded = useSelector((state) => state.reducer.isLoading)
    const weather = useSelector((state) => state.reducer.weatherData)
    const unique = weather.filter((elem, index) => 
                        weather.findIndex(obj => obj.name === elem.name) === index);
    return (
        <>
            {!loaded ?
                <>
                    <p key={props.i}>{unique[props.i].name}</p>
                    <p>{parseFloat(unique[props.i].main.temp - 273.15).toFixed() + '\u00B0'}c</p>
                </> : null
            }
        </>
    )
}

export default CityTab
