var gulp = require('gulp');
var buildConfig = require('../../config/config.json')['build'];
var component = process.env.INIT_CWD.split((__dirname.split('gulp_tasks')[0]))[1];
var distFolder = __dirname + '/../../dist/' + component;

gulp.task('fonts', function(){
    return gulp.src([__dirname + '/../' + component + '/' + buildConfig.src + '/**/*.ttf'], {base: buildConfig.src})
        .pipe(gulp.dest(distFolder));
});
