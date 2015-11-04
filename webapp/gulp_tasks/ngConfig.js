var gulp = require('gulp');
var buildConfig = require('../../config/config.json')['build'];
var argv = require('yargs').argv;
var ngConfig = require('gulp-ng-config');
var b2v = require('buffer-to-vinyl');
var env = argv.NODE_ENV || 'dev';

var component = process.env.INIT_CWD.split((__dirname.split('gulp_tasks')[0]))[1];
var configDist = __dirname + '/../' + component + '/' + buildConfig.src + '/components/config';
var config = JSON.stringify({appConfig: require('../../config/config.json')[env][component]});

gulp.task('ngConfig', function(){
	return b2v.stream(new Buffer(config), 'config.js')
    	.pipe(ngConfig(component + 'ConfigModule'))
		.pipe(gulp.dest(configDist));
});