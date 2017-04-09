// @flow
import * as config from '../shared/config';
import * as util from '../shared/util';

const path = util.isProd ?
      config.STATIC_PATH :
      `http://localhost:${config.WEBPACK_DEV_SERVER_PORT}/dist`;

export default function renderApp(title: string) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="${config.STATIC_PATH}/css/style.css">
      </head>
      <body>
        <div class="${config.APP_CONTAINER_CLASS}"></div>
        <script src="${path}/js/bundle.js"></script>
      </body>
    </html>
  `;
}
