const express = require('express');
const router = express.Router()

const {
    getUserValidator    
} = require('@applications/users/validator');

const {
    getUserController,
    getUsersController

} = require('@applications/users/controller');





router.get('/:id',
    getUserValidator,
    getUserController
)

router.get('/',
    getUsersController
)
module.exports = router



