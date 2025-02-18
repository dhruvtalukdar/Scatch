import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-600">Welcome to Our Platform!</h1>
        <p className="text-gray-700 mb-6 text-lg">Experience seamless user management with our intuitive interface.</p>
        
        <div className="w-full flex justify-center mb-6">
          <img 
            src="https://source.unsplash.com/800x500/?technologyteam"  
            alt="Welcome Animation" 
            className="rounded-lg shadow-md w-full h-auto animate-fadeIn"
          />
        </div>

        <div className="flex justify-center space-x-4">
          <Link to="/create-user" className="bg-blue-500 text-white px-6 py-2 rounded text-lg shadow hover:bg-blue-600 transition">
            Create User
          </Link>
          <Link to="/sign-in" className="bg-gray-500 text-white px-6 py-2 rounded text-lg shadow hover:bg-gray-600 transition">
            Sign In
          </Link>
        </div>

                <p className=" text-lg py-5 leading-7 text-gray-800">Freelancer providing services for programming and design content needs.
                Join me down below and let's get cracking!
                </p>
                <p className="text-lg py-5 leading-7 text-gray-800" >
                    Freelancer providing services for programming and design content needs.
                    Join me down below and let's get cracking!
                </p>
                <p className="font-poppins text-lg py-5 leading-7 text-gray-800" >
                    Freelancer providing services for programming and design content needs.
                    Join me down below and let's get cracking!
                </p>
                <p className="font-inter text-lg py-5 leading-7 text-gray-800" >
                    Freelancer providing services for programming and design content needs.
                    Join me down below and let's get cracking!
                </p>
      </div>
    </div>
  );
};

export default HomePage;
