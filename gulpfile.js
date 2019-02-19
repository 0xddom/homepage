const gulp = require ('gulp');
const csslint = require ('gulp-csslint');
const eslint = require('gulp-eslint');
const jsmin = require('gulp-jsmin');
const phplint = require('gulp-phplint');
const sass = require('gulp-ruby-sass');
const uglifycss = require('gulp-uglifycss');
const scsslint = require('gulp-scss-lint');
const pug = require('gulp-pug');

const css_path = 'src/css/**/*.css';
const js_path = 'src/js/**/*.js';
const html_path = 'src/**/*.html';
const pug_path = 'src/**/*.pug';
const scss_path = 'src/scss/**/*.scss';
const dist = 'dist';
const js_dist = 'dist/js';
const css_dist = 'dist/css';
const img_dist = 'dist/images';
const manifest = 'manifest.json';
const themes = 'src/themes/**/*';
const themes_dist = 'dist/themes';

const pug_cfg = {
    locals: {
        searchBars: require('./search-bars.json'),
        config: require('./config.json')
    }
};

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

gulp.task('dist-pug', function() {
    gulp.src(pug_path)
        .pipe(pug(pug_cfg))
        .pipe(gulp.dest('dist'));
})

gulp.task('dist-libs', function() {
    gulp.src(libs_path)
        .pipe(gulp.dest('dist'));
});

gulp.task('dist', ['dist-js', 'dist-css', 'dist-html', 'dist-pug', 'dist-manifest', 'dist-themes']);

gulp.task('default', ['dist']);
