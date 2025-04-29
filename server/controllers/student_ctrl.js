const {student, major} = require('../models')
const { validationResult } = require('express-validator')

let self = {}

self.index = async (_, res) => {
    const data = await student.findAll({
        attributes: ['id', 'firstName', 'lastName', 'classes', 'gender'],
            include: {
                model: major,
                // attributes: ['id', 'alias'],
            }
    })
    
    res.status(200).json({
        message: "aya cuy data siswana",
        data: data
    })
    
self.detail = async (req, res) => {

        const { id } = req.params
        const student = await db.student.findByPk(id, {
            attributes: ['id', 'firstName', 'lastName', 'classes', 'gender'],
            include: {
                model: major,
                attributes: ['id', 'name'],
            }               
        });

        res.status(200).json({
            message: "waw aya id na",
            data: student
        }) 
        res.send({
            message: "endpoint ieu jang detail data",
        })
}

self.save = async (req, res) => {
    
    let errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(422).json(errors);
    }
    
    res.send({
        message: "student save endpoint",
    })
}

self.update = async (req, res) => {
    res.send({
        message: "student index endpoint",
    })
}

self.destroy = async (req, res) => {
    res.send({
        message: "student index endpoint",
    })
}

