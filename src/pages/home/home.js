import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Citythumb from '../../components/citythumbnail/citythumb';
import './home.css';
import AddCityModal from '../../pages/addCityModal/addCityModal';
import { favCities, updatingCities } from '../../api/cities';

function Home() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const modal = useSelector((state) => state.cityReducer.modal)
    const cities = useSelector((state) => state.cityReducer.favCities)
    const unique = useSelector((state) =>  state.reducer.uniqueWeather)
    const showModal =()=>{
        dispatch(updatingCities())
    }
    const onChange = (event) => {
        setSearch(event.target.value)
    }
    return (
        <div id='home'>
            <div className='home__topbar'>
                <h2 className='home__title'>My Favourite Cities</h2>
                <button className='home__cityAddBtn' onClick={showModal}>Add New City</button>
            </div>
             <div className='home_cityThumb'>
                 {cities.map((c, index) => (
                     <Citythumb 
                        name={c}
                        cityName={c} 
                        i={unique.map(function(x) {return x.name; }).indexOf(c)}
                    />
                 ))}
            </div>
            {modal ? <AddCityModal func={onChange} search={search} /> : null}
        </div>
    )
}

export default Home
