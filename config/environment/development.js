'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/angular2-express-boiler'
  },

  // Seed database on startup
  seedDB: true

};
