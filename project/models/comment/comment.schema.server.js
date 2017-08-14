var mongoose=require('mongoose');

var commentSchema = mongoose.Schema({
    comment: String,
    created: {type: Date | Date.now},
    createdBy:{type: mongoose.Schema.Types.ObjectId, ref: 'PxUserModel'},
    isEdited: Boolean,
    edited:{type: Date | Date.now}
});

module.exports=commentSchema;
