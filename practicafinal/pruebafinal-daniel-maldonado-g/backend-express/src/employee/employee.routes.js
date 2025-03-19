const express = require('express');
const router = express.Router();
const employeeController = require('./employee.controller');

router.get('/',(req, res) => employeeController.getStaff(req, res));
router.post('/', (req, res) => employeeController.createEmployee(req, res));

module.exports = router;
