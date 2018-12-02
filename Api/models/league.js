var mongoose = require('mongoose');

// Page Schema
var LeagueSchema = mongoose.Schema({
   
    title: {
        type: String
    },
    slug: {
        type: String
    },
    image: {
        type: String
    },
});

var League = module.exports = mongoose.model("League", LeagueSchema);