import App from '@enso-ui/ui/src/core/app';
import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';
import './icons';

const routes = routeImporter(require.context('./routes', false, /.*\.js$/));
App.addRoutes(routes);
