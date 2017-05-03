(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const apiRoutes = require('../routes/api');
    const authRoutes = require('../routes/auth');

    // *** register routes *** //
    app.use('/api', apiRoutes);
    app.use('/auth', authRoutes);
  };

})(module.exports);
