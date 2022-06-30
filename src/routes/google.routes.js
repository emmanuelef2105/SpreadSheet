const { Router } = require('express');
const router = Router();

const { 
    obtenerDatos,
    pintarForm,
    guardarDatos,
} = require('../controllers/google.controller');

router.get('/', obtenerDatos);
router.get('/form', pintarForm);
router.post('/form', guardarDatos);

module.exports = router;