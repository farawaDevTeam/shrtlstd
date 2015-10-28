/**
 * Created by Bebz on 14/09/2015.
 */

var gulp = require('gulp');
var buildConfig = require('../../config/config.json')['build'];
var injectFiles = require('./inject').injectFiles;
var _ = require('lodash');
var argv = require('yargs').argv;
var connect = require('gulp-connect');
var reload = connect.reload;
var through2 = require('through2');
var sass = require('gulp-sass');
var component = process.env.INIT_CWD.split((__dirname.split('gulp_tasks')[0]))[1];
var distFolder = __dirname + '/../../dist/' + component;

gulp.task('serve', ['build'], function() {

    connect.server({
        port: 4500,
        root: distFolder,
        livereload: true
    });

    //watch for dev builds
    if(argv.NODE_ENV !== 'prod'){

        gulp.watch([
                '**/*.html',
                'components/**/*.scss',
                'stylesheets/**/*.scss',
                '**/*.js'
            ],
            {
                cwd: buildConfig.src
            },
            function(file){
                var filePath = file.path;
                var fileDestination = distFolder;
                var fileToBuild = gulp.src(filePath, {base: buildConfig.src});

                //Case it is stylesheet
                if(_.endsWith(filePath, '.scss')){
                    fileToBuild = gulp.src(filePath, {base: buildConfig.src + '/components'});
                    fileToBuild = fileToBuild.pipe(sass());
                    fileDestination += '/stylesheets';
                }
                //Case it is js
                else if(_.endsWith(filePath, '.js')){
                    fileDestination += '/js';
                }

                fileToBuild.pipe(gulp.dest(fileDestination))
                    .pipe(through2.obj(function (file, enc, cb){
                        // if(_.endsWith(filePath, 'index.html')){
                            return injectFiles(function(){
                                cb(null, file);

                            });
                        // }
                        // cb(null, file);
                    }))
                    .pipe(reload());
            });
    }
});