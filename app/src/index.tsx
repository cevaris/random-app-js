import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


axios.get(`https://stormy-cliffs-90695.herokuapp.com/random/string.json`)
  .then(res => {
    const data = res.data;
    console.log(data);
  })