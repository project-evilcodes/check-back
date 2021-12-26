const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validatePastInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.title = !isEmpty(data.title) ? data.title : "";
    data.body = !isEmpty(data.body) ? data.body : "";

    // Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    // Title checks
    if (Validator.isEmpty(data.title)) {
        errors.title = "Title field is required";
    }

    // Body checks
    if (Validator.isEmpty(data.body)) {
        errors.body = "Body field is required";
    } else if (!Validator.isLength(data.body, {max: 1300})) {
        errors.body = "Body must be less than 1300 characters";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
