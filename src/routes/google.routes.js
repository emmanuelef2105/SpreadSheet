const { Router } = require('express');
const router = Router();

const { 
    obtenerDatos,
    pintarForm,
    guardarDatos,
} = require('../controllers/google.controller');

router.get('/', obtenerDatos);
router.get('/', pintarForm);
router.post('/', guardarDatos);

module.exports = router;