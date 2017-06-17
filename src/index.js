import { createStore, applyMiddleware, compose } from 'redux';
import { reduce } from './reducer';
import { init as initUi } from './sideEffect/ui';
import { init as initCom } from './sideEffect/com';

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
[initUi, initCom].forEach(init => init(store));
