// module.exports = () => {
//     applicationCache.post("/api/names", (req, res) => {
//        console.log( req.body);
//        DataCue.push(req.body.name);
//        res.json(req.body.name);
//     });
//     applicationCache.get(".api/names", (req, res) => {
//         res.json
//     });
// }

//dependencies
const friends = require('../data/friends.js');

// Routing 
module.exports = function (app) {
    // get to friends page
    app.get('/data/friends', function (req, res) {
        res.json(friends);
    });
    //post when submitted 
    app.post('/data/friends', function (req, res) {
        // loop through available friends
        var bff = {
            name: "",
            photo: "",
            
        };

        //need to parse the data and enter into the array

        // math the array and compare to the friends doc

        // update survey html with the submission and display result

    });
};