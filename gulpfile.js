const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');

gulp.task('bootstrap_css', ()=>{
	gulp.src('bower_components/bootstrap/dist/css/*.min.css')
	.pipe(gulp.dest('public/css/bootstrap'));
});

gulp.task('bootstrap_js', ()=>{
	gulp.src('bower_components/bootstrap/dist/js/*.min.js')
	.pipe(gulp.dest('public/js/bootstrap'));
});

gulp.task('js', ['jquery', 'bootstrap_js'], ()=>{
	gulp.src('src/js/*.js')
	.pipe(gulp.dest('public/js/'));
});

gulp.task('jquery', ()=>{
	gulp.src('bower_components/jquery/dist/*.js')
	.pipe(gulp.dest('public/js/jquery'));
});

gulp.task('fonts', ()=>{
	gulp.src('src/fonts/*')
	.pipe(gulp.dest('public/css/fonts/'));
});

gulp.task('sass', ()=>{
	return gulp.src('src/scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('public/css'));
});

gulp.task('assets', ['js', 'fonts', 'sass', 'bootstrap_css']);

gulp.task('clean', ()=>{
	gulp.src(['public/js/**', 'public/css/**'])
	.pipe(clean());
});

gulp.task('default', ['clean'], ()=>{
	runSequence('assets');
});