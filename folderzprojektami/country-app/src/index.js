import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { getCountries, searchCountries } from './actions/actions-countries';
import store from './store';

render(
    <Provider store={store}>
        <h1>Inicjalizacja projektu</h1>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());
store.dispatch(searchCountries('Pol'));