Meteor.startup(function() {

  Factory.define('event', Items, {
    name: function() { return Fake.sentence(); },
    place: function() { return Fake.word(); },
    attending: function () { return Fake.number(); },
    date: function () { return Fake.date(); },
    time: function () { return Fake.time(); }
  });

  if (Items.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('event');
    });

  }

});
