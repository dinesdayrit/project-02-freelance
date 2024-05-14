import React, { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string>('');

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw2ZsedW0XdKpGT4Su48P1iZL42uqSh0bLGSS7FLP_nzhD91ydCbSN68D6w-yaX6oZcXA/exec';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      fetch(scriptURL, {
        method: 'POST',
        body: new FormData(formRef.current),
      })
        .then((response) => {
          console.log('Success!', response);
          setMessage('Thank you for subscribing!');
          formRef.current?.reset();
        })
        .catch((error) => {
          console.error('Error!', error.message);
          setMessage('Something went wrong. Please try again.');
        });
    }
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-sm mx-auto">
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
            {/* Add social media links here */}
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-700">Subscribe to our Newsletter</h2>
            <form ref={formRef} name="submit-to-google-sheet" onSubmit={handleSubmit} className="mt-4">
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
              {message && <p className="mt-4 text-green-500">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
