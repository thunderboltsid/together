Meteor.startup(function() {

  Factory.define('eventoman', Events, {
    name: function() { return Fake.sentence(); },
    place: function() { return Fake.word(); },
    attending: function () { return _.random(0,20); },
    datetime: function () { return new Date(); }
  });

  if (Events.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('eventoman');
    });

  }

});
