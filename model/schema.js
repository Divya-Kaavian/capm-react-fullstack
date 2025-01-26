// models/Department.js
const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  departmentId: { type: String, required: true, unique: true }, 
  name: { type: String, required: true },
  description: { type: String },
});

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  salary: { type: Number, required: true },
  departmentId: { type: String, required: true }
});


const Employee = mongoose.model('Employee', employeeSchema);
const Department = mongoose.model('Department', departmentSchema);

module.exports = {Department, Employee};
