var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts']);

gulp.task('deps.js', function() {
  gulp.src([
    'node_modules/angular/angular.min.js',
    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
    'node_modules/angular-animate/angular-animate.min.js',
    'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
    'node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
    'node_modules/admin-lte/plugins/jQueryUI/jquery-ui.min.js',
    'node_modules/admin-lte/bootstrap/js/bootstrap.min.js',
    'node_modules/admin-lte/plugins/morris/morris.min.js',
    'node_modules/admin-lte/plugins/sparkline/jquery.sparkline.min.js',
    'node_modules/admin-lte/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
    'node_modules/admin-lte/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
    'node_modules/admin-lte/plugins/knob/jquery.knob.js',
    'node_modules/admin-lte/plugins/daterangepicker/moment.js',
    'node_modules/admin-lte/plugins/daterangepicker/daterangepicker.js',
    'node_modules/admin-lte/plugins/datepicker/bootstrap-datepicker.js',
    'node_modules/admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
    'node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
    'node_modules/admin-lte/plugins/fastclick/fastclick.js',
    'node_modules/admin-lte/dist/js/app.min.js',
  ])
  .pipe(uglify())
  .pipe(concat('deps.min.js'))
  .pipe(gulp.dest('public/assets/js'));
});

gulp.task('deps.css', function() {
  gulp.src([
    'node_modules/angular-toastr/dist/angular-toastr.min.css',
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/ionicons/css/ionicons.min.css',
    'node_modules/admin-lte/bootstrap/css/bootstrap.min.css',
    'node_modules/admin-lte/dist/css/AdminLTE.min.css',
    'node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
    'node_modules/admin-lte/plugins/iCheck/flat/blue.css',
    'node_modules/admin-lte/plugins/morris/morris.css',
    'node_modules/admin-lte/plugins/jvectormap/jquery-jvectormap-1.2.2.css',
    'node_modules/admin-lte/plugins/datepicker/datepicker3.css',
    'node_modules/admin-lte/plugins/daterangepicker/daterangepicker-bs3.css',
    'node_modules/admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
  ])
  .pipe(uglifycss({ "uglyComments": true }))
  .pipe(concat('deps.min.css'))
  .pipe(gulp.dest('public/assets/css'));
});

gulp.task('deps.fonts', function() {
  gulp.src([
    'node_modules/font-awesome/fonts/*.*',
    'node_modules/ionicons/fonts/*.*',
    'node_modules/admin-lte/bootstrap/fonts/*.*'
  ])
  .pipe(gulp.dest('public/assets/fonts'));
});
