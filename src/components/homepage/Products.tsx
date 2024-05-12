const Products = () => {
  return (
    <div className="bg-gray-700 py-12 px-4 sm:px-6 lg:px-8" id="products">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-100 mb-4">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover object-center" src="https://via.placeholder.com/500" alt="Product 1" />
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800">Product 1</h2>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/product1" className="block mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">View Product</a>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover object-center" src="https://via.placeholder.com/500" alt="Product 2" />
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800">Product 2</h2>
              <p className="mt-2 text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="/product2" className="block mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">View Product</a>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover object-center" src="https://via.placeholder.com/500" alt="Product 3" />
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800">Product 3</h2>
              <p className="mt-2 text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="/product3" className="block mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">View Product</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
