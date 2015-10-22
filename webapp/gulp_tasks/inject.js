/**
 * Created by Bebz on 14/09/2015.
 */

var gulp = require('gulp');
var inject = require('gulp-inject');
var buildConfig = require('../../config/config.json')['build'];

gulp.task('inject', ['html', 'css', 'js'], function(){
    injectFiles();
});

var injectFiles =  function(cb){
    var target = gulp.src(buildConfig.dist + '/index.html');
    var sources = gulp.src([buildConfig.dist + '/stylesheets/**/*.css', 
    	buildConfig.dist + '/js/libs.js', 
    	buildConfig.dist + '/js/**/*.js'], {read: false});

    return target.pipe(inject(sources, {ignorePath: buildConfig.dist, addRootSlash: false}))
        .pipe(gulp.dest(buildConfig.dist))
        .on('end', function(){
            cb && cb();
        });
};

exports.injectFiles = injectFiles;