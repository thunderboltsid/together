/**
 * Created by siddharthshukla on 23/05/16.
 */

EventController = AppController.extend({
    waitOn: function () {
        return this.subscribe('events');
    },
    data: {
        events: Events.find({})
    },
    onAfterAction: function () {
        Meta.setTitle('Events');
    }
});

EventController.events({
    'click [data-action=doSomething]': function (event, template) {
        event.preventDefault();
    },
    'click .interested': function(event) {
        var event_ = Events.findOne({_id: this._id});
        event_.attending += 1;
        Events.save(event_)
    }
});