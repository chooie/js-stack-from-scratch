// @flow
import compression from "compression";
import express from "express";

import * as config from "../shared/config";
import * as util from "../shared/util";
import renderApp from "./render-app";

const app = express();

app.use(compression());
app.use(config.STATIC_PATH, express.static(`dist`));
app.use(config.STATIC_PATH, express.static(`public`));

app.get(`/`, function(request, response) {
  response.send(renderApp(config.APP_NAME));
});

app.listen(config.WEB_PORT, function() {
  const profile: string  = util.isProd? `production` : `development`;
  console.log(`Server running on port ${config.WEB_PORT} '(${profile})'`);
});
