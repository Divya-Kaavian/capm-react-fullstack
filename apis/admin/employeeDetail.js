const {Employee} = require('../../model/schema');

/**
 * This function calculates the average salary and total number of employees for each department.
 * 
 * The function follows these steps:
 * 
 * 1. **Join Employee and Department Data**: 
 *    - It combines the `Employee` collection with the `Department` collection using the `departmentId` field. 
 *    - This step helps to get details about the department for each employee.
 * 
 * 2. **Flatten Department Data**:
 *    - The data from the `Department` collection is in an array after the join, so we "unwind" it to make it easy to work with.
 * 
 * 3. **Group Employees by Department**:
 *    - It groups employees by their `departmentId` (the department they belong to).
 *    - It calculates the average salary and counts the total number of employees in each department.
 * 
 * 4. **Sort by Salary**:
 *    - It sorts the departments by average salary in descending order, showing the highest-paid departments first.
 * 
 * The result will show the department `departmentId`, the **average salary**, and the **total number of employees** in each department.
 */
const aggregateEmployeesByDepartment = async () =>{
try {
  const result = await Employee.aggregate([
    {
      $lookup:{
        from: 'departments',
        localField: 'departmentId',
        foreignField: 'departmentId',
        as: 'DepartmentDetail'
      }
    },
    {
      $unwind: '$DepartmentDetail'
    },
    {
      $group: {
        _id: '$departmentId',
        averageSalary : {$avg: '$salary'},
        totalEmployees: {$sum: 1}
      },
    },
    { $sort: {averageSalary: -1}},
  ])

  return result;
} catch (error) {
  console.log("Failed to calcuate the Average salary and total employee details", error.message);
  
}
}

module.exports = {aggregateEmployeesByDepartment}