/**
 * Created by Bebz on 14/09/2015.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var buildConfig = require('../../config/config.json')['build'];
var gulpif = require('gulp-if');
var argv = require('yargs').argv;

gulp.task('css', ['trueCss'], function(){

    var env = argv.NODE_ENV | 'dev';

    return gulp.src([
    		buildConfig.src + '/stylesheets/*.scss',
    		buildConfig.src + '/components/**/*.scss'
    	])
        .pipe(sass())
        .pipe(gulpif(env === 'prod', concat('main.css')))
        .pipe(gulp.dest(buildConfig.dist + '/stylesheets'));
});

gulp.task('trueCss', function(){
	return gulp.src([buildConfig.src + '/../../../node_modules/bootstrap/dist/css/bootstrap.css'])
	.pipe(gulp.dest(buildConfig.dist + '/stylesheets'))

});