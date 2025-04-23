

const ProductCatalogueException = require('../../user/helpers/product.catalogue.exception');
const ProductService = require('../services/service.product');
const {successResponse, errorResponse} = require('../../user/helpers/response');
const enums = require('../lib/enums');
const logger = require('../../logger/logger');



class ProductController {


    static async createProduct(req, res, next) {

        try {
            const { body: payload } = req;

            const createdProduct = await ProductService.createProduct(payload);
            logger.info(`${enums.CURRENT_TIME_STAMP}::::info: successfully created a product createProduct.user.controllers.product.js`);

            const data = { product: createdProduct, };
            return res.status(enums.HTTP_OK).json(successResponse('Product created successfully', data));

        } catch (error) {
            const errorMessage = new ProductCatalogueException('Product creation failed');
            logger.error(`${enums.CURRENT_TIME_STAMP}::::error: customer profile creation failed ===> ${error.message} createCustomer.user.controllers.product.js`);
            return next(errorMessage);
        }
    }

    static async getProducts(req, res, next) {
        try {
          const { query } = req;
          const { page, total_count, total_pages, products } = await ProductService.getAllProducts(query);
          logger.info(`${enums.CURRENT_TIME_STAMP}, info: successfully fetched products and count from the DB getProducts.user.controllers.product.js`);
    
          const data = { page, total_count, total_pages, products: products };
          return res.status(enums.HTTP_OK).json(successResponse(`successfully fetched customer businesses.`, data));
        } catch (error) {
          logger.error(` trying to fetched businesses failed:::getBusinesses.user.controllers.product.js`, error.message);
          next(error);
        }
      }
  
    static async getProductDetails(req, res, next) {
      try {
        const { params: { product_id }, } = req;
    
        const product_details = await ProductService.getProductById(product_id);
        if(!product_details){
            logger.info(`${enums.CURRENT_TIME_STAMP}, info: product does exist in the DB getProductDetails.user.controllers.customer.js`);
            return res.status(enums.HTTP_BAD_REQUEST).json(errorResponse('Product does not exist', enums.HTTP_BAD_REQUEST));
        }
        logger.info(`${enums.CURRENT_TIME_STAMP},info: successfully fetched product details from the DB getProductDetails.user.controllers.customer.js`);

        const data = { product: product_details  };
        return res.status(enums.HTTP_OK).json(successResponse(`successfully fetched product details.`, data));
      } catch (error) {
        logger.error(`${enums.CURRENT_TIME_STAMP}, trying to fetch product details failed:::getProductDetails.user.controllers.customer.js`, error.message);
        next(error);
      }
    }

    static async updateProduct(req, res, next) {
        try {
            const { body: payload, productDetails } = req;

            const createdProduct = await ProductService.updateProduct(payload, productDetails);
            logger.info(`${enums.CURRENT_TIME_STAMP}::::info: successfully created a product createProduct.user.controllers.product.js`);

            const data = { product: createdProduct, };
            return res.status(enums.HTTP_OK).json(successResponse('Product created successfully', data));

        } catch (error) {
            const errorMessage = new ProductCatalogueException('Product creation failed');
            logger.error(`${enums.CURRENT_TIME_STAMP}::::error: customer profile creation failed ===> ${error.message} createCustomer.user.controllers.product.js`);
            return next(errorMessage);
        }
    }

    

}



module.exports = ProductController;