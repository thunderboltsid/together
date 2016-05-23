/**
 * Created by siddharthshukla on 23/05/16.
 */

EventController = AppController.extend({
    waitOn: function () {
        return this.subscribe('items');
    },
    data: {
        items: Events.find({})
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