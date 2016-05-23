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

Router.route('/events', {
    name: 'events',
    controller: 'EventController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
