var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var cssnano = require('cssnano');
var postcss = require('gulp-postcss');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var autoprefixer = require('autoprefixer');
var runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var useref = require('gulp-useref');
var gutil = require('gulp-util');
var pump = require('pump');
var livereload = require('gulp-livereload');
var build = require('gulp-build');
var browserSync = require('browser-sync').create();


gulp.task('browserSync', ['sass', 'html'], function () {
    browserSync.init({
        server:{
          baseDir: 'dist',
          logFileChanges:false,
          // directory: true,
          // index: './views/html/events.html',
          index: 'login.html',
          browser: 'google chrome',
          routes: {
            '/login': 'dist/login.html',
            '/events': 'dist/events.html',
            '/partners': 'dist/partners.html',
            '/statistics': 'dist/statistics.html',
            '/work': 'dist/statistics-work.html',
            '/edit-event': 'dist/edit-event.html',
            '/edit-partner': 'dist/edit-partner.html',
            '/edit-shedule': 'dist/edit-shedule.html',
            '/create-event': 'dist/create-event.html',
            '/create-partner': 'dist/create-partner.html',
            '/delete-event': 'dist/delete-event.html',
            '/create-user': 'dist/create-user.html'
          }
      }
    });
});

// Complile sass into css and reload browser
gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

  gulp.task('js-conc-min', function(){
    return gulp.src('app/js/*.js')
      .pipe(useref())
      // .pipe(gulpIf('*.js', uglify()))
      .pipe(uglify())
      .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
      .pipe(gulp.dest('dist/js'))
      .pipe(livereload());
  });


  gulp.task('css-conc-min', function () {
  	var plugins = [
          autoprefixer({browsers: ['last 1 version']}),
          cssnano()
      ];
      return gulp.src('app/css/*.css')
      	.pipe(useref())
          .pipe(gulpIf('*.css', postcss(plugins)))
          .pipe(gulp.dest('dist/css'))
          .pipe(livereload());
  });




  gulp.task('images-min', function(){
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(imagemin({
        // Setting interlaced to true
        interlaced: true,
  	  verbose: true,
      }))
    .pipe(gulp.dest('dist/images'))
  });




gulp.task('html', function () {

    return gulp.src('app/views/pages/*.hbs')
        .pipe(handlebars({}, {
        ignorePartials: true,
        batch: ['app/views/partials'],
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('app/views/html'));
});

gulp.task('html-min', function(){
	return gulp.src('app/views/html/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist'))
});


// All tasks
gulp.task('watch', ['browserSync'], function () {
    gulp.watch('app/views/**/*.hbs', ['html']);
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/views/html/*.html',['html-min']);
    gulp.watch('app/views/html/*.html').on('change', browserSync.reload);
    gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
});

gulp.task('optimize', function() {
  runSequence('js-conc-min', 'css-conc-min', 'images-min', 'html-min');
});

gulp.task('default', ['optimize', 'watch']);
// gulp.task('build', [ 'optimize']);
