/**
 * Created by enxhell on 5/23/16.
 */
Meteor.publishComposite("requests", function() {
    return {
        find: function() {
            return Requests.find({});
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