const  {Schema, default: mongoose, mongo} = require('mongoose');

const newSchema = new Schema({
    message: {
        type: String,
        trim: true,
        required: true
    },
    contactId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    sederId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    containsFile: {
        type: Boolean,
        required: true
    },
    file: {
        type: String,
        required: true
    }
},{
    timeseries: true,
    timestamps: true
});

const Message = mongoose.model("Message", newSchema);

module.exports = Message;