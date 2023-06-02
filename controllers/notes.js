const Note = require('../models/note')
const { generateError } = require('../errors/generateError')

const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({})
        res.status(200).json(notes)
    } catch(err) {
        console.log(err.message)
    }
}

const createNote = async (req, res, next) => {
    try {
        const note = await Note.create(req.body)
        if(!note) {
            return next(generateError(404, 'create failed'))
        }
        res.status(201).json(note)
    } catch(err) {
        console.log(err.message)
    }
}

const getSingleNote = async (req, res, next) => {
    try {
        const note = await Note.findById({_id: req.params.id}).exec()
        if(!note) {
            return next(generateError(404, 'no such id'))
        }
        res.status(200).json(note)
    } catch(err) {
        console.log(err.message)
    }
}

const updateNote = async (req, res, next) => {
    try {
        const note = await Note.findByIdAndUpdate({_id: req.params.id}, req.body)
        if(!note) {
            return next(generateError(404, 'update failed'))
        }
        res.status(200).json(note)
    } catch(err) {
        console.log(err.message)
    }
}

const deleteNote = async (req, res, next) => {
    try {
        const note = await Note.findByIdAndDelete({_id: req.params.id})
        if(!note) {
            return next(generateError(404, 'no such id'))
        }
        res.status(200).json(note)
    } catch(err) {
        console.log(err.message)
    }
}

module.exports = {
    getAllNotes,
    createNote,
    getSingleNote,
    updateNote,
    deleteNote
}