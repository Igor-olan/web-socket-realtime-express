const { validationResult } = require ('express-validator');
const { user, student, role, role_user, student_user } = require('../models') ;
const { bcryptjs } = require('bcryptjs')

let self = {}

self.save = async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }
    const {
        username,
        firstName,
        lastName,
        email,
        password,
        classes,
        major,
        gender
    } = req

    const hashedpassword = await bcryptjs.hash(password, 10)
    const userData = {
        username: username,
        email: email,
        password: hashedpassword,
    }

    const studentData = {
        firstName: firstName,
        lastName: lastName,
        classes: classes,
        major_id: major_id,
        gender: gender
}

    const role_student = await role.findOne({
        attributes: ['id'],
        where: {
            name: 'student'
        }
    })

    await role_user.create({
        user_id: user.id,
        role_id: role_student.id
    })

    res.status(201).send({message: 'register success'})
}
module.exports = self