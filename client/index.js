/**
 * Created by betty on 8/24/18.
 */
"use strict";
import React from 'react';
import ReactDOM from'react-dom';
import App  from './App';
import socket from './socket';



socket.on('connect', async () => {

});

socket.on('message', (message) => {

});

ReactDOM.render(<App/>, document.getElementById('App'));