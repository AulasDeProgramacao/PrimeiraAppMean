var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('frontend/app/**/*.html', ['app.html', 'reload']);
  gulp.watch('frontend/app/**/*.css', ['app.css', 'reload']);
  gulp.watch('frontend/**/*.js', ['app.js', 'reload']);
  gulp.watch('frontend/assets/**/*.*', ['app.assets', 'reload']);
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
