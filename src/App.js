// App.jsx
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">We'll Be Back Soon!</h1>
        <p className="text-gray-700 mb-8">
          Our website is currently undergoing scheduled maintenance. We apologize for any inconvenience and appreciate your patience.
        </p>
        <img
          src="img/maintenance-1.jpg"
          alt="Maintenance"
          className="mx-auto mb-6 h-1/2 w-auto"
        />
        <p className="text-gray-600">
          Please check back later or contact us if you need immediate assistance.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default App;
