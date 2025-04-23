const express = require('express');
const router = express.Router();

const ProductMiddleware = require('../middlewares/middleware.product');
const ProductController = require('../controllers/controller.product');

const {
    processJoiValidation,
    productPaginatedSearchDateFilter,
    product,
    productId,
} = require('../utils/util.validator');


router.post('/',
    processJoiValidation(product, 'payload'),
    ProductMiddleware.checkIfProductNameIsUnique,
    ProductController.createProduct
);

router.get('/all',
    processJoiValidation(productPaginatedSearchDateFilter, 'query'),
    ProductController.getProducts,
);

router.get('/:product_id',
    processJoiValidation(productId, 'params'),
    ProductController.getProductDetails,
);

router.patch('/:product_id',
    processJoiValidation(product, 'payload'),
    processJoiValidation(productId, 'params'),
    ProductMiddleware.checkIfProductExists,
    ProductMiddleware.checkIfProductNameIsUnique,
    ProductController.updateProduct
);




module.exports = router;