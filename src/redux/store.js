import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from "axios";
import { takeEvery, put } from 'redux-saga/effects';


//REDUCERS
const categoriesList = (state = [], action) => {
    switch(action.type) {
        case 'GET_CATEGORIES':
            return action.payload
        default:
            return state
    }
}

let initialState = []
const favorites = (state = initialState, action) => {
    switch(action.type){
        // case 'ADD_FAVORITE':
        //     return [...state, action.payload]
        case 'GET_FAVORITES':
            return action.payload
        default:
            return state
    }
}

//SAGA ROUTES/GENERATOR FUNCTIONS
function* fetchCategories() {
    try {
        const categoriesResponse = yield axios.get('/api/categories');
        yield put({type: 'GET_CATEGORIES', payload: categoriesResponse.data});
    }
    catch(error) {
        console.log('Error fetching categories:', error);
    }
}

function* fetchFavorites() {
    try {
        const favoritesResponse = yield axios.get('/api/favorites');
        yield put({type: 'GET_FAVORITES', payload: favoritesResponse.data});
    }
    catch(error) {
        console.log('error fetching favorites', error)
    }
}
function* addFavorite(action) {
    try {
        const favoritesResponse = axios({method: 'POST', 
            url: '/api/favorites', 
            data: {name: action.payload.name}});
            yield put({type: 'ADD_FAVORITE'});
    }
    catch(error) {
        console.log('error adding to favorites', error);
    }
}

//SAGAS
function* rootSaga() {
    yield takeEvery('FETCH_CATEGORIES', fetchCategories);
    yield takeEvery('ADD_FAVORITE', addFavorite);
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    
}

const sagaMiddleware = createSagaMiddleware();

//REDUX STORE
const store = createStore(
    combineReducers(
        {categoriesList},
        {favorites},

    ),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;