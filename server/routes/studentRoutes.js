const student_ctrl = require('../controllers/student_ctrl.js')
const { body } = require('express-validator');
const { major } = require('../models/major.js')

module.exports = (app) => {

    const router = app.Router();

    const validation = [
           
    ]

    router.get('/', student_ctrl.index);
    router.get('/:id', student_ctrl.detail);
    router.post('/:id', [
        body('firstName').isString().notEmpty(),
        body('lastName').isString().notEmpty(),
        body('classes').isString().notEmpty().custom((value) => {
            const classes = ['X', 'XI', 'XII', 'XIII'];
        }),
        body('gender').isString().notEmpty(),
        body('major').isString().notEmpty().custom(async() => {
            const majorvalue = await major.findByPk(value)
            console.log((`Major value: ${majorvalue}`))
        }),
    ], student_ctrl.save);
    router.put('/:id', student_ctrl.update);
    router.delete('/:id', student_ctrl.destroy);

    return router
}