const { createUser,getAllUser,getUserById,deleteUser,updateUser} = require('./userControllers');
const { createThought,getAllThoughts,getThoughtById,deleteThought,updateThought} = require('./thoughtControllers');

module.exports = { createUser,getAllUser,getUserById,deleteUser,updateUser,createThought,getAllThoughts,getThoughtById,deleteThought,updateThought};