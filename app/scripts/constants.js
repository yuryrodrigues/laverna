/*global define*/
define([ ], function () {
    'use strict';

    var constants = {};
    constants.VERSION = '0.5.0';

    constants.URL = 'https://laverna.cc/';
    constants.DROPBOX_KEY = 'pzscbhwtiq2mflf';
    // constants.DROPBOX_SECRET = null;

    // On localhost
    if (location.hostname.indexOf('localhost') === 0) {
        constants.URL = location.origin + location.pathname.replace('index.html', '');
    }

    return constants;
});
