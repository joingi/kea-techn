var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();


gulp.task('browserSync', ['sass'], function () {

    browserSync.init({
        server:{
          baseDir: 'app',
          logFileChanges:false,
          index: './views/html/events.html',
          browser: 'google chrome',
          routes: {
            '/events': 'app/views/html/events.html',
            '/partners': 'app/views/html/partners.html',
            '/statistics': 'app/views/html/statistics.html'
          }
      }
    });

});

// Complile sass into css and reload browser
gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.stream());
});

gulp.task('html', function () {

    return gulp.src('app/views/pages/*.hbs')
        .pipe(handlebars({}, {
        ignorePartials: true,
        batch: ['app/views/partials'],
        helpers : 'app/views/helpers'
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('app/views/html'));
});


// All tasks
gulp.task('watch', ['browserSync'], function () {
    gulp.watch('app/views/**/*.hbs', ['html']);
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/views/html/*.html').on('change', browserSync.reload);
    gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
