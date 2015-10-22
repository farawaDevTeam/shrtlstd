/**
 * Created by Bebz on 14/09/2015.
 */

var gulp = require('gulp');
var buildConfig = require('../../config/config.json')['build'];

gulp.task('html', function(){
    return gulp.src(__dirname + '/../**/' + buildConfig.src + '/**/*.html', {base: buildConfig.src})
        .pipe(gulp.dest(buildConfig.dist));
});