// @flow
import compression from 'compression';
import express from 'express';

import * as config from '../shared/config';
import * as util from '../shared/util';
import renderApp from './render-app';
import { helloEndpointRoute } from '../shared/routes';

const app = express();

app.use(compression());
app.use(config.STATIC_PATH, express.static('dist'));
app.use(config.STATIC_PATH, express.static('public'));

app.get('/', (request, response) => {
  response.send(renderApp(config.APP_NAME));
});

app.get(helloEndpointRoute(), (req, res) => {
  res.json({
    serverMessage: `Hello from the server! (received ${req.params.num})`,
  });
});

app.listen(config.WEB_PORT, () => {
  const profileMessage: string = util.isProd ? '(production).' :
        '(development).\nKeep \'yarn dev:wds\' running in an other terminal';
  console.log(
    `Server running on port ${config.WEB_PORT} '${profileMessage}'`,
  );
});
