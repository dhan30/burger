var connection = require("./connection.js");

// console.log(connection);

var orm = {

selectAll: function (a, b, c) {
	var commandString = "SELECT * FROM burgers WHERE devoured";

	connection.query(commandString, [a,b,c], function(err, results) {
		console.log(results);
	});

},

insertOne: function () {
	console.log("2");
	
},

updateOne: function() {
	console.log("3");
},

};

orm.updateOne();
orm.selectAll();


module.exports = orm;