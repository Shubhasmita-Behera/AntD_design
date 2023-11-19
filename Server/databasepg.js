const {Client} = require('pg');

const client =new Client({
    host:"localhost",
    user: "postgres",
    port:5432,
    password:"Shubha@2018",
    database:"Antd_DB"
})

client.connect();

client.query(`Select * from test`,(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message)
    }
    client.end;
})