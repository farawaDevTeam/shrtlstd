/**
 * Created by Bebz on 14/09/2015.
 */

var gulp = require('gulp');
var runSeq = require('run-sequence');
var argv = require('yargs').argv;

gulp.task('build', ['jshint', 'test'], function(cb){
   console.log('NODE_ENV = ' + argv.NODE_ENV);
   runSeq('clean', ['inject', 'images'], cb);
});