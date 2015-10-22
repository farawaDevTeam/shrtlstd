/**
 * Created by Bebz on 14/09/2015.
 */

var gulp = require('gulp');
var del = require('del');
var buildConfig = require('../../config/config.json')['build'];

gulp.task('clean', function(){
    return del(buildConfig.dist);
});