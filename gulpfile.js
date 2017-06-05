var gulp = require('gulp')
var sequence = require('gulp-sequence')
var del = require('del')
var through2 = require('through2')
var browserify = require('browserify')
var babelify = require('babelify')

gulp.task('clean', function() {
  del(['./dist/**/*'])
});

gulp.task('bundle', function () {
  return gulp.src('./src/variation.js')
    .pipe(through2.obj(function(file, enc, next) {
      browserify(file.path)
      .transform(babelify, { presets: ['es2015'] })
      .bundle(function(err, res) {
        if (err) return console.error('Error bundling code:', err)
        file.contents = new Buffer(res)
        next(null, file)
      })
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('default', sequence('clean', 'bundle'))
