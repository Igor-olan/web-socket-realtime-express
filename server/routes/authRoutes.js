const { body } = require('express-validator')
const auth_ctrl = require('../controllers/auth_ctrl')
const { major, user } = require('../models')

module.exports = (app) => {
    const router = app.Router()

    router.post('/register',[
            body('username').isString().notEmpty().isLength({ min: 8, max:16 }).custom((value) => {}),
             body('firstName').isString().notEmpty(),
                body('lastName').isString().notEmpty(),
                body('email').isEmail().isString().notEmpty().custom((value) => {
                    let emailCheck = User.findOne({
                        where: {
                            email: value
                        }
                    })

                    if (emailCheck) {
                        throw new Error('Email already in use!');
                    }
                }),
                // body('password').isString().notEmpty().isLength({ min: 8 }),
                body('classes').isString().notEmpty().custom(async (value) => {
                    const classValue = ["X", "XI", "XII", "XIII"]
                    const isValid = classValue.includes(value)
        
                    if (!isValid) {
                        throw new Error('choose your class!');
                    }
                }),
                body('gender').isString().notEmpty().custom(async (value) => {
                    const genderVal = ["M", "F"]
                    const isValid = genderVal.includes(value)
        
                    if (!isValid) {
                        throw new Error('choose your gender!');
                    }
                }),
                body('major_id').isString().notEmpty().custom(async (value) => {
                    const majorValue = await major.findByPk(value)
                    if (!!majorValue == false) {
                        throw new Error('choose your major!');
                    }
                }),
    ], auth_ctrl.save)

    return router
}