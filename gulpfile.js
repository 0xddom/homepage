var gulp = require ('gulp');
var csslint = require ('gulp-csslint');
var eslint = require('gulp-eslint');
var jsmin = require('gulp-jsmin');
var phplint = require('gulp-phplint');
const sass = require('gulp-ruby-sass');
var uglifycss = require('gulp-uglifycss');
var scsslint = require('gulp-scss-lint');
var coffee = require('gulp-coffee');
var coffeeConcat = require('gulp-coffeescript-concat');

var css_path = 'src/css/**/*.css';
var js_path = 'src/js/**/*.js';
var img_path = 'src/images/**/*';
var php_path = 'src/**/*.php';
var scss_path = 'src/scss/**/*.scss';
var coffee_path = 'src/coffee/**/*.coffee';
var libs_path = 'lib/**/*';
var js_dist = 'dist/js';
var css_dist = 'dist/css';
var img_dist = 'dist/images';

gulp.task('css-lint', function() {
    gulp.src(css_path)
        .pipe(csslint())
        .pipe(csslint.formatter());
});

gulp.task('scss-lint', function() {
    gulp.src(scss_path)
        .pipe(scsslint());
});

gulp.task('js-lint', function() {
    gulp.src(js_path)
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('php-lint', function() {
    gulp.src(php_path)
        .pipe(phplint());
});

gulp.task('lint', ['css-lint', 'js-lint', 'php-lint', 'scss-lint']);

gulp.task('dist-js', function() {
    gulp.src(js_path)
        .pipe(jsmin())
        .pipe(gulp.dest(js_dist));
});

gulp.task('dist-css', function() {
    gulp.src(css_path)
        .pipe(uglifycss())
        .pipe(gulp.dest(css_dist));
});

gulp.task('dist-scss', function() {
    sass(scss_path)
        .pipe(uglifycss())
        .pipe(gulp.dest(css_dist));
});

gulp.task('dist-imgs', function() {
    gulp.src(img_path)
        .pipe(gulp.dest(img_dist));
});

gulp.task('dist-php', function() {
    gulp.src(php_path)
        .pipe(gulp.dest('dist'));
});

gulp.task('dist-libs', function() {
    gulp.src(libs_path)
        .pipe(gulp.dest('dist'));
});

gulp.task('dist-coffee', function() {
    gulp.src(coffee_path)
        .pipe(coffeeConcat('application.coffee'))
        .pipe(coffee({bare: false}))
        .pipe(jsmin())
        .pipe(gulp.dest(js_dist));
});

gulp.task('dist', ['dist-js', 'dist-css', 'dist-imgs', 'dist-php', 'dist-scss', 'dist-libs', 'dist-coffee']);

gulp.task('default', ['lint', 'dist']);
