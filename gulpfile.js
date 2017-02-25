'use strict'

var gulp = require('gulp');

//1.less编译 压缩
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

gulp.task('style', function() {
    return gulp.src('src/style/*.less')
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/style/'));
});
