/**
 * Created by Zeeshan on 3/11/2015.
 */

var gulp = require('gulp');
var minifiycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');

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
gulp.task('task1', function () {
    return gulp.src(['folder1/**/*.js','folder2/**/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('task2', function () {
    console.log("task2");
});

gulp.task('default', function () {
    gulp.run('css2');
    
    gulp.watch('sass/*.sass', function () {
       gulp.run('css2');
    });

});