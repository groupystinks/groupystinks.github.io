
// Proxy calls to router to avoid circular dependencies
// https://github.com/rackt/react-router/blob/master/docs/guides/flux.md#circular-dependencies-in-actions
var router;

module.exports = {
  getCurrentPath(): string {
    return router.getCurrentPath();
  },

  makePath(to: string, params, query): string {
    return router.makePath(to, params, query);
  },

  makeHref(to: string, params, query): string {
    return router.makeHref(to, params, query);
  },

  transitionTo(to: string, params, query) {
    router.transitionTo(to, params, query);
  },

  replaceWith(to: string, params, query) {
    router.replaceWith(to, params, query);
  },

  goBack() {
    router.goBack();
  },

  run(render: (component: any, state: {params: Params}) => void) {
    router.run(render);
  }
};

var Router = require('react-router');
var routes = require('./routes');

router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});
