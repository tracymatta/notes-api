const { CustomError } = require('../errors/generateError')

const errorHandler = (err, req, res, next) => {
    if(err instanceof CustomError) {
        res.status(err.status).json(err.message)
    } else {
        res.status(500).json({msg :'Something went wrong, try again'})
    }
}

module.exports = errorHandler