var connection = require("./connection.js");

// console.log(connection);

var orm = {

selectAll: function (a, b, c) {
	var commandString = "SELECT * FROM burgers WHERE devoured = true";

	connection.query(commandString, [a,b,c], function(err, results) {
		console.log(results);
	});

},

insertOne: function (burger_name, devoured, date_devoured) {
	// console.log("2");
	var commandString = "UPDATE burgers SET id = 2 WHERE devoured = 0 ";
	connection.query(commandString, [burger_name,devoured,date_devoured], function(err, results) {
		console.log(results);
	});

},

updateOne: function() {
	console.log("3");
},

};


// orm.selectAll();
orm.insertOne("veggieburger", true, 20170525);
// orm.updateOne();


module.exports = orm;