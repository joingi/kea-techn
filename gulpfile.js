var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('browserSync', ['sass'], function () {

    browserSync.init({
        server: 'app',
        index: 'index.html',
        browser: 'google chrome'
    });

});

// Complile sass into css and reload browser
gulp.task('sass', function () {
    return gulp.src('app/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.stream());
});


// All tasks
gulp.task('watch', ['browserSync'], function () {
    gulp.watch('app/sass/*.scss', ['sass']);
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
});