const { prisma } = require('../prisma/prisma-client');

/**
 * @route GET /api/employees
 * @desc Get all employees
 * @access Private
 */
const getAll = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany();

        res.status(200).json(employees);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to get employees" });
    }
}

/**
 * @route POST /api/employees/add
 * @desc Add new employee
 * @access Private
 */
const add = async (req, res) => {
    try {
        const data = req.body;

        if (!data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({ message: "All fields must be completed" });
        }
        const employee = await prisma.employee.create({
            data: {
                ...data,
                userId: req.user.id,
            },
        });

        return res.status(201).json(employee);
    } catch (err) {
        res.status(500).json({ message: "Failed to get employees" });
    }
};

/**
 * @route POST /api/employees/remove/:id
 * @desc  Remove employee by id
 * @access Private
 */
const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.employee.delete({
            where: {
                id,
            }
        });

        res.status(204).json({ message: "Ok" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to delete employee" });
    }
}

/**
 * @route PUT /api/employees/edit/:id
 * @desc  Edit employee by id
 * @access Private
 */
const edit = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.params;
        await prisma.employee.update({
            where: {
                id,
            },
            data,
        });

        res.status(204).json({ message: 'Ok' });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to edit employee" });
    }
}


/**
 * @route GET /api/employees/:id
 * @desc  Get employee by id
 * @access Private
 */
const employee = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await prisma.employee.findUnique({
            where: {
                id,
            },
        });

        res.status(200).json(employee);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to get employee" });
    }
}

module.exports = {
    getAll,
    add,
    edit,
    remove,
    employee
}