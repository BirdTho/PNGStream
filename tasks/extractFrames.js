'use strict';

var grunt = require( 'grunt' );
var _ = grunt.util._;

var ffmpeg = require( 'fluent-ffmpeg' );
var fs = require( 'fs' );

module.exports = function( grunt ) {
  grunt.registerTask( 'extractFrames',
    'Take video from ' + global.config.input + ' and extract frames to ' + global.config.tmpFrames,
    function() {
      var done = this.async();
      var filename = grunt.option( 'input' );
      var framerate = parseInt( grunt.option( 'framerate' ), 10 );
      var duration = null;
      var timestamps = [];

      if ( _.isNaN( framerate ) ) {
        framerate = 15;
      }

      if ( !fs.existsSync( filename ) ) {
        grunt.log.error( 'Could not find file "' + filename + '", did you use --input=<filename>?' );
        done( false );
        return;
      }

      grunt.log.writeln( 'Loading in video "' + filename + '" to export PNGs at ' + framerate + 'fps' );

      var command = new ffmpeg( filename );
      command
        .on( 'error', function ( err ) {
          grunt.log.error( 'FFMPEG threw an error: ' + err.message );
          done( false );
        } )
        .on( 'codecData', function ( data ) {
          duration = data.duration;
          var i;
          var frames = framerate * duration;
          for ( i = 0; i <= frames; ++i ) {
            timestamps.push( i / framerate );
          }
          if ( i / framerate < duration ) {
            timestamps.push( duration );
          }
          grunt.log.write( 'Video is ' + duration + ' seconds and will have ' + timestamps.length + ' frames.' );
          command
            .on( 'filenames', function ( filenames ) {
              grunt.log.write( 'Outputting ' + filenames.length + ' files to ' + global.config.tmpFrames + '.' );
              grunt.verbose.writeln( filenames );
            } )
            .on( 'end', function () {
              grunt.log.write( 'Done.' );
              done( true );
            } )
            .takeScreenshots( {
              timestamps: timestamps,
              filename: 'frame%0000i.png',
              folder: global.config.tmpFrames
            } );
        } )

    } );
};