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
//2.js合并，压缩，混淆
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('script', function() {
    return gulp.src('src/script/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/script/'));
});
