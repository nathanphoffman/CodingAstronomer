
var fetch = require('whatwg-fetch');

module.exports = {

    getPreviews(callback, tag, page) {
        callback && callback([{
            author: 'Nathan Hoffman',
            title: 'SpaceX is Back',
            subtitle: 'blah blah spacex super awesome coming back and stuff blah blah',
            id: "4555445",
            date: "6/17/2016"
        }]);
    },

    getPost(id, callback) {
        callback && callback({
            author: 'Nathan Hoffman',
            title: 'SpaceX is Back',
            body: 'AND MORE STUFF HERE THIS IS SUPER VIEW blah blah spacex super awesome coming back and stuff blah blah tons more data blaaahhhhs blahhhs blah blah',
            id: "4555445",
            date: "6/17/2016"
        });
    },

    upsertPost(post, callback) {
        callback && callback();
    }

};