var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');


function style() {
  return gulp.src('sass/main.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
    ]))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
		.pipe(gulp.dest('css'));
};


// Если нужно сжатие картинок - раскоментировать
// var imagemin = require('gulp-imagemin');
// var imageminMozjpeg = require('imagemin-mozjpeg');

// function jpg() {
//   return gulp.src("optimg/**/*.jpg")
//     .pipe(imagemin([
//       // imagemin.jpegtran({
//       //   progressive: true,
//       //   arithmetic:true
//       // }),
//       imageminMozjpeg({quality: 90, progressive: false, smooth: 1})
//     ]))
//     .pipe(gulp.dest("img"));
// };

// function png () {
//   return gulp.src("optimg/**/*.png")
//     .pipe(imagemin([
//       imagemin.optipng({optimizationLevel: 5})
//     ]))
//     .pipe(gulp.dest("img"));
// };

// function svg () {
//   return gulp.src("optimg/**/*.svg")
//     .pipe(imagemin([
//       imagemin.svgo()
//     ]))
//     .pipe(gulp.dest("img"));
// };

function watch() {
  gulp.watch("sass/**/main.sass", style);
}

var build = gulp.series(
  style,
  // jpg, png, svg,
  watch
);

exports.default = build;
