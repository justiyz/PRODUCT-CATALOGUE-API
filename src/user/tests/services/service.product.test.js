
const ProductService = require('../../services/service.product');
const ProductSchema = require('../../schemas/schema.product');



// Mock the ProductSchema
jest.mock('../../schemas/schema.product');


//CREATE PRODUCT GOOD DAY TEST CASE
describe('Product Service - createProduct', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a product successfully', async () => {
    const mockPayload = {
      name: 'Test Product',
      price: 100,
      image_url: 'https://example.com/image.png',
      description: 'A test product',
      currency: 'NGN'
    };

    const mockProduct = { ...mockPayload, id: '123', sku: 'TP123', };

    // Mock the schema function
    ProductSchema.createProduct.mockResolvedValue(mockProduct);

    const result = await ProductService.createProduct(mockPayload);

    expect(ProductSchema.createProduct).toHaveBeenCalledWith(mockPayload);
    expect(result).toEqual(mockProduct);
  });

  it('should throw an error if schema fails', async () => {
    const mockPayload = { name: 'Failing Product', price: 50 };
    ProductSchema.createProduct.mockRejectedValue(new Error('DB error'));

    await expect(ProductService.createProduct(mockPayload)).rejects.toThrow('DB error');
  });


  //NEGATIVE TEST FOR CREATE PRODUCT
  describe('createProduct', () => {
    it('should throw an error if schema fails', async () => {
      const payload = {
        name: 'Bad Product',
        price: '0',
        currency: 'NGN'
      };
  
      const mockError = new Error('DB failure');
      ProductSchema.createProduct.mockRejectedValue(mockError);
  
      await expect(ProductService.createProduct(payload)).rejects.toThrow('DB failure');
    });
  });
  




  //FIND PRODUCT BY ID TEST CASE
  describe('getProductById', () => {
    it('should return product details for a valid product_id', async () => {
      const mockProduct = {
        id: 1,
        name: 'Test Product',
        price: '29.99',
        image_url: 'http://image.url',
        description: 'Test description',
        currency: 'NGN'
      };

      ProductSchema.findProductById.mockResolvedValue(mockProduct);

      const result = await ProductService.getProductById(1);
      expect(ProductSchema.findProductById).toHaveBeenCalledWith(1);
      expect(result).toEqual(mockProduct);
    });

    it('should return null if product does not exist', async () => {
      ProductSchema.findProductById.mockResolvedValue(null);

      const result = await ProductService.getProductById(999);
      expect(ProductSchema.findProductById).toHaveBeenCalledWith(999);
      expect(result).toBeNull();
    });
  });









});
