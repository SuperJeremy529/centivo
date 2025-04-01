
const { body, query, param, validationResult } = require('express-validator');

const getUserValidator = [
    param('id')
        .notEmpty().withMessage('field could not be empty')
        .isMongoId().withMessage('object id is not valid'),
    (request, response, next) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).send({ success: false, errors: errors.array() });
        }
        next();
    },
    ];

module.exports = {
    getUserValidator
}