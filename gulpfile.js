var gulp = require('gulp'),
    gulpConcat = require('gulp-concat'),
    angularFilesort = require('gulp-angular-filesort'),
    ngHtml2Js = require('gulp-ng-html2js'),
    htmlmin = require('gulp-htmlmin'),
    htmlhint = require('gulp-htmlhint'),
    clean = require('gulp-clean'),
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
        .pipe(htmlhint({'doctype-first': false}))
        .pipe(htmlhint.reporter())
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(ngHtml2Js({
            moduleName: "dugun.forms",
            declareModule: false
        }))
        .pipe(gulpConcat('templates.js'))
        .pipe(gulp.dest('dist/'));
};

pipes.htmlSources = function() {
    console.info('Building HTML');

    var source = ['src/**/*.html'];

    return gulp.src(source);
};

pipes.build = function() {
    console.info('Building');

    return gulp.src(['dist/dugun-forms.js', 'dist/templates.js'])
        .pipe(clean({force: true}))
        .pipe(gulpConcat('main.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(gulp.src(['dist/dugun-forms.js', 'dist/templates.js'], {read: false}));
};

pipes.test = function(done) {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
    }, done).start();
}

gulp.task('build-js', pipes.buildJS);
gulp.task('merge-js', pipes.mergeJS);
gulp.task('build-html', pipes.buildHTML);
gulp.task('build', ['build-js', 'build-html'], pipes.build);

gulp.task('test', pipes.test);
