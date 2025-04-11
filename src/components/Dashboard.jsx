import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const welcomeImage = "https://img.freepik.com/free-vector/team-success-concept-illustration_114360-1483.jpg?w=740&t=st=1709033025~exp=1709033625~hmac=7a7ee0665d2d14d2e8391cbf50972c7d7fdbaf1674899f37e67f6dc022f3b64c";

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success('👋 Logged out successfully!');
      navigate('/');
    } catch (error) {
      toast.error('Error logging out');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50" style={{ fontFamily: '"Poppins", sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-green-500 to-green-600">
            <div className="text-white mb-6 md:mb-0">
              <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                Welcome, {user?.displayName || user?.email}! 👋
              </h1>
              <p className="text-green-100 text-lg">We're glad to have you here</p>
            </div>
            <button
              onClick={handleSignOut}
              className="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 shadow-md"
            >
              Sign Out
            </button>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <img src={welcomeImage} alt="Welcome" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                  Your Account Details
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span> {user?.email}
                  </p>
                  {user?.displayName && (
                    <p className="text-gray-600">
                      <span className="font-medium">Name:</span> {user.displayName}
                    </p>
                  )}
                  <p className="text-gray-600">
                    <span className="font-medium">Account Created:</span>{' '}
                    {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
