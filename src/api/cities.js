// cities.js

// Actions
const UPDATE_CITIES = 'UPDATE_CITIES';
const UPDATING_CITIES = 'UPDATING_CITIES';
const FAV_CITIES = 'FAV_CITIES';
// const UNFAV_CITIES = 'UNFAV_CITIES';

// Action Creators
export const favCities = (ci) => (dispatch, getState) => {
    const weather = getState("reducer")
    console.log(weather)
    dispatch({
        type: FAV_CITIES,
        favCity: ci
    })
}
export const updatingCities = () => (dispatch) => {
    dispatch({
        type: UPDATING_CITIES,
    })
}
export const updateCities = (city) => (dispatch) => {
    dispatch({
        type: UPDATE_CITIES,
        city: city
    })
}

// Reducers
const initialState = {
    citiesList: ["Ḩeşār-e Sefīd"],
    modal: false,
    favCities: []
}
export default function cityReducer(state = initialState, action) {
    switch (action.type) {
        case FAV_CITIES:
            return {
                ...state,
                ...state.favCities.indexOf(action.favCity) === -1 ? state.favCities.push(action.favCity) : alert("This City Is Already In You Favourites"),
            }
        case UPDATING_CITIES:
            return {
                ...state,
                modal: true
            }
        case UPDATE_CITIES:
            return {
                ...state,
                ...state.citiesList.indexOf(action.city) === -1 ? state.citiesList.push(action.city) : alert("You have already added this City !"),
                modal: false,
            }
      default: return state;
    }
  }