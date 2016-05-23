Meteor.startup(function() {

  Factory.define('request', Requests, {
    title: function() { return Fake.sentence(); },
    detail: function() { return Fake.sentence(); },
    upvotes: function () { return _.random(0,20); }
  });

  if (Requests.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('request');
    });

  }

});
