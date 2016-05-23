
Template.requests.rendered = function() {

};

Template.requests.events({
    'click .upvote': function(event) {
        console.log(this._id);
        var request = Requests.findOne({_id: this._id});
        console.log(request);
        request.upvotes += 1;
        console.log(request);

        event.toElement.disabled = true;
        event.toElement.hidden = true;
        Requests.update({_id: this._id}, {$set:{upvotes: request.upvotes}});
    }
});