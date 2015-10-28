var gulp = require('gulp');
var buildConfig = require('../../config/config.json')['build'];
var component = process.env.INIT_CWD.split((__dirname.split('gulp_tasks')[0]))[1];
var distFolder = __dirname + '/../../dist/' + component;

gulp.task('copy', function () {
	var baseDir = __dirname + '/../' + component + '/' + buildConfig.src;
    return gulp.src([
		baseDir + '/**/*.html',
		baseDir + '/**/*.jpeg',
		baseDir + '/**/*.jpg',
		baseDir + '/**/*.png',
		baseDir + '/**/*.gif',
		baseDir + '/**/*.ttf',
		baseDir + '/components/langs/*.json',
	],
		{
			base: buildConfig.src,
			read: true
		})
        .pipe(gulp.dest(distFolder));
});