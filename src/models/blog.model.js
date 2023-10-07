const mongoose = require('mongoose')
const { MODELS } = require('../utils/constants')
const { COLLECTION_NAME, DOCUMENT_NAME } = MODELS

var userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxLength: 150,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            minLength: 150,
        },
        content: {
            type: String,
            required: true,
            minLength: 150,
        },
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'inactive',
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        collections: COLLECTION_NAME,
    }
)

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, userSchema)
