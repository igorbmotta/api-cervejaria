const express = require('express')
const router = express.Router()
const controller = require('./../controllers/cervejaria')

router.get('/nome/:nome', controller.mostrarNome)
router.get('/nacionalidade/:nacionalidade', controller.mostrarNacionalidade)
router.get('/mostrar-maior-abv', controller.mostrarMaiorAbv)
router.get('/tipo/:tipo', controller.mostrarTipo)
router.get('/parcial/:parcialNome', controller.mostrarNomeParcial)

module.exports = router