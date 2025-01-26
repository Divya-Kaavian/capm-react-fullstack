const db = require('../../model/schema');

const getEmployeeDetail = async() =>{
  try {
    
  const data = await db.Employee.find({});

  
  return data;
  
} catch (error) {
  console.log("Failed to get employee details", error.message);
       
  }
}

module.exports = {getEmployeeDetail}