'use strict';

var controllers = require('./controllers');

module.exports = function (router) {
    router.get('/', controllers.index);
};