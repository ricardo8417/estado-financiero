var router = require('express').Router();

router.get('/', (req, res) => {
    res.send('welcome to Sistema de Estado Financiero');
});


router.use('/usuarios', require('./usuarios'));
router.use('/mascotas', require('./capturadatos'));
// router.use('/solicitudes', require('./solicitudes'));


module.exports = router;