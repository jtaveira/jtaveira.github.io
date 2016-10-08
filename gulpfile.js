var gulp = require('gulp')
var $ = require('gulp-load-plugins')({
  pattern: ["gulp-*", "rimraf", "karma"]
})

var paths = {
  js   : './src/**/*.js',
  jade : './src/**/*.jade',
  less : './src/**/*.less'
}

gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe($.plumber())
    .pipe($.less())
    .pipe(gulp.dest('./tmp'))
})

gulp.task('styles', ['less'], function() {
  return gulp.src('./tmp/**/*.css')
    .pipe($.concat('index.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('jade', function() {
  return gulp.src(paths.jade)
    .pipe($.plumber())
    .pipe($.jade({
      pretty: true,
      basedir: './src/templates'
    }))
    .pipe(gulp.dest('./tmp'))
})

gulp.task('templates', ['jade'], function () {
  return gulp.src(['./tmp/templates/**/*.html', '!./tmp/templates/includes/**'])
    .pipe($.angularTemplatecache({ standalone: true }))
    .pipe(gulp.dest('./tmp')) // outputs templates.js
})

gulp.task('concat', ['templates'], function() {

  var assets = $.useref.assets({
    searchPath : [
      './bower_components',
      './tmp',
      './src'
    ]
  })

  return gulp.src('./tmp/index.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(gulp.dest('./dist'))
})

gulp.task('prepend-static-url', ['concat', 'styles'], function() {
  return gulp.src(['./dist/index.html', './dist/index.js'])
    .pipe(gulp.dest('./dist'))
})

gulp.task('webserver', function() {
  gulp.src(['./dist']).pipe($.webserver({
    port: 9119,
    livereload: true,
  }))
})

gulp.task('watch', ['webserver'], function() {
  gulp.watch(paths.js,   ['concat', 'prepend-static-url'])
  gulp.watch(paths.jade, ['concat', 'prepend-static-url'])
  gulp.watch(paths.less, ['styles'])
})

gulp.task('clean', function() {
  $.rimraf.sync('./tmp')
  $.rimraf.sync('./dist')
})

gulp.task('minify-html', ['build:dev'], function() {
  return gulp.src('./dist/**/*.html')
    // .pipe($.htmlmin())
    .pipe(gulp.dest('./dist'))
})

gulp.task('minify-css', ['build:dev'], function() {
  return gulp.src('./dist/**/*.css')
    // .pipe($.csso())
    .pipe(gulp.dest('./dist'))
})

gulp.task('minify-js', ['build:dev'], function() {
  return gulp.src('./dist/**/*.js')
    // .pipe($.uglify())
    .pipe(gulp.dest('./dist'))
})

gulp.task('lint', [], function() {
  gulp.watch(paths.js, ['jshint'])
})

gulp.task('jshint', function () {
  return gulp.src('./src/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'))
})

gulp.task('unit', function (done) {
  new $.karma.Server({
    configFile: __dirname + '/test/karma.conf.js',
    singleRun: true
  }, done).start()
})

gulp.task('tdd', function (done) {
  new $.karma.Server({
    configFile: __dirname + '/test/karma.conf.js'
  }, done).start()
})

gulp.task('build:dev', ['jade', 'less', 'templates', 'styles', 'concat', 'post-process'])
gulp.task('post-process', ['prepend-static-url'])
gulp.task('default', ['webserver', 'watch'])

gulp.task('build:min', ['clean', 'build:dev', 'minify'])
gulp.task('minify', ['minify-html', 'minify-css', 'minify-js'])

gulp.task('build', ['build:min'])
