//  requires

const gulp = require('gulp');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const autoprefixer = require('gulp-autoprefixer');
const tinypng = require('gulp-tinypng-compress');
const modernizr = require('gulp-modernizr');
const cssbeautify = require('gulp-cssbeautify');

//  sass and vendor prefixes

const autoprefixerOptions = {
    browsers: [
        'last 2 version',
        'safari 5',
        'ie 7', 'ie 8', 'ie 9',
        'opera 12.1',
        'ios 6', 'android 4'
    ]
};

gulp.task('styles', function() {
    gulp.src('css/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(cssbeautify())
        .pipe(gulp.dest('./css/'))
});

//  modernizr

gulp.task('modernizr', function() {
    gulp.src('./scripts/modules/*.js')
        .pipe(modernizr({
            options: [
                "setClasses",
        		"addTest",
        		"html5printshiv",
        		"testProp",
        		"fnBind"
            ]
        }))
        .pipe(gulp.dest("./scripts/modules/"))
});

//  concat js files

gulp.task('scripts', function() {
    return gulp.src('./scripts/modules/*.js')
        .pipe(concat('./scripts.js'))
        .pipe(gulp.dest('./scripts/'));
});

//  tidy CSS

gulp.task('tidy', function() {
    return gulp.src('./css/*.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('./css/'));
});

//  webserver - launch localhost

gulp.task('webserver', function() {
    gulp.src('')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
    }));
});

//  run tasks + watch

gulp.task('default', ['webserver', 'watch']);
gulp.task('watch', function() {
    gulp.watch('./scripts/modules/*.js', ['scripts']);
    gulp.watch('css/sass/*.scss',['styles']);
})
