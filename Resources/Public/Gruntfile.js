module.exports = function(grunt) {

	require('jit-grunt')(grunt); // auto load only needed modules

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			dev: {
				options: {
					config     : 'config.rb',
					environment: 'development',
					force      : false
				}
			},

			prod: {
				options: {
					config     : 'config.rb',
					environment: 'production',
					force      : true
				}
			}
		},

		concat: {
			js: {
				src : [
					'js/vendor/jquery-1.11.1.min.js',
					'js/vendor/jquery.fancybox.js',
					'js/vendor/jquery.tosrus.min.all.js',
					'js/vendor/jquery.tosrus.drag.min.js',
					'js/vendor/slick.js',
					'js/lib/scripts.js'
				],
				dest: 'js/main.js'
			},

			css: {
				src : [
					'css/sprites.css',
					'css/styles.css'
				],
				dest: 'css/main.css'
			}
		},

		uglify: {
			options  : {
				report: 'min',
				mangle: {
					except: ['jQuery']
				},
				sourceMap: true
			},
			js: {
				files: {
					'js/main.min.js': [ 'js/main.js']
				}
			}
		},

		cssmin: {
			options: {
				// report: 'gzip'
			},
			minify : {
				expand: true,
				cwd   : 'css/',
				src   : ['main.css'],
				dest  : 'css/',
				ext   : '.min.css'
			}
		},
		sprite:{
			all: {
				src: 'img/sprite-images/*.png',
				retinaSrcFilter: ['img/sprite-images/*-2x.png'],
				dest: 'img/spritesheet.png',
				retinaDest: 'img/spritesheet.retina-2x.png',
				destCss: 'css/sprites.css',
				padding: 50,
				imgPath: '../img/spritesheet.png',
				retinaImgPath: '../img/spritesheet.retina-2x.png',
				algorithm: 'top-down'
			}
		},

		watch: {
			css: {
				files: ['sass/**/*.scss'],
				tasks: ['dev']
			},

			js: {
				files: ['js/lib/*.js'],
				tasks: ['dev']
			}
		}
	});

	// Default task(s).
	grunt.registerTask('dev', ['compass:dev', 'sprite', 'concat', 'uglify', 'cssmin']);
	grunt.registerTask('compass-dev', ['compass:dev']);
	grunt.registerTask('generate-sprite', ['sprite', 'concat', 'uglify', 'cssmin']);
	grunt.registerTask('default', ['compass:prod', 'sprite', 'concat', 'uglify', 'cssmin']);

	grunt.loadNpmTasks('grunt-spritesmith');


};