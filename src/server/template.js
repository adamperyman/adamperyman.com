export default ({ title, body }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel='stylesheet' href='dist/styles.bundle.css' />
      </head>

      <body>
        <div id='main'>${body}</div>
        <script src='dist/bundle.js' />
      </body>
    </html>
  `
}
