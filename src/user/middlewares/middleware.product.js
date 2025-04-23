
const logger = require('../../logger/logger');
const enums = require('../lib/enums');
const { errorResponse} = require('../../user/helpers/response');


const ProductSchema = require('../schemas/schema.product');
const ProductService = require('../services/service.product');



class ProductMiddleware {

    static async checkIfProductNameIsUnique(req, res, next) {
        try {
            const {body: {name}} = req;
            const existingProduct = await ProductService.findProductByName(name.trim());
            
            if (existingProduct) {
                logger.info(`${enums.CURRENT_TIME_STAMP}, info::: intending product name is not unique. checkIfProductNameIsUnique.admin.middlewares.product.js`);
                return res.status(enums.HTTP_BAD_REQUEST).json(errorResponse('A product with that name exists already', enums.HTTP_BAD_REQUEST));
            }
            logger.info(`${enums.CURRENT_TIME_STAMP}, info:: successfully confirms the intending product name is unique checkIfProductNameIsUnique.admin.middlewares.auth.js`);
            return next();
        } catch (error) {
            logger.error(`${enums.CURRENT_TIME_STAMP}, error:checking if intending product name is unique  failed.`, error.message);
            return next(error);
        }
    };

    static async checkIfProductExists(req, res, next) {
        try {
            const {body: {name}} = req;
            const product_id = req.params.product_id;
            const existingProduct = await ProductService.getProductById(product_id);
            
            if (!existingProduct) {
                logger.info(`${enums.CURRENT_TIME_STAMP}, info::: product details not found. checkIfProductExists.admin.middlewares.product.js`);
                return res.status(enums.HTTP_NOT_FOUND).json(errorResponse('Product does not exist', enums.HTTP_NOT_FOUND));
            }
            logger.info(`${enums.CURRENT_TIME_STAMP}, info:: successfully confirms the product exists  checkIfProductExists.admin.middlewares.auth.js`);
            req.productDetails = existingProduct;
            return next();
        } catch (error) {
            logger.error(`${enums.CURRENT_TIME_STAMP}, error:checking if product exists failed.`, error.message);
            return next(error);
        }
    };



}

module.exports = ProductMiddleware;