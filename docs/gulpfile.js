var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('template/*.html')
    .pipe(htmlmin({collapseWhitespace: true,removeComments: true}))
    .pipe(gulp.dest('template_minify_2'));
});

gulp.task('default', ['minify']);
