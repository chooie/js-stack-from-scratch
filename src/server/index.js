// @flow
import compression from 'compression';
import express from 'express';

import routing from './routing';
import * as config from '../shared/config';
import * as util from '../shared/util';

const app = express();

app.use(compression());
app.use(config.STATIC_PATH, express.static('dist'));
app.use(config.STATIC_PATH, express.static('public'));

routing(app);

app.listen(config.WEB_PORT, () => {
  const profileMessage: string = util.isProd ? '(production).' :
        '(development).\nKeep \'yarn dev:wds\' running in an other terminal';
  console.log(
    `Server running on port ${config.WEB_PORT} '${profileMessage}'`,
  );
});
