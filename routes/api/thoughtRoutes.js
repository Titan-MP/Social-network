const { Thought } = require('../../models');
const { createThought,getAllThoughts,getThoughtById,deleteThought,updateThought,createReaction,deleteReaction} = require('../../controllers');
const router = require('express').Router();

router
.route("/")
.post(createThought)
.get(getAllThoughts)


router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

router
.route('/:thoughtId/reactions')
.post(createReaction)
.delete(deleteReaction)


module.exports = router;