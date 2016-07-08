var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts']);

gulp.task('deps.js', function() {
  gulp.src([
    'bower_components/angular/angular.min.js',
    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
    'bower_components/angular-animate/angular-animate.min.js',
    'bower_components/angular-toastr/dist/angular-toastr.tpls.min.js',
    'bower_components/AdminLTE/plugins/jQuery/jQuery-2.2.0.min.js',
    'bower_components/AdminLTE/plugins/jQueryUI/jquery-ui.min.js',
    'bower_components/AdminLTE/bootstrap/js/bootstrap.min.js',
    'bower_components/AdminLTE/plugins/morris/morris.min.js',
    'bower_components/AdminLTE/plugins/sparkline/jquery.sparkline.min.js',
    'bower_components/AdminLTE/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
    'bower_components/AdminLTE/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
    'bower_components/AdminLTE/plugins/knob/jquery.knob.js',
    'bower_components/AdminLTE/plugins/daterangepicker/daterangepicker.js',
    'bower_components/AdminLTE/plugins/datepicker/bootstrap-datepicker.js',
    'bower_components/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
    'bower_components/AdminLTE/plugins/slimScroll/jquery.slimscroll.min.js',
    'bower_components/AdminLTE/plugins/fastclick/fastclick.js',
    'bower_components/AdminLTE/dist/js/app.min.js',
  ])
  .pipe(uglify())
  .pipe(concat('deps.min.js'))
  .pipe(gulp.dest('public/assets/js'));
});

gulp.task('deps.css', function() {
  gulp.src([
    'bower_components/angular-toastr/dist/angular-toastr.min.css',
    'bower_components/font-awesome/css/font-awesome.min.css',
    'bower_components/Ionicons/css/ionicons.min.css',
    'bower_components/AdminLTE/bootstrap/css/bootstrap.min.css',
    'bower_components/AdminLTE/dist/css/AdminLTE.min.css',
    'bower_components/AdminLTE/dist/css/skins/_all-skins.min.css',
    'bower_components/AdminLTE/plugins/iCheck/flat/blue.css',
    'bower_components/AdminLTE/plugins/morris/morris.css',
    'bower_components/AdminLTE/plugins/jvectormap/jquery-jvectormap-1.2.2.css',
    'bower_components/AdminLTE/plugins/datepicker/datepicker3.css',
    'bower_components/AdminLTE/plugins/daterangepicker/daterangepicker-bs3.css',
    'bower_components/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
  ])
  .pipe(uglifycss({ "uglyComments": true }))
  .pipe(concat('deps.min.css'))
  .pipe(gulp.dest('public/assets/css'));
});

gulp.task('deps.fonts', function() {
  gulp.src([
    'bower_components/font-awesome/fonts/*.*',
    'bower_components/Ionicons/fonts/*.*',
    'bower_components/bootstrap/fonts/*.*'
  ])
  .pipe(gulp.dest('public/assets/fonts'));
});
