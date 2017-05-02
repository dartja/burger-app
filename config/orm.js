var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// Object for all our SQL statement functions
var orm = {
  addBurger: function(burger, cb) {
    var burgerName = burger;
    var mySQLQuery = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "')";
    connection.query(mySQLQuery, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  eatBurger: function(burgerId, cb) {
    var id = burgerId;
    connection.query("UPDATE burgers SET devoured=1 WHERE id=?", [id], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  showBurgers: function(tableName, cb) {
  connection.query('SELECT * FROM burgers', function(err, result) {
      if (err) throw err;
      cb(result);
  });
 }
};

module.exports = orm;