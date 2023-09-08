const { Thought } = require('../../models');
const { createThought,getAllThoughts,getThoughtById,deleteThought,updateThought} = require('../../controllers');
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


module.exports = router;