const { User } = require('../../models');
const { createUser,getAllUser,getUserById,deleteUser,updateUser, addFriend, deleteFriend} = require('../../controllers');
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

router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend)


module.exports = router;