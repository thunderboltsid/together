Meteor.publishComposite("eventoman", function() {
    return {
        find: function() {
            return Events.find({});
        }
        // ,
        // children: [
        //   {
        //     find: function(item) {
        //       return [];
        //     }
        //   }
        // ]
    }
});
