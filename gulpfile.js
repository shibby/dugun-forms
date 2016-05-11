var gulp = require('gulp'),
    gulpConcat = require('gulp-concat'),
    angularFilesort = require('gulp-angular-filesort'),
    ngHtml2Js = require('gulp-ng-html2js'),
    htmlmin = require('gulp-htmlmin'),
    htmlhint = require('gulp-htmlhint'),
    pipes = {},
    KarmaServer = require('karma').Server;

pipes.buildJS = function() {
    console.info('Building JS');

    var source = ['src/**/*.js', '!**/*.spec.js'];

    return gulp.src(source)
        .pipe(angularFilesort())
        .pipe(gulpConcat('dugun-forms.js'))
        .pipe(gulp.dest('dist/'));
};

pipes.buildHTML = function() {
    return pipes.htmlSources()
        // .pipe(plugins.htmlhint.failReporter())
        .pipe(htmlhint.reporter())
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(ngHtml2Js({
            moduleName: "dugun.forms"
        }))
        .pipe(gulpConcat('templates.js'))
        .pipe(gulp.dest('dist/'));
};

pipes.htmlSources = function() {
    console.info('Building HTML');

    var source = ['src/**/*.html'];

    return gulp.src(source);
};

pipes.test = function(done) {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
    }, done).start();
}

gulp.task('build-js', pipes.buildJS);
gulp.task('build-html', pipes.buildHTML);
gulp.task('build', ['build-js', 'build-html'], function() {
    console.info('Building');
});

gulp.task('test', pipes.test);
