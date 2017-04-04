export default ({ title, body }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>

      <body>
        <div id='main'>${body}</div>
        <script src='dist/bundle.js' />
      </body>
    </html>
  `
}
