'use strict';

var grunt = require( 'grunt' );
var _ = grunt.util._;

module.exports = function( grunt ) {
  grunt.registerTask( 'base64Frames',
    'Run base64 on files in ' + global.config.tmpMinFrames + ' and put the output in ' + global.config.tmpBase64,
    function() {
    } );
};