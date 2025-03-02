
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex justify-end mb-8">
          <button
            onClick={handleSignOut}
            className="px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Sign Out
          </button>
        </div>
        
        <div className="bg-card backdrop-blur-lg rounded-2xl shadow-lg p-12 animate-fadeIn">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We're excited to have you here. This is your personal space where you can manage your
            content and settings. Feel free to explore and make yourself at home.
          </p>
          
          <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Quick Start Guide</h3>
              <p className="text-gray-600">Learn the basics and get started with our platform.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your Profile</h3>
              <p className="text-gray-600">View and update your personal information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
