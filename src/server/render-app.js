// @flow
import * as config from "../shared/config";

export default function renderApp(title: string) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="${config.STATIC_PATH}/css/style.css">
      </head>
      <body>
        <h1>${title}</h1>
      </body>
    </html>
  `;
}
