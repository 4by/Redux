import './styles.css';
// import {createStore} from './createStore'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { stateMaker } from './redux/stateMaker';
import {
  ASYNC_INCR, INCR, DECR, WHATEVER, THEME,
} from './redux/dispArgs';

const countElem = document.getElementById('counter');
const addElem = document.getElementById('add');
const subElem = document.getElementById('sub');
const asynElem = document.getElementById('async');
const themeElem = document.getElementById('theme');

// создает стейт, где есть стейт-значение и массив стейт-функций
// под капотом данные стейта - это данные из замыкания функции createStore

// applyMiddleware передает функционал в dispatch
// thunk чтобы работал асинронный вызов
// logger чтобы данные выводились в консоль
const store = createStore(stateMaker, applyMiddleware(thunk, logger));

// getState просто возвразает текущее стейт-значение
const rerenderByState = () => {
  countElem.textContent = store.getState().counterState;
  document.body.className = store.getState().themeState.value;
};

// subscribe принимает функцию и сохраняет в массиве стейт-функций
store.subscribe(rerenderByState);

// dispatch :
// 1)запускает все функции стейта
// 2)изменяет стейт под действием входного аргумента
// стейт можно увидеть только после первого dispatch
store.dispatch(WHATEVER);
addElem.addEventListener('click', () => store.dispatch(INCR));
subElem.addEventListener('click', () => store.dispatch(DECR));
asynElem.addEventListener('click', () => store.dispatch(ASYNC_INCR));
themeElem.addEventListener('click', () => store.dispatch(THEME));
