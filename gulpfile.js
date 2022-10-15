import gulp from 'gulp';
import browser from 'browser-sync';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import { deleteAsync as del } from "del";
import imagemin, {optipng, mozjpeg, svgo} from 'gulp-imagemin';
import webp from 'gulp-webp';

// HTML

const html = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}

// Images

export const images = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      optipng({optimizationLevel: 3}),
      mozjpeg({progressive: true}),
      svgo({
        plugins: [
          {
            name: 'removeViewBox',
            active: false
          }
        ]
      })
    ]))
    .pipe(gulp.dest("source/img"));
}

export const towebp = () => {
  return gulp.src(["source/img/**/*.{png,jpg}", "!source/img/icon/*.{png,jpg}"])
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
}

// Clean

export const clean = () => {
  return del('build');
};

// Copy

export const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**/*"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Reload

const reload = (done) => {
  browser.reload();
  done();
}

// Watcher
const watcher = () => {
  gulp.watch('source/*.html').on('change', browser.reload);
  gulp.watch('source/*.html', gulp.series(html, reload));
}

export default gulp.series(
  clean, copy, html, server, watcher
);

export const build = gulp.series(
  clean, copy, html
);
