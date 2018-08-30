/**
 * Created by betty on 8/24/18.
 */
"use strict";

//  http://localhost:9200/socket.io/?EIO=3&transport=polling&t=MM8nk6E

const IO =  require('socket.io-client');

module.exports =  new IO('http://localhost:9200');