const Joi = require('joi').extend(require('@joi/date'));
const {errorResponse} = require('../../user/helpers/response');
const enums = require('../lib/enums');

module.exports = {
  processJoiValidation: (schema, type) => async (req, res, next) => {
    const getType = {
      payload: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
      file: req.files
    };
    const options = {language: {key: '{{key}} '}};
    const data = getType[type];
    const isValid = await schema.validate(data, options);
    if (!isValid.error) {
      return next();
    }
    const {message} = isValid.error.details[0];
    return res.status(enums.HTTP_UNPROCESSABLE_ENTITY).json(errorResponse((message.replace(/["]/gi, '')), enums.HTTP_UNPROCESSABLE_ENTITY));
  },


  product: Joi.object().keys({
    name: Joi.string().regex(new RegExp('^[a-zA-Z0-9 .-]+$')).messages({
      'string.pattern.base': 'Invalid product name input'
    }).required(),
    price: Joi.number().positive().precision(2).optional(), // allows up to 2 decimal places
    image_url: Joi.string().optional(),
    description: Joi.string().optional(),
    currency: Joi.string().optional().valid('NGN', 'USD', 'GBP'),
  }),

  productId: Joi.object({
    product_id: Joi.string().required(),
  }),

  productPaginatedSearchDateFilter: Joi.object().keys({
    page: Joi.number().positive().optional(),
    per_page: Joi.number().positive().optional(),
    search: Joi.string().optional(),
    start_date: Joi.date().optional(),
    end_date: Joi.date().optional(),
  }),

  
  



  


  




}

