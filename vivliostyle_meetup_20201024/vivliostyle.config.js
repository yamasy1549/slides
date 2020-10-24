module.exports = {
  title: 'Vivliostyle Themes', // populated into `manifest.json`, default to `title` of the first entry or `name` in `package.json`.
  author: 'yamasy1549 <sanae@yamasy.info>', // default to `author` in `package.json` or undefined.
  // language: 'ja', // default to `en`.
  // size: 'A4', // paper size.
  theme: 'my-theme', // .css or local dir or npm package. default to undefined.
  entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  entry: [
    'cover.md', // `title` is automatically guessed from the file (frontmatter > first heading).
    'intro.md',
    'ch01.md',
    'ch02.md',
    'ch03.md',
    'ch04.md',
    // {
    //   path: 'epigraph.md',
    //   title: 'Epigraph', // title can be overwritten (entry > file),
    //   theme: '@vivliostyle/theme-whatever', // theme can be set indivisually. default to the root `theme`.
    // },
    // 'glossary.html', // html can be passed.
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  // toc: true, // whether generate and include toc.html or not (does not affect manifest.json), default to `true`. if `string` given, use it as a custom toc.html.
  // cover: './cover.png', // cover image. default to undefined.
  // workDir: './dist', // default to `.vivliostyle`.
}
