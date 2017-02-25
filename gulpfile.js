'use strict'

var gulp = require('gulp');

//1.less编译 压缩
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

gulp.task('style', function() {
    return gulp.src('src/style/*.less')
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/style/'))
        .pipe(browserSync.stream());
});
//2.js合并，压缩，混淆
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('script', function() {
    return gulp.src('src/script/*.js')
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/script/'))
        .pipe(browserSync.stream());
});
//3.图片的复制
var imagemin = require('gulp-imagemin');
gulp.task('images', function() {
    return gulp.src('src/images/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'))
        .pipe(browserSync.stream());
});
//4.html的压缩
var htmlmin = require('gulp-htmlmin');

gulp.task('htmlmin', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeStyleLinkTypeAttributes: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

//5.browserSync服务和监视
var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
    gulp.watch('src/style/*.less', ['style']);
    gulp.watch('src/script/*.js', ['script']);
    gulp.watch('src/images/*.*', ['images']);
    gulp.watch('src/*.html', ['htmlmin']);
    gulp.watch('dist/index.html').on('change', browserSync.reload);
});
