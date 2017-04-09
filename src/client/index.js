import "babel-polyfill";
import * as config from "../shared/config";

const appContainer = document.querySelector(config.APP_CONTAINER_SELECTOR);

appContainer.innerHTML = `<h1>Hello Webpack!</h1>`;
