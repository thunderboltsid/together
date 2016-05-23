/**
 * Created by siddharthshukla on 23/05/16.
 */

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