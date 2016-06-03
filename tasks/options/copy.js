'use strict';

var grunt = require( 'grunt' );
var _ = grunt.util._;

module.exports = {
  // 'loaderES6Files->Tmp': {
  //   expand: true,
  //   cwd: global.config.loader.source,
  //   src: '**/*.js',
  //   dest: global.config.loader.buildOutput + 'es6/'
  // },

  // 'loaderEJS->internal': {
  //   src: global.config.loader.buildOutput + 'ejs/loader.js',
  //   dest: 'build/internal/loader.js'
  // },

  // 'h5p_idMain->test': {
  //   // Automatically expand wildcards
  //   expand: true,
  //   cwd: global.config.h5p.buildOutput + 'amd/',
  //   src: '**/*.js',
  //   dest: global.config.h5p.buildOutput + 'test/',
  //   filter: function ( filepath ) {
  //     return !( /_test\.js/.test( filepath ) ||
  //     /test_library\//.test( filepath ) ||
  //     /other_tests\//.test( filepath ) );
  //   }
  // },

  // 'h5p_idSpecificFilesToES6': {
  //   files: []
  // },
};