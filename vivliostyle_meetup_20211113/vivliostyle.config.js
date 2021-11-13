module.exports = {
  title: 'vivliostyle_meetup_20211113', // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
  author: 'yamasy1549 <sanae@yamasy.info>', // default to `author` in `package.json` or undefined.
  // language: 'ja', // default to undefined.
  // size: 'A4', // paper size.
  theme: 'my-theme', // .css or local dir or npm package. default to undefined.
  entry: [
    'cover.md', // `title` is automatically guessed from the file (frontmatter > first heading).
    'intro.md',
    'ch01.md',
    'ch02.md',
    'ch03.md',
    'ch04.md',
    'conclusion.md',
    // {
    //   path: 'epigraph.md',
    //   title: 'Epigraph', // title can be overwritten (entry > file),
    //   theme: '@vivliostyle/theme-whatever', // theme can be set individually. default to the root `theme`.
    // },
    // 'glossary.html', // html can be passed.
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  output: [ // path to generate draft file(s). default to '{title}.pdf'
    './vivliostyle_meetup_20211113.pdf', // the output format will be inferred from the name.
    {
      path: './book',
      format: 'webpub',
    },
  ],
  // workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  // toc: true, // whether generate and include ToC HTML or not, default to 'false'.
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
}
