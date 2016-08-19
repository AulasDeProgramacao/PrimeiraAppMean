var gulp = require('gulp');
var watch = require('gulp-watch');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('watch', ['browser-sync'], function() {
  watch('frontend/app/**/*.html', () => gulp.start('app.html', 'reload'));
  watch('frontend/app/**/*.css', () => gulp.start('app.css', 'reload'));
  watch('frontend/**/*.js', () => gulp.start('app.js', 'reload'));
  watch('frontend/assets/**/*.*', () => gulp.start('app.assets', 'reload'));
});

gulp.task('browser-sync', ['nodemon'], function() {
  var isWin = /^win/.test(process.platform);
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    browser: isWin ? 'chrome' : 'google-chrome',
    port: 3001
  });
});

gulp.task('nodemon', function(done) {
  var running = false;
  return nodemon({
    script: 'backend/loader.js',
    watch: [
      'backend/**/*.*'
    ]
  }).on('start', function() {
    if(!running) {
      done();
      reload();
    }
    running = true;
  });
});

gulp.task('reload', function() {
   setTimeout(function() {
     reload();
  }, 2000);
});
