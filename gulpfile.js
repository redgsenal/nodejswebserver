const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('bootstrap_css', ()=>{
	gulp.src('bower_components/bootstrap/dist/css/*.min.css')
    .pipe(gulp.dest('public/css/bootstrap'));
});

gulp.task('bootstrap_js', ()=>{
	gulp.src('bower_components/bootstrap/dist/js/*.min.js')
    .pipe(gulp.dest('public/js/bootstrap'));
});

gulp.task('bootstrap', ['bootstrap_css', 'bootstrap_js']);

gulp.task('jquery', ()=>{
	gulp.src('bower_components/jquery/dist/*')
    .pipe(gulp.dest('public/js/jquery'));
});

gulp.task('clean', ()=>{
  gulp.src('public/')
  .pipe(clean());
});

gulp.task('default', ['clean', 'bootstrap'], ()=>{	
});