'use strict';

var grunt = require( 'grunt' );
var _ = grunt.util._;

module.exports = function( grunt ) {
  grunt.registerTask( 'minifyFrames',
    'Run imagemin on files in ' + global.config.tmpFrames + ' and put the output in ' + global.config.tmpMinFrames,
    function() {
    } );
};