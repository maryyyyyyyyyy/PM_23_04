//glupfile
// Підключення пакетів
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

// Шляхи до файлів
const paths = {
    html: './app/*.html',
    scss: './app/scss/**/*.scss',
    js: './app/js/**/*.js',
    img: './app/img/**/*'
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

// //Таск для оптимізації зображень
// gulp.task('img', function() {
//     return gulp.src(paths.img)
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             interlaced: true
//         }))
//         .pipe(gulp.dest('./dist/images'));
// });

gulp.task('img', function() {
    return gulp.src('./app/img/**/*', {encoding:false})
        .pipe(gulp.dest('./dist/img'))
})

// Налаштування BrowserSync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
});

// Таск для спостереження за змінами
gulp.task('watch', function() {
    gulp.watch(paths.html, gulp.series('html'));
    gulp.watch(paths.scss, gulp.series('scss'));
    gulp.watch(paths.js, gulp.series('js'));
    gulp.watch(paths.img, gulp.series('img'));
});

// Основний таск, що запускає всі інші
gulp.task('default', gulp.parallel('html', 'scss', 'js', 'img','browser-sync', 'watch'));
