Requests = new Mongo.Collection('requests');

Requests.helpers({

});

Requests.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
