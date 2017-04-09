// @flow
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import * as RHL from 'react-hot-loader';

import App from './app';
import * as config from '../shared/config';

const rootElement = document.querySelector(config.APP_CONTAINER_SELECTOR);

const wrapApp = AppComponent =>
  <RHL.AppContainer>
    <AppComponent />
  </RHL.AppContainer>;

ReactDOM.render(wrapApp(App), rootElement);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./app').default;
    ReactDOM.render(wrapApp(NextApp), rootElement);
  });
}
