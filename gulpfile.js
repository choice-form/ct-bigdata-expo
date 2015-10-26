var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  less = require('gulp-less');

gulp.task('less', function () {
  // gulp.src('./public/css/*.less')
  //   .pipe(plumber())
  //   .pipe(less())
  //   .pipe(gulp.dest('./public/css'))
  //   .pipe(livereload());
  gulp.src('./public/less/main.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./public/css/'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  gulp.watch('./public/less/*.less', ['less']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: './bin/www',
    ext: 'js coffee jade',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if (/^Express server listening on port/.test(chunk)) {
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'less',
  'develop',
  'watch'
]);
