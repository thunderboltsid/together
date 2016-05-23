/**
 * Created by siddharthshukla on 23/05/16.
 */

EventController = AppController.extend({
    waitOn: function () {
        return this.subscribe('events');
    },
    data: {
        items: Items.find({})
    },
    onAfterAction: function () {
        Meta.setTitle('Events');
    }
});