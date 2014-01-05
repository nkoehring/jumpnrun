module.exports = function(grunt) {
 
  grunt.initConfig({
 
    copy: {
      build: {
        cwd: 'src',
        src: [ '**', '!**/*.coffee' ],
        dest: 'build',
        expand: true
      },

      libs: {
        cwd: 'lib',
        src: [ '*.js' ],
        dest: 'build/lib',
        expand: true
      },
    },

    clean: {
      build: {
        src: [ 'build' ]
      },
      scripts: {
        src: [ 'build/**/*.js', '!build/jumpnrun.js' ]
      },
    },

    coffee: {
      build: {
        expand: true,
        cwd: 'src',
        src: [ '**/*.coffee' ],
        dest: 'build',
        ext: '.js'
      },
    },

    uglify: {
      build: {
        options: {
          mangle: false,
          beautify: true
        },
        files: {
          'build/jumpnrun.js': [ 'build/**/*.js' ]
        }
      }
    },

    watch: {
      scripts: {
        files: 'src/**/*.coffee',
        tasks: [ 'scripts' ]
      },
      copy: {
        files: [ 'src/**', '!src/**/*.coffee' ],
        tasks: [ 'copy' ]
      }
    },
 
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.',
          hostname: '*'
        }
      }
    }

  });
 
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask(
    'scripts', 
    'Compiles the JavaScript files.', 
    [ 'coffee', 'uglify', 'clean:scripts' ]
  );

  grunt.registerTask(
    'build', 
    'Compiles all of the assets and copies the files to the build directory.', 
    [ 'clean:build', 'copy', 'scripts' ]
  );

  grunt.registerTask(
    'default', 
    'Watches the project for changes, automatically builds them and runs a server.', 
    [ 'build', 'connect', 'watch' ]
  );
};
