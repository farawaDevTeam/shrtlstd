/**
 * Created by Bebz on 14/09/2015.
 */

var gulp = require('gulp');
var inject = require('gulp-inject');
var component = process.env.INIT_CWD.split((__dirname.split('gulp_tasks')[0]))[1];
var distFolder = __dirname + '/../../dist/' + component;

gulp.task('inject', ['copy', 'css', 'js'], function () {
    injectFiles();
});

var injectFiles = function (cb) {
    var target = gulp.src(distFolder + '/index.html');
    var sources = gulp.src([distFolder + '/stylesheets/**/*.css',
        distFolder + '/js/libs.js',
        distFolder + '/js/**/config.js',
        distFolder + '/js/**/models.js',
        distFolder + '/js/**/models/*.js',
        distFolder + '/js/**/services.js',
        distFolder + '/js/**/services/*.js',
        distFolder + '/js/**/directives.js',
        distFolder + '/js/**/directives/*.js',
        distFolder + '/js/**/!(app)*.js',
        distFolder + '/js/**/app.js',
    ], { read: false });
    
    var lastSources = gulp.src(distFolder + '/js/**/app.js', {read: false});
    

    return target.pipe(inject(sources, { ignorePath: '../../dist/' + component, addRootSlash: false }))
        .pipe(gulp.dest(distFolder))
        .on('end', function () {
            cb && cb();
        });
};

exports.injectFiles = injectFiles;