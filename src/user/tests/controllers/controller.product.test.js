const request = require('supertest');
// const app = require('../../../../server'); // Adjust path to your Express app
const { app } = require('../../../app');
const ProductService = require('../../services/service.product');




// Mock service layer
jest.mock('../../services/service.product'); 



describe('Product Controller', () => {
    describe('GET /products/:product_id', () => {
    it('should return product details successfully', async () => {
      const product_id = 1;
      const mockProduct = {
        id: product_id,
        name: 'Product A',
        price: '100.00',
        image_url: '',
        description: '',
        currency: 'NGN',
      };

      ProductService.getProductById.mockResolvedValue(mockProduct);

      const response = await request(app).get(`/products/${product_id}`);
      expect(response.statusCode).toBe(200);
      expect(response.body.data.product).toEqual(mockProduct);
    });

    it('should return 400 if product does not exist', async () => {
      const product_id = 999;
      ProductService.getProductById.mockResolvedValue(null);

      const response = await request(app).get(`/products/${product_id}`);
      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe('Product does not exist');
    });
  });


  describe('POST /products', () => {
    it('should create a product successfully', async () => {
      const payload = {
        name: 'Test Product',
        price: '1500',
        image_url: 'https://example.com/image.jpg',
        description: 'A test product',
        currency: 'NGN',
      };
  
      const mockCreatedProduct = {
        id: 1,
        ...payload,
        price: '1500.00',
        sku: 'sku-abc123',
      };
  
      ProductService.createProduct.mockResolvedValue(mockCreatedProduct);
  
      const response = await request(app).post('/products').send(payload);
  
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe('Product created successfully');
      expect(response.body.data.product).toEqual(mockCreatedProduct);
    });
  
    it('should return error if product creation fails', async () => {
      const payload = {
        name: 'Bad Product',
        price: '1500',
        image_url: '',
        description: '',
        currency: 'NGN',
      };
  
      ProductService.createProduct.mockRejectedValue(new Error('Database error'));
  
      const response = await request(app).post('/products').send(payload);
  
      expect(response.statusCode).toBe(422);
      expect(response.body.message).toBe('image_url is not allowed to be empty');
    });
  });
  





});
