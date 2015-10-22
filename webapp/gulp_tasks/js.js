/**
 * Created by Bebz on 14/09/2015.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var buildConfig = require('../../config/config.json')['build'];
var gulpif = require('gulp-if');
var argv = require('yargs').argv;

gulp.task('js', ['js-libs'], function(){

    var env = argv.NODE_ENV | 'dev';

    return  gulp.src([
        buildConfig.src + '/**/*.js',
        '!' + buildConfig.src + '/**/*.spec.js'
    ])
        .pipe(gulpif(env === 'prod', uglify()))
        .pipe(gulpif(env === 'prod', concat('main.js')))
        .pipe(gulp.dest(buildConfig.dist + '/js'));
});

gulp.task('js-libs', function(){

    var component = process.env.INIT_CWD.split((__dirname.split('gulp_tasks')[0]))[1];
    var libs = require('../' + component + '/libs.json').libs;

    var libsSrc = [];

    libs.forEach(function(lib){
        libsSrc.push(__dirname + '/../../node_modules/'+ lib + '.js');
    });
    return gulp.src(libsSrc).pipe(uglify())
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(buildConfig.dist + '/js'));
});