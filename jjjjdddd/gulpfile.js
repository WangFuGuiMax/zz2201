const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("copyHtml", done => {
  gulp.src("*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
  done();
})
gulp.task("copycsan", done => {
  gulp.src("css/*.css").pipe(gulp.dest("dist/css")).pipe(connect.reload());
  done();
})
gulp.task("copyjs", done => {
  gulp.src("js/*.js").pipe(gulp.dest("dist/js")).pipe(connect.reload());
  done();
})
gulp.task("copyimg", done => {
  gulp.src("img/*.{jpg,png}").pipe(gulp.dest("dist/img")).pipe(connect.reload());
  done();
})
gulp.task("sass", done => {
  gulp.src("sass/*.scss")
    .pipe(sourcemaps.init())
    /* .pipe(sass({
      outputStyle: "compressed"
    })) */
    .pipe(sass())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("dist/css")).pipe(connect.reload());
  done();
})
gulp.task("server", done => {
  connect.server({
    root: "dist",
    livereload: true
  })
  done();
})
gulp.task("watch", done => {
  gulp.watch("*.html", gulp.series("copyHtml"));
  gulp.watch("css/*.css", gulp.series("copycsan"));
  gulp.watch("js/*.js", gulp.series("copyjs"));
  gulp.watch("img/*.{png,jpg}", gulp.series("copyimg"));
  gulp.watch("sass/*.scss", gulp.series("sass"));
  done();
})

gulp.task("default", gulp.series("server", "watch"));