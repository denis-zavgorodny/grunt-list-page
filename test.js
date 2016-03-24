/*
 * grunt-list-page
 * https://github.com/denis-zavgorodny/grunt-list-page
 *
 * Copyright (c) 2016 Denis Zavgorodny
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    

    // Configuration to be run (and then tested).
    list_page: {
      default_options: {
        options: {
        },
        files: {
          'title.html': ['/Users/alterego/0_work/nashcoffee/nashcoffee/*.html']
        }
      }
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');


  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['list_page']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['list_page']);

};
