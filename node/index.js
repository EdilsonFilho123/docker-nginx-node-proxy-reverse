const express = require('express');
const mysql = require('mysql');
const faker = require('faker');

const app = express();
const port = 3000;
const conn = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'dockerdb'
});

app.get('/', (req, res) => {
    console.log('entrou');
    
    conn.query(`INSERT INTO people(name) values('${faker.name.findName()}')`, (errInsert) => {
        if(errInsert)
            res.send('<h1>Erro ao acessar Banco de Dados!</h1>');
        else
            conn.query('SELECT name FROM people', (err, result) => {
                if(!err) {
                    var html = '<h1>Full Cycle Rocks!</h1>';

                    html += '<ul>';
                    result.forEach(el => html += '<li>' + el.name + '</li>');
                    html += '</ul>';

                    res.send(html);
                    conn.end;
                }
                else
                    res.send('<h1>Erro ao acessar Banco de Dados!</h1>');
            })
    })
});


app.listen(port, () => {
    console.log('Rodando em ' + port);
})