import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from "axios";
import { takeEvery, put } from 'redux-saga/effects';


//REDUCERS
const search = (state = [], action) => {
    switch(action.type) {
        case 'GET_SEARCH':
            return action.payload
        default:
            return state
    }
}

const categoriesList = (state = [], action) => {
    switch(action.type) {
        case 'GET_CATEGORIES':
            return action.payload
        default:
            return state
    }
}



const favorites = (state = [], action) => {
    switch(action.type){
        case 'GET_FAVORITES':
            return action.payload
                      
        default:
            return state
    }
}

//SAGA ROUTES/GENERATOR FUNCTIONS
function* fetchSearch() {
    try {
        const searchResponse = yield axios.get('/api/search');
        yield put({type: 'GET_SEARCH', payload: searchResponse.data});
    }
    catch(error) {
        console.log('Error fetching search:', error);
    }
}

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
        //console.log('favorites response:', favoritesResponse)
    }
    catch(error) {
        console.log('error fetching favorites', error)
    }
}
// function* addFavorite(action) {
//     try {
//         const favoritesResponse = axios({method: 'POST', 
//             url: '/api/favorites', 
//             data: {name: action.payload.name}});
//             yield put({type: 'ADD_FAVORITE'});
//     }
//     catch(error) {
//         console.log('error adding to favorites', error);
//     }
// }

//SAGAS
function* rootSaga() {
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    yield takeEvery('FETCH_CATEGORIES', fetchCategories);
    yield takeEvery('FETCH_SEARCH', fetchSearch);
    // yield takeEvery('ADD_FAVORITE', addFavorite);
    
    
}

const sagaMiddleware = createSagaMiddleware();

//REDUX STORE
const store = createStore(
    combineReducers(
        {categoriesList,
        favorites,
        search
        }

    ),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;