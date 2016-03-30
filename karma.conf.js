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
            {pattern: 'test/**/*.js'}
        ],

        autoWatch : true,

        browsers: [
            'Chrome',
        ],
    });
};
