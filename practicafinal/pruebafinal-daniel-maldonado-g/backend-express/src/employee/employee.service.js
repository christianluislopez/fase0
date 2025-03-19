const Employee = require('./employee.model');

class EmployeeService {
    async getStaff() {
        return await Employee.findAll({});
    }

    async createEmployee(data) {
        const newEmployee = new Employee(data);
        return await newEmployee.save();
    }
}

module.exports = new EmployeeService();
