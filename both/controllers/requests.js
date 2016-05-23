/**
 * Created by siddharthshukla on 23/05/16.
 */

RequestController = AppController.extend({
    waitOn: function () {
        return this.subscribe('items');
    },
    data: {
        items: Requests.find({})
    },
    onAfterAction: function () {
        Meta.setTitle('Requests');
    }
});
RequestController.events({
    'click [data-action=doSomething]': function (event, template) {
        event.preventDefault();
    }
});