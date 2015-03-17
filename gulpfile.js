/**
 * Created by Zeeshan on 3/11/2015.
 */

var gulp = require('gulp');
var minifiycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//css minification
gulp.task('css', function () {
    return gulp.src('css/main.css')
        .pipe(minifiycss())
        .pipe(autoprefixer('last 15 version'))
        .pipe(gulp.dest('css/min'))
        .pipe(notify({message:"CSS Minified."}));
});
//sass
gulp.task('css2', function () {
    return sass('sass/main.sass', {style:'compressed'}) //.pipe(sass({style:'compressed'}))// this style won't work :: http://stackoverflow.com/questions/28140012/gulp-typeerror-arguments-to-path-join-must-be-strings
        .pipe(autoprefixer('last 5 version'))
        .pipe(gulp.dest('css'))
        .pipe(notify({message:"SASS Done"}));
});

//concat files
gulp.task('dist:js', function () {
    //return gulp.src(['folder1/**/*.js','folder2/**/*.js'])
    return gulp.src('{folder1,folder2}/**/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(notify({message:"Dist Done"}));
});



var inject = require('gulp-inject');
//sequence
gulp.task('inject', ['inject:js'], function () {

    console.log('This is task inject');
    return notify({message:"All Injection Done"});
});
//concurrent
gulp.task('injectp', ['inject:js', 'inject:css'], function () {

    console.log('This is task inject');
    return notify({message:"All Injection Done"});
});
gulp.task('inject:js', function () { //['inject:css'],
    console.log('This is task inject:js');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    return gulp.src('./gulp-inject/index.html')
        .pipe(inject( gulp.src('./{gulp-inject/folder1,gulp-inject/folder2}/**/*.js', { read: false })))
        .pipe(gulp.dest('./gulp-inject'))
        .pipe(notify({message:"JS Injection Done"}));
});
gulp.task('inject:css', function () {
    console.log('This is task inject:css');
    return gulp.src('./gulp-inject/index.html')
        .pipe(inject(gulp.src('./gulp-inject/folder3/**/*.css', {read: false})))
        .pipe(gulp.dest('./gulp-inject'))
        .pipe(notify({message: "CSS Injection Done"}));
});

var copy = require('gulp-copy');

gulp.task('copy', function() {
    return gulp.src('test-src/**')
        .pipe(gulp.dest('test-target/services'));
    //pipe(notify({message:"update-hybrid-services done :)"}));

});

var less = require('gulp-less');
var watchLess = require('gulp-watch-less');

gulp.task('css3', function () {
    return gulp.src('less/style.less')
        .pipe(watchLess('less/style.less'))
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('default', function () {
    gulp.run('css2');
    
    gulp.watch('sass/*.sass', function () {
       gulp.run('css2');
    });

});