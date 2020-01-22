
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webserver = require("gulp-webserver");

gulp.task('default', function() {

return gulp.src('index.js')
  .pipe(webpack({
    module: {
      loaders: [
          {
              //tell webpack to use jsx-loader for all *.jsx files
              test: /\.jsx$/,
              loader: 'jsx-loader?insertPragma=React.DOM&harmony'
          }
      ]
    },
    output: {
        filename: "bundle.js"
    }
  })).pipe(gulp.dest('dist/'));

});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: false,
      directoryListing: true,
      open: true,
      port: 8080
    }));
});
