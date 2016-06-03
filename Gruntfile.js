/**
 *
 * The Mixpo grunt task runner. For a task list with descriptions, run 'grunt --help'
 *
 */
module.exports = function( grunt ) {

  var _ = grunt.util._;
  var path = require( 'path' );

  // Set up a global config variable that can be referenced by tasks
  global.config = {
    input: 'input/',
    tmp: 'tmp/',
    tmpFrames: 'tmp/frames/',
    tmpMinFrames: 'tmp/minFrames/',
    tmpBase64: 'tmp/base64/',
    output: 'output/'
  };

  // Load task options from `tasks/options/` and `tasks/custom-options`
  // and loads tasks defined in `package.json`
  var config = _.extend( {},
    require( 'load-grunt-config' )( grunt, {
      configPath: path.join( __dirname, 'tasks/options' ),
      loadGruntTasks: false,
      init: false
    }),
    require('load-grunt-config')( grunt, { // Custom options have precedence
      configPath: path.join( __dirname, 'tasks/custom-options' ),
      init: false
    })
  );


  // Load any custom tasks not in `package.json`
  grunt.loadTasks('tasks');

  // Default task
  grunt.registerTask( 'default', 'Convert mp4 into base-64 encoded PNGs',
    [
      'clean:tmp',
      'clean:output',
      'extractFrames'//,
      // 'minifyFrames',
      // 'base64Frames',
      // 'concatToJSON'
    ]
  );

  grunt.initConfig(config);
};