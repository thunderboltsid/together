Router.route('/', {
  name: 'home'
});

Router.route('/about', {
  name: 'about'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/requests', {
    name: 'requests',
    controller: 'RequestController'
});

Router.route('/requests/:id', {
    name: 'requests/requestDetail',
    controller: 'RequestController'
});

Router.route('/events', {
    name: 'eventoman',
    controller: 'EventController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'eventoman', 'requests']
});
