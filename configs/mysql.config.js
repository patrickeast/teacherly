const mysql = require("mysql");

function setDb(req, res, next) {
    res.locals.connection = mysql.createConnection({
        host: 'g8mh6ge01lu2z3n1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'o3kv8pzh5xqlxz7p',
        password: 'le1awxk3sy6mywdk',
        port: process.env.DB_PORT || 3306,
        database: 'j59yykxgfkxbngxa'
    });
    res.locals.connection.connect();
    next();
}



module.exports = setDb;