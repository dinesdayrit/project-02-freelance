const Contact = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700">Email</h2>
            <p className="text-gray-600">contact@example.com</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700">Phone</h2>
            <p className="text-gray-600">+1234567890</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700">Social Media</h2>
           
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Contact;
