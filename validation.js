const Joi = require('joi');

const userValidation = (data) => {
    const schema = Joi.object().keys({
        username: Joi.string().required()
    });
    return schema.validate(data);
}


 const exerciseValidation = (data) => {
    const schema = Joi.object().keys({
        username: Joi.string().required(),
        description: Joi.string().required(),
        duration:Joi.number().required(),
        date: Joi.date().required()
    });
    return schema.validate(data);
}



module.exports.userValidation = userValidation;
module.exports.exerciseValidation = exerciseValidation;
