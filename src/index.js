import { createStore, applyMiddleware, compose } from 'redux';
import { reduce } from './reducer';
import { init as initUi } from './sideEffect/ui';

// create redux store
const crashReporter = store => next => action => {
    try {
        return next(action);
    } catch (err) {
        console.error('Caught an exception!', err);
        throw err;
    }
};
const middlewares = [crashReporter];
const enhancers = [
    ...('undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__
        ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
        : []),
    applyMiddleware(...middlewares),
];

const store = createStore(reduce, compose(...enhancers));

// init side effects
[initUi].forEach(init => init(store));
