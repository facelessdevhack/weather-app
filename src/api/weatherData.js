import axios from 'axios';
// weatherData.js

// Actions
const FETCHING = 'FETCHING';
const FETCH = 'FETCH';
const FAILED = 'FAILED';

// Action Creators
export const fetchWeatherData = (city) => (dispatch) => {
    dispatch({type: FETCHING})
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12591464402a5439dbe0a3e1e7fa1a07`)
        .then(res => {
            dispatch({
                type: FETCH,
                payload: res.data
            })
            console.log(res.data)
        })
        .catch(err => {
            console.error(err)
        })
    // setTimeout(() => {dispatch({type:FAILED})}, 500)
}

// Reducers
const initialState = {
    weatherData: [],
    isLoading: true,
    cityIcon: [],
    uniqueWeather: []
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                isLoading: true
            }
        case FETCH:
            return {
                ...state,
                ...state.weatherData.indexOf(action.payload) === -1 ? state.weatherData.push(action.payload) : alert("You have already added this City !"),
                uniqueWeather: state.weatherData.filter((elem, index) => 
                                    state.weatherData.findIndex(obj => obj.name === elem.name) === index),
                ...state.cityIcon.push(action.payload.weather[0].icon),
                isLoading: false
            }
        case FAILED:
            return {
                ...state,
                isLoading: false
            }
      default: return state;
    }
  }

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}