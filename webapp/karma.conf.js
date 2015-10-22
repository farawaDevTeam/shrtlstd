/**
 * Created by Bebz on 19/09/2015.
 */

var buildConfig = require('../config/config.json')['build'];

module.exports = function(config) {

    var component = process.env.INIT_CWD.split((__dirname.split('gulp_tasks')[0]))[1];

    var reportsPath = __dirname + component + '/testsReports/';
    console.log(reportsPath);

    var conf = {
        //basePath: '',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],


        preprocessors: {},


        reporters: ['coverage', 'spec', 'failed'],
        coverageReporter: {
            type : 'html',
            dir : reportsPath,
            watermarks: {
                statements: [ 40, 65 ],
                functions: [ 40, 65 ],
                branches: [ 40, 65 ],
                lines: [ 40, 65 ]
            }
        }
    };

    conf.preprocessors[ __dirname + '/../**/' + buildConfig.src + '/**/!(*.spec|app).js'] = ['coverage'];

    config.set(conf);
};
