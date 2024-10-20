// Підключення пакетів
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

// Шляхи до файлів
const paths = {
    html: './src/**/*.html',
    scss: './src/scss/**/*.scss',
    js: './src/js/**/*.js',
    img: './src/images/**/*'
};

// Таск для HTML
gulp.task('html', function() {
    return gulp.src(paths.html)
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});
