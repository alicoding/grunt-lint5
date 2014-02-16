/*
 * grunt-lint5
 * https://github.com/mozilla/html5-lint
 *
 * Copyright (c) 2013 Mozilla
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

grunt.registerTask( "lint5", "HTML5 validation", function() {
    grunt.config.requires( "lint5.dirPath" );
    grunt.config.requires( "lint5.templates" );

    var _ = grunt.util._,
        html5Lint = require( "html5-lint" ),
        nunjucks = require( "nunjucks" ),
        views = grunt.config( "lint5.dirPath" ),
        defaults = grunt.config( "lint5.defaults" ) || {},
        templates = grunt.config( "lint5.templates" ),
        env = new nunjucks.Environment( new nunjucks.FileSystemLoader( views )),
        done = this.async(),
        errors = 0,
        ignoreList = grunt.config( "lint5.ignoreList" ) || [],
        files = [];

    if (Array.isArray(templates)) {
      files = templates;
    } else {
      files = Object.keys( templates );
    }

    var pending = files.length;

    function complete() {
      pending--;
      if ( pending === 0 ) {
        var passed = errors === 0;
        if ( passed ) {
          grunt.log.ok( files.length + ' file' + (files.length === 1 ? '' : 's') + ' lint free.');
        }
        done( passed );
      }
    }

    files.forEach( function( file ) {
      var data = _.extend( defaults, templates[ file ] ),
          html = env.getTemplate( file ).render( data );
      html5Lint( html, function( err, results ) {
        if ( err ) {
          grunt.fatal( 'Unable to connect to validation server.' );
          return;
        }
        if ( results.messages.length ) {
          grunt.log.subhead( file );
          results.messages.forEach( function( msg ) {
            var type = msg.type, // error or warning
                message = msg.message,
                formatted = "  " + type + ": " + message;

        var ignored = ignoreList.some( function( ignore ) {
          if (ignore === message) {
            return true;
          }

          if (new RegExp(ignore).test(message)) {
            return true;
          }

          return false;
        });

            if ( !ignored ) {
              if ( type === 'error' ) {
                errors++;
                grunt.log.error( formatted );
              } else if ( type !== 'ignored' && type !== 'error' ) {
                grunt.fail.warn( formatted );
              }
            }
          });
        }
        complete();
      });
    });
  });

};
