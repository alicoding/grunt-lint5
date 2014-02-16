/*
 * grunt-lint5
 * https://github.com/mozilla/html5-lint
 *
 * Copyright (c) 2013 Mozilla
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },
    lint5: {
      dirPath: "tmp/views",
      templates: [ "index.html" ],
      defaults: {
        "someVaribles": "value",
        "anotherVariable": "value"
      },
      ignoreList: []
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-lint5');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'lint5']);

};
