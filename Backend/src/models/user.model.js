const {Schema, default: mongoose} = require('mongoose')


const newSchema = new Schema({
    userName: {
        type: String,
        required: true,
        index: true
    },
    searchTag: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    socketId: {
    type: String,
    required: true,
    default: "0000"
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "defaultA"
    },
    theme: {
        type: Boolean,
        default: true
    },
    showOnline: {
        type: Boolean,
        default: true
    }
},{
    timeseries: true,
    timestamps: true
});


const User = mongoose.model('User', newSchema);

module.exports = User;