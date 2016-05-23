Template.eventoman.rendered = function() {

};

Template.eventoman.events({
    'click .interested': function(event) {
        var event_ = Events.findOne({_id: this._id});
        event_.attending += 1;
        Events.update({_id:this._id}, {$set:{attending: event_.attending}});
        event.toElement.disabled = true;
        event.toElement.hidden = true;
    }
});