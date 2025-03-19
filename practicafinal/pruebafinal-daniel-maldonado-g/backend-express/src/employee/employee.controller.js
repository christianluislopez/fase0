const employeeService = require('./employee.service');

class EmployeeController {
    async getStaff(req, res) {
        try {
            const staff = await employeeService.getStaff();
            res.json(staff);
        } catch (error) {
            res.status(500).json({ error: 'Failed to obtain resources' });
        }
    }

    async createEmployee(req, res) {
        try {
            const newEmployee = await employeeService.createEmployee(req.body);
            res.status(201).json(newEmployee);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create record' });
        }
    }
}

module.exports = new EmployeeController();
