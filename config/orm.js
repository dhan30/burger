var connection = require("../config/connection.js");

// console.log(connection);

var createBurgerlist = function(devoured) {
	var arr = [];
	for (var i = 0; i < devoured; i++) {
		arr.push("_");
	}
	return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {

selectAll: function(tableInput, cb) {
    var commandString = "SELECT * FROM " + tableInput + ";";
    connection.query(commandString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });

},

insertOne:  function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += createBurgerlist(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });

},

updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
}

module.exports = orm;