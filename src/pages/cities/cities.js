import React, { useEffect, useState } from 'react'
import './cities.css';
import { useSelector, useDispatch } from 'react-redux';
import star from '../../assets/star.png';
import startwo from '../../assets/star-2.png';
import { favCities } from '../../api/cities';
import { fetchWeatherData } from '../../api/weatherData';
import add from '../../assets/add.png';
import CityTab from '../../components/cityTab/cityTab';
import AddCityModal from '../../pages/addCityModal/addCityModal';
import { updatingCities } from '../../api/cities';
import CityWeatherInfo from '../../components/cityWeatherInfo/cityWeatherInfo';
import FavBtn from '../../components/favBtn/favBtn';

function Cities() {
    const [search, setSearch] = useState('')
    const [tab, setTab] = useState('')
    const [index, setIndex] = useState(0)
    const dispatch = useDispatch()
    const cities = useSelector((state) => state.cityReducer.citiesList)
    const modal = useSelector((state) => state.cityReducer.modal)
    const unique = useSelector((state) =>  state.reducer.uniqueWeather)
    const fav = useSelector((state) => state.cityReducer.favCities)
    const showModal =()=>{
        dispatch(updatingCities())
    }

    const favCity = () => {
        dispatch(favCities(tab))
    }

    useEffect(() => {
        dispatch(fetchWeatherData(cities[cities.length - 1]))
    }, [])

    const onChange = (event) => {
        setSearch(event.target.value)
    }

    const activeTab = (c, i) => {
        setTab(c)
        setIndex(i)
        console.log(tab)
    }

    return (
        <div id='cities_wrapper'>
            <div className='cities_tabs'>
                <div className='cities_tabs_topbar'>
                    <h1>City Name</h1>
                    <img src={add} alt='add' onClick={() => showModal()} className='cities_tabs_icons'/>
                </div>
                <div className="city_tab_wrap">
                    {cities.map((city, index)=> (
                        <div className="city_tab" onClick={() => activeTab(city, index)}>
                           <CityTab cityName={city} i={index}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cities_info">
                <div className='cities_info_topbar'>
                    <h1>{cities[index]}</h1>
                    {fav.map(function(x) {return x; }).indexOf(cities[index]) 
                        ?
                        <FavBtn func={() => favCity(unique[index])} ic={star} t={tab} />
                        : 
                        <img src={startwo} alt='selectedStar' className='cities_tabs_icons' />
                    }
                </div>
                <div className="city_info_wrap">
                    <CityWeatherInfo i={index} />
                </div>
            </div>
            {modal ? <AddCityModal func={onChange} search={search} /> : null}
        </div>
    )
}

export default Cities
