import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw2ZsedW0XdKpGT4Su48P1iZL42uqSh0bLGSS7FLP_nzhD91ydCbSN68D6w-yaX6oZcXA/exec';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      setLoading(true);
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
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-sm mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-2">
            <h2 className="text-lg font-medium text-gray-700">Email</h2>
            <p className="text-gray-600">consult@spancept.com</p>
          </div>
          <div className="mb-2">
            <h2 className="text-lg font-medium text-gray-700">Phone</h2>
            <p className="text-gray-600">+1 587-331-9288</p>
          </div>
          <div className="mb-2">
            <h2 className="text-lg font-medium text-gray-700">Location</h2>
            <p className="text-gray-600">Calgary, AB, Canada, Alberta</p>
          </div>
          <div className="mb-2">
            <h2 className="text-lg font-medium text-gray-700">Social Media</h2>
            <div className="flex space-x-2">
              <a href="https://www.facebook.com/spancept" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
          <div>
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
                className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${loading ? 'cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="h-6 w-6 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 dark:border-gray-600 dark:border-t-gray-400" />
                  </div>
                ) : (
                  'Subscribe'
                )}
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
