import React from 'react';
import '@styles/main.scss';
import Router from './Core/Router';
import ReactDom from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from "react-redux";
import ourStore, { history } from './Core/Store';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = ourStore();

const container = document.querySelector('#app');

ReactDom.render(
    <Provider store={ store }>
        <PersistGate loading={null} persistor={ persistor }>
            <ConnectedRouter history={ history }>
                <StylesProvider>
                    <Router />
                </StylesProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    container
);

