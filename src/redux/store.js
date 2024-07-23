import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from "axios";
import { takeEvery, put } from 'redux-saga/effects';

const categoriesList = (state = [], action) => {
    switch(action.type) {
        case 'GET_CATEGORIES':
            return action.payload
        default:
            return state
    }
}

function* fetchCategories() {
    try {
        const categoriesResponse = yield axios.get('/api/categories');
        yield put({type: 'GET_CATEGORIES', payload: categoriesResponse.data});
        //console.log(categoriesResponse);
    }
    catch(error) {
        console.log('Error fetching categories:', error);
    }
}

function* rootSaga() {
    yield takeEvery('FETCH_CATEGORIES', fetchCategories);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers(
        {categoriesList}
    ),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;