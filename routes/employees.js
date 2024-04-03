const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { getAll, add } = require("../controllers/employees");

//*  /api/employees
router.get('/', auth, getAll);

//*  /api/employees/:id
router.get('/:id', auth, () => {
    console.log('get 1 employees');
});

//*  /api/employee/add
router.post('/add', auth, add);

//*  /api/employee/remove/:id
router.delete('/remove/:id', auth, () => {
    console.log('Delete employee');
});

//*  /api/employee/edit/:id
router.put('/edit/:id', auth, () => {
    console.log('edit employee');
});

module.exports = router;
