/**
 * Created by betty on 8/24/18.
 */
"use strict";

const IO =  require('socket.io-client');

module.exports =  new IO('http://localhost:9200');