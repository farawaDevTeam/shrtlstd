/**
 * Created by Bebz on 14/09/2015.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var buildConfig = require('../../config/config.json')['build'];
var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var component = process.env.INIT_CWD.split((__dirname.split('gulp_tasks')[0]))[1];
var distFolder = __dirname + '/../../dist/' + component;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', ['trueCss'], function () {

    var env = argv.NODE_ENV | 'dev';

    return gulp.src([
        buildConfig.src + '/stylesheets/**/*.scss',
        buildConfig.src + '/components/**/*.scss'
    ])
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulpif(env === 'prod', concat('main.css')))
        .pipe(gulp.dest(distFolder + '/stylesheets'));
});

gulp.task('trueCss', function () {

    var css = require('../' + component + '/dependencies.json').css;

    var cssSrc = [];

    css.forEach(function (css) {
        cssSrc.push(__dirname + '/../../node_modules/' + css + '.css');
    });

    return gulp.src(cssSrc)
        .pipe(gulp.dest(distFolder + '/stylesheets'))

});