const express = require('express');
const app = express()
const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'School',
  password: 'cos@77948',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.get('/',(req,res)=>{
    client.query(`select * from teachers`,(err,result)=>{
        if(!err){
            res.send(result.rows)
        }
    })
    client.end
})

app.listen(4000)
