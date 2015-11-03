/**
 * Created by Bebz on 17/09/2015.
 */

var gulp = require('gulp');
var buildConfig = require('../../config/config.json')['build'];
var karma = require('gulp-karma');

gulp.task('test', function(cb){

    var component = process.env.INIT_CWD.split((__dirname.split('gulp_tasks')[0]))[1];
    var libs = require('../' + component + '/dependencies.json').libs;

    var js = [];

    libs.forEach(function(lib){
        js.push(__dirname + '/../../node_modules/' + lib + '.js');
    });

    js.push.apply(js,
        [
        __dirname + '/../../node_modules/angular-mocks/angular-mocks.js', 
        __dirname + '/../' + component +'/' + buildConfig.src + '/**/*.js',
        __dirname + '/../' + component +'/mocks/**/*.js',
    ])
    gulp.src(js)
        .pipe(karma({
            configFile: __dirname + '/../karma.conf.js',
            action: 'run'
        }))
        .on('end', cb)
        .on('error', function(err) {
            console.log('There are some tests failures');
            // Make sure failed tests cause gulp to exit non-zero
            //throw err;
        });
});