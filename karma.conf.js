module.exports = function(config) {
    config.set({
        basePath: './',

        frameworks: ['wiredep', 'jasmine'],

        wiredep: {
            dependencies: true,
            devDependencies: true
        },

        files: [
            {pattern: 'src/module.js'},
            {pattern: 'src/**/*.js'},
            {pattern: 'src/**/*.html'},
            {pattern: 'test/**/*.js'}
        ],

        preprocessors: {
            '**/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/',
            cacheIdFromPath: function(filepath) {
                var cacheId = filepath.replace('src/', '');
                return cacheId;
            },
            moduleName: 'dugun.forms'
        },

        autoWatch : true,

        browsers: [
            'Chrome',
        ]
    });
};
