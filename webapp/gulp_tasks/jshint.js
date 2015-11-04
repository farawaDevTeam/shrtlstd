/**
 * Created by Bebz on 16/09/2015.
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function(){
    return gulp.src([
        __dirname + '/../**/app/**/*.js',
        '!' + __dirname + '/../**/app/**/*.spec.js',
        '!' + __dirname + '/../**/app/**/config.js',
    ])
        .pipe(jshint(__dirname + '/../../.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish-ex'))
        .pipe(jshint.reporter('fail'));
});