const db = require('../../sequelize/models');
const {v4: uuidv4} = require('uuid');
const Helpers = require("../utils/util.helpers");
const {Op} = require('sequelize');



const Product = db.products;


class ProductSchema {

    static async generateUniqueProductSku(name) {
        while (true) {
            const generatedUuid = uuidv4().replace(/-/g, '')
            const generatedSku = name + `-${ generatedUuid }`
            const existingProduct = await Product.findOne({where: {sku: generatedSku}});
            if (!existingProduct) {
                return generatedSku
            }
        }
    }


    static async findProductByName(name) {
        try {
            return await Product.findOne({
                where: { name },
            });
        } catch (error) {
            throw error;
        }
    }

    static async createProduct(payload) {
        try {
            const {name, price, image_url, description, currency,} = payload;
            const result = await Product.create({
                name: name.trim().toLowerCase(),
                price: parseFloat(price).toFixed(2),
                sku: await this.generateUniqueProductSku(name),
                image_url,
                description,
                currency,
            },);

            return result;
        } catch (error) {
            console.error('error creating product:', error);
            throw error;
        }
    }

    static async findProductById(product_id) {
        try {
            return await Product.findOne({
                where: { id: product_id },
            });
        } catch (error) {
            throw error;
        }
    }

    static async findAllProducts(query) {
        try {
            let searchPayload = {};

            if (query.search) {
                searchPayload[Op.or] = [{ name: { [Op.iLike]: `%${query.search}%` } }, { sku: { [Op.iLike]: `%${query.search}%` } }];
            }
            if (query.start_date && query.end_date) {
                searchPayload.created_at = { [Op.between]: [new Date(query.start_date), new Date(query.end_date)], };
            }
            if (!query.page) {
                const products = await Product.findAll({ where: { ...searchPayload }, order: [["created_at", "DESC"]], });
                return { page: 1, total_count: products.length, total_pages: 1, products: products, };
            }

            const page = (query.page - 1) * (query.per_page || 10);
            const perPage = query.per_page ? parseInt(query.per_page, 10) : 10;

            const products = await Product.findAndCountAll({ where: { ...searchPayload }, offset: page, limit: perPage, order: [["created_at", "DESC"]], });

            return { page: parseFloat(query.page) || 1, total_count: Number(products.count), total_pages: Helpers.calculatePages(Number(products.count), perPage), products: products.rows, };
        } catch (error) {
            throw error;
        }
    }

    static async updateProduct(payload, product_details) {
        try {
            Object.entries(payload).forEach(([key, value]) => {
                if (value !== undefined && value !== null && value !== '') {
                    product_details[key] = key === 'price' ? parseFloat(value).toFixed(2) : value;
                }
            });

            await product_details.save();
            return product_details;
        } catch (error) {
            console.error('error updating product:', error);
            throw error;
        }
    }





}



module.exports = ProductSchema;