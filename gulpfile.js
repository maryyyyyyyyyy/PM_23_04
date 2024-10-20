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

// Таск для SCSS
gulp.task('scss', function() {
    return gulp.src(paths.scss)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

// Таск для JavaScript
gulp.task('js', function() {
    return gulp.src(paths.js)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
});

// Таск для оптимізації зображень
gulp.task('img', function() {
    return gulp.src(paths.img)
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
});
