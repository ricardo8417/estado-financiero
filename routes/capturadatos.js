const router = require('express').Router();
const {
    crearDatos,
    obtenerDatos,
    modificarDatos,
    eliminarDatos
} = require('../controllers/datos')
var auth = require('./auth');
router.get('/', auth.opcional, obtenerDatos)
router.get('/:id', auth.opcional, obtenerDatos) // nuevo endpoint con todos los detalles de datos
router.post('/', auth.requerido, crearDatos)
router.put('/:id', auth.requerido, modificarDatos)
router.delete('/:id', auth.requerido, eliminarDatos)
module.exports = router;