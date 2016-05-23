RequestController = AppController.extend({
    waitOn: function () {
        return this.subscribe('requests');
    },
    data: {
        requests: Requests.find({})
    },
    onAfterAction: function () {
        Meta.setTitle('Requests');
    }
});

RequestController.events({
    'click [data-action=doSomething]': function (event, template) {
        event.preventDefault();
    },
    'click .upvote': function(event) {
        var request = Requests.findOne({_id: this._id});
        request.upvotes += 1;
        Requests.save(request)
    }
});