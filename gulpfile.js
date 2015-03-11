/**
 * Created by Zeeshan on 3/11/2015.
 */

var gulp = require('gulp');
var minifiycss = require('gulp-minify-css');


gulp.task('css', function () {
    return gulp.src('css/main.css')
        .pipe(minifiycss())
        .pipe(gulp.dest('css/min'));
});

gulp.task('task2', function () {
    console.log("task2");
});

gulp.task('default', function () {
    console.log("YEs");

});