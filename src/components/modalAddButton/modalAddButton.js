import React from 'react'
import { useDispatch } from 'react-redux';
import { updateCities } from '../../api/cities';
import add from '../../assets/add.png';
import { fetchWeatherData} from '../../api/weatherData';

function ModalAddButton(props) {
    const dispatch = useDispatch()

    const addCity = () => {dispatch(updateCities(props.city))}
    const fetchWeather = () => {dispatch(fetchWeatherData(props.city))}
    return (
        <div style={{display: 'flex',width:'400px',margin: '0 auto', justifyContent: 'space-between'}}>
            <p>{props.city}</p>
            <img src={add} alt='add' onClick={() => {addCity(); fetchWeather()}} className='cities_tabs_icons'/>
        </div>
    )
}

export default ModalAddButton
