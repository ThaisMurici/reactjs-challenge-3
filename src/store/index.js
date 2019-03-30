import { createStore, compose } from 'redux';

const tronMiddleware = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : () => {};

const store = createStore(() => {}, compose(tronMiddleware()));

export default store;
