const express = require('express')
const router = express.Router()
const notes = require('../controllers/notes')

router.route('/')
    .get(notes.getAllNotes)
    .post(notes.createNote)

router.route('/:id')
    .get(notes.getSingleNote)
    .patch(notes.updateNote)
    .delete(notes.deleteNote)


module.exports = router