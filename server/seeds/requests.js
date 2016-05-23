Meteor.startup(function() {

  Factory.define('request', Items, {
    title: function() { return Fake.sentence(); },
    detail: function() { return Fake.sentence(); },
    upvotes: function () { return Fake.number() }
    
  });

  if (Items.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('item');
    });

  }

});
