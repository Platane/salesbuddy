import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { App } from '../component/app';

export const init = store =>
    ReactDom.render(
        <Provider store={store}><App /></Provider>,
        document.getElementById('app')
    );
