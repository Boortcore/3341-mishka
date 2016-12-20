"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var mqpacker = require("css-mqpacker");
var csso = require("gulp-csso");
var imagemin = require('gulp-imagemin');
var rename = require("gulp-rename")
gulp.task("style", function () {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: [
        "last 2 versions"
      ]
      })
    ]))
    /*.pipe(postcss([
      mqpacker({
        sort: true
      })
     ]))
    .
    .pipe(csso())
    .pipe(rename("style.min.css"))*/
  .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function () {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});


gulp.task('images', () =>
  gulp.src('./img/**/*.{png,jpg,gif}')
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true})
    ]))
  .pipe(gulp.dest('build/img'))
);
