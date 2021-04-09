module.exports = {
  title: 'vivliostyle_meetup_20210410', // populated into `manifest.json`, default to `title` of the first entry or `name` in `package.json`.
  author: 'yamasy1549 <sanae@yamasy.info>', // default to `author` in `package.json` or undefined.
  // language: 'ja', // default to undefined.
  // size: 'A4', // paper size.
  theme: 'my-theme', // .css or local dir or npm package. default to undefined.
  entry: [
    'cover.md',
    { path: 'intro.md', title: "イントロダクション" },
    { path: 'ch01.md', title: "Themes まわりの基本的な機能" },
    { path: 'ch02.md', title: "Themes の作り方" },
    { path: 'ch03.md', title: "近いうちできるようになること" },
    // 'manuscript.md', // `title` is automatically guessed from the file (frontmatter > first heading).
    // {
    //   path: 'epigraph.md',
    //   title: 'Epigraph', // title can be overwritten (entry > file),
    //   theme: '@vivliostyle/theme-whatever', // theme can be set indivisually. default to the root `theme`.
    // },
    // 'glossary.html', // html can be passed.
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  output: [ // path to generate draft file(s). default to '{title}.pdf'
    './vivliostyle_meetup_20210410.pdf', // the output format will be inferred from the name.
    {
      path: './book',
      format: 'webpub',
    },
  ],
  // workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  // toc: true, // whether generate and include ToC HTML or not, default to 'false'.
  // cover: './cover.png', // cover image. default to undefined.
}
