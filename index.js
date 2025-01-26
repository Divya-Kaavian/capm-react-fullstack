const express = require("express");
const bodyParser = require("body-parser")
const app = express();

const {dbConnection} = require("./dbconnection");
const {getEmployeeDetail} =  require('./apis/employee/test');
const {aggregateEmployeesByDepartment} = require('./apis/admin/employeeDetail')
app.use(bodyParser.json())

app.get('/employee-detail', async(req, res)=>{
  console.log("triggered");
  
  const data = await getEmployeeDetail();
  res.json(data);
})

app.get('/admin/employee-detail', async(req, res)=>{
  const result = await aggregateEmployeesByDepartment();

  res.json(result)
})
dbConnection().then((message)=>{
  app.listen('3000', ()=>{
    process.stdout.write(`${message}\n Server running on the port 3000`)
  })
}).catch((err)=>{
  process.stdout.write(`${err}`)
})
