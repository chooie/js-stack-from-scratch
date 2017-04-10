// @flow
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import initStore from './init-store';
import App from './../shared/app';
import * as config from '../shared/config';
import * as util from '../shared/util';

const path = util.isProd ?
      config.STATIC_PATH :
      `http://localhost:${config.WEBPACK_DEV_SERVER_PORT}/dist`;

const renderApp = (location: string,
                   plainPartialState: ?Object,
                   routerContext: ?Object = {}) => {
  const store = initStore(plainPartialState);
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={routerContext}>
        <App />
      </StaticRouter>
    </Provider>);

  const head = Helmet.rewind();

  return (
    `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <link rel="stylesheet" href="${config.STATIC_PATH}/css/bootstrap.min.css">
      </head>
      <body>
        <div class="${config.APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${path}/js/bundle.js"></script>
      </body>
    </html>`
  );
};

export default renderApp;
