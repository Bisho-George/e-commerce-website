const sass = require('node-sass');
const fs = require('fs');

sass.render({
  file: './src/styles.scss',
}, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile('./dist/styles.css', result.css, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Sass build complete');
      }
    });
  }
});

