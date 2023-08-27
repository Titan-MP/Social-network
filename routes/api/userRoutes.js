const { User } = require('../../models');
const { createUser,getAllUser,getUserById,deleteUser,updateUser} = require('../../controllers');
const router = require('express').Router();

router
.route("/")
.post(createUser)
.get(getAllUser)


router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)


module.exports = router;