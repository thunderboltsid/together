Events = new Mongo.Collection('eventoman');

Events.helpers({
  
});

Events.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});