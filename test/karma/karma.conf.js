'use strict';

// Karma configuration
// Generated on Sat Oct 05 2013 22:00:14 GMT+0700 (ICT)

module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../../',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'app/system/lib/angular/angular.js',
            'app/system/lib/angular-mocks/angular-mocks.js',
            'app/system/lib/angular-cookies/angular-cookies.js',
            'app/system/lib/angular-resource/angular-resource.js',
            'app/system/lib/angular-ui-router/release/angular-ui-router.js',
            'app/system/lib/angular-bootstrap/ui-bootstrap-tpls.js',
            'app/system/lib/angular-bootstrap/ui-bootstrap.js',
            'app/*/*.js',
            'app/{auth,articles}/*/*.js',
            'app/system/{controllers,routes,services}/*.js',
            'app/init.js',
            'test/karma/unit/**/*.js'
        ],


        // list of files to exclude
        exclude: [

        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        //reporters: ['progress'],
        reporters: ['progress', 'coverage'],

        // coverage
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'app/js/controllers/*.js': ['coverage'],
            'app/js/services/*.js': ['coverage']
        },

        coverageReporter: {
            type: 'html',
            dir: 'test/coverage/'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
