var gulp = require('gulp');
var buildConfig = require('../../config/config.json')['build'];
var component = process.env.INIT_CWD.split((__dirname.split('gulp_tasks')[0]))[1];
var distFolder = __dirname + '/../../dist/' + component;

gulp.task('images', function(){
    return gulp.src([__dirname + '/../' + component + '/' + buildConfig.src + '/**/*.jpeg', __dirname + '/../' + component + '/' + buildConfig.src + '/**/*.jpg', __dirname + '/../' + component + '/' + buildConfig.src + '/**/*.png', __dirname + '/../' + component + '/' + buildConfig.src + '/**/*.gif'], {base: buildConfig.src})
        .pipe(gulp.dest(distFolder));
});