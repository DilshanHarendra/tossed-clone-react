import React, {Suspense} from 'react';
import './assets/tailwind.css';
import './App.css';
import 'swiper/css';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Router from './routers/Router';
import {persistor, store} from './store/store';

function App() {


    return (<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Suspense fallback={<>loading....</>}>
                <Router />
            </Suspense>

        </PersistGate>
    </Provider>);

}

export default App;
