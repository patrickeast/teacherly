const mysql = require("mysql");

function setDb(req, res, next) {
    res.locals.connection = mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        name: process.env.name,
        database: process.env.database
    });
    res.locals.connection.connect();
    next();
}



module.exports = setDb;