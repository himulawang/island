'use strict';

var gulp = require('gulp');

var sources = ['./src/**/*.ts'];

function compileTypescript() {
  require('child_process').exec('tsc -p ' + process.cwd(), function (err, stdout, stderr) {
    err && console.error(err);
    console.log(stdout.toString());
    console.error(stderr.toString());
  });
}

function compileTypescriptIgnoreError() {
  require('child_process').exec('tsc -p ' + process.cwd() + ' --noEmitOnError', function (err, stdout, stderr) {
    err && console.error(err);
    console.log(stdout.toString());
    console.error(stderr.toString());
  });
}

function watch() {
  gulp.watch(sources, {interval: 2000}, ['buildIgnoreError']);
}

function clean(done) {
  var del = require('del');
  del(['./dist', './node_modules', './typings'], done);
}

gulp.task('build',            compileTypescript);
gulp.task('buildIgnoreError', compileTypescriptIgnoreError);
gulp.task('watch', watch);
gulp.task('clean', clean);
