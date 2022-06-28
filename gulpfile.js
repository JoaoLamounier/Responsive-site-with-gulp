const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps')

// Source Path
var js_src = "./src/js/*.js";
var css_src = "./src/css/*.css";


// Dist Path 
var js_dist = "./js/";
var js_dist_name = "scripts.js";

var css_dist = "./css/";
var css_dist_name = "styles.css";

// Minify e Concat
////js
gulp.task('scripts', function(){
    return gulp.src(js_src)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat(js_dist_name))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(js_dist));
});
////css
gulp.task('styles', function(){
    return gulp.src(css_src)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat(css_dist_name))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(css_dist));
});

// Watch
gulp.task('watch', function(){
    gulp.watch(js_src, gulp.series('scripts'));
    gulp.watch(css_src, gulp.series('styles'));
});

//default 
gulp.task('default',gulp.series('scripts','styles'));