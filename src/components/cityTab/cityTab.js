import React from 'react'
import { useSelector } from 'react-redux';

function CityTab(props) {
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
