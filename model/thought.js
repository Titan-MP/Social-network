const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema({
    thoughttext: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => new Date(createdAtVal).toLocaleDateString()
    },
    username: {
        type: String,
        require: true,
    },
    reactions: [reactionSchema],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// create the thought model using the UserSchema
const User = model('Thought', thoughtSchema);

module.exports = Thought;
