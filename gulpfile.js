var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var order = require('gulp-order');
var replace = require('gulp-replace-task');
var ngAnnotate = require('gulp-ng-annotate');
var merge = require('merge-stream');

gulp.task('clean', function() {
   var cleanBuild = gulp.src('build', {read:false}).pipe(clean());
    return merge(cleanBuild);
});

gulp.task('copyMain', ['clean'],function() {
    var indexCopy = gulp.src('src/index.html').pipe(gulp.dest('build'));
    var pagesCopy = gulp.src('src/pages/**/*').pipe(gulp.dest('build/pages'));
    var iconsCopy = gulp.src('src/icons/**/*').pipe(gulp.dest('build/icons'));
    var cssCopy = gulp.src('src/css/**/*').pipe(gulp.dest('build/css'));
    var libCopy = gulp.src('src/libs/**/*').pipe(gulp.dest('build/libs'));
    var resCopy = gulp.src('src/resources/**/*').pipe(gulp.dest('build/resources'));
    return merge(indexCopy, libCopy, cssCopy, iconsCopy, pagesCopy, resCopy);
});

gulp.task('minifyJSDev', ['copyMain'], function() {
    return gulp.src(['src/js/**/*.js'])
        .pipe(order([
            "controllers/**/*.js",
            "app.js"
        ]))
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
});

gulp.task('connect', function() {
   connect.server({root:'src', port:8081});
});

gulp.task('connectBuild', function() {
    connect.server({root:'build', port:8081});
});

gulp.task('reloadDev', ['minifyJSDev'],function() {
    gulp.src('src/**/*').pipe(connect.reload());
});

gulp.task('watchDev', function() {
    gulp.watch('src/**/*', ['reloadDev']);
});

gulp.task('buildDev', ['minifyJSDev']);
gulp.task('deployDev', ['connectBuild', 'watchDev']);