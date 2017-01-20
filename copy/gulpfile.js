const gulp = require('gulp');
const ejs = require('gulp-ejs');
const copy = require('gulp-copy');
const sass = require('gulp-sass');

gulp.task('default', [
	'render ejs',
	'render sass',
	'copy non-EJS files',
]);

gulp.task('render ejs', _ => {
	gulp.src('./src/**/[^_]*.ejs')
		.pipe(ejs({}, {
			ext: '.html'
		}))
		.pipe(gulp.dest('./build'));
});

gulp.task('copy non-EJS files', _ => {
	gulp.src('./src/**/*.!(ejs|scss)')
		.pipe(copy('./build', {
			prefix: 1
		}))
		.pipe(gulp.dest('./build'));
});

gulp.task('render sass', _ => {
	gulp.src('./src/css/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./build/css'));
});
