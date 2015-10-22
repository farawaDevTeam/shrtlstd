/**
 * Created by Bebz on 14/09/2015.
 */

var gulp = require('gulp');
var del = require('del');
var component = process.env.INIT_CWD.split((__dirname.split('gulp_tasks')[0]))[1];
var distFolder = __dirname + '/../../dist/' + component;

gulp.task('clean', function(){
    return del(distFolder, {force: true});
});