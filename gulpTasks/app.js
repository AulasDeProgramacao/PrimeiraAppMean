var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');

gulp.task('app', ['app.html', 'app.css', 'app.js' , 'app.assets']);

gulp.task('app.html', function() {
  gulp.src('frontend/app/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'));
});

gulp.task('app.css', function() {
   gulp.src('frontend/**/*.css')
     .pipe(uglifycss({ "uglyComments": true }))
     .pipe(concat('app.min.css'))
     .pipe(gulp.dest('public/assets/css'));
});

gulp.task('app.js', function() {
  gulp.src('frontend/**/*.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/assets/js'));
});

gulp.task('app.assets', function() {
  gulp.src([
    'frontend/assets/**/*.*',
    '!frontend/assets/**/*.css',
    '!frontend/assets/**/*.js'
  ]).pipe(gulp.dest('public/assets'));
});
