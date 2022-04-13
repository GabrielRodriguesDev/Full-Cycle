const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
var result = {}

const sql = `INSERT INTO people(name) values('Gabriel')`
connection.query(sql)

connection.query('SELECT * FROM people', (err,rows) => {
    if(err) throw err

    //console.log('Registros', rows, '\n\n');
    result = rows
})

connection.end()


app.get('/', (req, res) => {

    var connection = mysql.createConnection(config)

    connection.query(
      "SELECT * FROM people",
        function (err, rows) {
        if (err) throw err;

        var html = "<h1>Full Cycle Rocks!</h1> <ul>"
        for (var i in rows) html += "<li>" + rows[i].name + "</li>";
        html += "</ul>"

        res.send(html);
        }
    );
    
    connection.end()
})







app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})