const { Schema, default: mongoose } = require('mongoose');


const newSchema = new Schema({
    contacts: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true
    },
    isGroup: {
        type: Boolean,
        required: true,
        default: false
    },
    approachedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    blocked: {
        type: mongoose.Schema.Types.ObjectId
    },
    blockedBy: {
        type: mongoose.Schema.Types.ObjectId,
    },
    isEncrypted: {
        type: Boolean,
        default: false
    },
    EncryptedBy: {
        type: [mongoose.Schema.Types.ObjectId]
    },
    whoCanSendMessages : {
        type: String,
        enum: ["ALL, ONLY_ADMINS"],
        default: "ALL"
    },
    isSearchable: {
        type: Boolean,
        default: false
    }
}, {
    timeseries: true,
    timestamps: true
});


const Contact = mongoose.model("Contact", newSchema);

module.exports = Contact;