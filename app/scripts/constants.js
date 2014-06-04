/*global define*/
define([ ], function () {
    'use strict';

    var constants = {};
    constants.VERSION = '0.5.0';

<<<<<<< HEAD
    constants.URL = 'https://laverna.cc/';
    constants.DROPBOX_KEY = 'pzscbhwtiq2mflf';
=======
    constants.URL = location.origin + location.pathname.replace('index.html', '');
    constants.DROPBOX_KEY = '10iirspliqts95d';
>>>>>>> upstream/master
    // constants.DROPBOX_SECRET = null;

    return constants;
});
