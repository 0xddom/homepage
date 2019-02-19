var gulp = require ('gulp');
var csslint = require ('gulp-csslint');
var eslint = require('gulp-eslint');
var jsmin = require('gulp-jsmin');
var phplint = require('gulp-phplint');
const sass = require('gulp-ruby-sass');
var uglifycss = require('gulp-uglifycss');
var scsslint = require('gulp-scss-lint');

var css_path = 'src/css/**/*.css';
var js_path = 'src/js/**/*.js';
var html_path = 'src/**/*.html';
var scss_path = 'src/scss/**/*.scss';
var dist = 'dist';
var js_dist = 'dist/js';
var css_dist = 'dist/css';
var img_dist = 'dist/images';
var manifest = 'manifest.json';
var themes = 'src/themes/**/*';
var themes_dist = 'dist/themes';

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

gulp.task('lint', ['css-lint', 'js-lint', 'scss-lint']);

gulp.task('dist-manifest', function() {
    gulp.src(manifest)
        .pipe(gulp.dest(dist));
});

gulp.task('dist-themes', function() {
    gulp.src(themes)
        .pipe(gulp.dest(themes_dist));
});

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

gulp.task('dist-html', function() {
    gulp.src(html_path)
        .pipe(gulp.dest('dist'));
});

gulp.task('dist-libs', function() {
    gulp.src(libs_path)
        .pipe(gulp.dest('dist'));
});

gulp.task('dist', ['dist-js', 'dist-css', 'dist-html', 'dist-manifest', 'dist-themes']);

gulp.task('default', ['dist']);
