EventController = AppController.extend({
    waitOn: function () {
        return this.subscribe('events');
    },
    data: {
        eventoman: Events.find({})
    },
    onAfterAction: function () {
        Meta.setTitle('Events');
    }
});

EventController.events({
    'click [data-action=doSomething]': function (event, template) {
        event.preventDefault();
    }
});