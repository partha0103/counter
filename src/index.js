import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import counter from './reducers'
import Counter from './components/Counter';

const store = createStore(counter);

const render = () => {
    ReactDOM.render(<Counter
            value={store.getState()}
            onIncrement = {() => store.dispatch({ type: 'INCREMENT'})}
            onDecrement = {() => store.dispatch({ type: 'DECREMENT'})}
        />,
        document.getElementById('root'));
}

render();
store.subscribe(render);

registerServiceWorker();
