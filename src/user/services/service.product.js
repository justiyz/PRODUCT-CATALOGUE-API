const ProductSchema = require("../schemas/schema.product");





class ProductService {


    static async createProduct(payload) {
        try {
            return await ProductSchema.createProduct(payload);
        } catch (error) {
            throw error;
        }
    }

    static async getProductById(product_id) {
        try {
            return await ProductSchema.findProductById(product_id);
        } catch (error) {
            throw error;
        }
    }

    static async getAllProducts(product_id) {
        try {
            return await ProductSchema.findAllProducts(product_id);
        } catch (error) {
            throw error;
        }
    }

    static async findProductByName(name) {
        try {
            return await ProductSchema.findProductByName(name);
        } catch (error) {
            throw error;
        }
    }

    static async updateProduct(payload, product_details) {
        try {
            return await ProductSchema.updateProduct(payload, product_details);
        } catch (error) {
            throw error;
        }
    }

}



module.exports = ProductService;

