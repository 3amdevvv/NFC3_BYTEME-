import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import ChatList from '../../components/ChatList/ChatList';
import { Users, PawPrint, MessageCircle, UserCog } from 'lucide-react';

function HeaderNGO() {
  const [isNGOWorker, setIsNGOWorker] = useState(false);
  const [isNGOAdmin, setIsNGOAdmin] = useState(false);
  const [showChatList, setShowChatList] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const user = decodedToken.user;
      if (user && (user.email.endsWith('@ngo.com') || user.role === 'ngo_worker')) {
        setIsNGOWorker(true);
      } else if (user && (user.email.endsWith('@ngoAdmin.com') || user.role === 'ngo_admin')) {
        setIsNGOAdmin(true);
      }
    }
  }, []);

  const toggleChatList = () => {
    setShowChatList(!showChatList);
  };

  const DashboardCard = ({ title, description, icon: Icon, linkTo }) => (
    <Link to={linkTo} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center">
      <Icon className="w-12 h-12 text-teal-500 mb-4" />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
      <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition-colors">
        View
      </button>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-8">
          Welcome, {isNGOWorker ? 'NGO Worker!' : 'Admin!'}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DashboardCard
            title="Adoption Requests"
            description="Review and manage adoption applications"
            icon={Users}
            linkTo="/adoption-requests"
          />
          <DashboardCard
            title="Volunteer Requests"
            description="Manage volunteer applications and schedules"
            icon={Users}
            linkTo="/volunteer-requests"
          />
          {isNGOWorker ? (
            <DashboardCard
              title="Manage Pets"
              description="Add, update, or remove pets from the database"
              icon={PawPrint}
              linkTo="/manage-pets"
            />
          ) : (
            <DashboardCard
              title="Manage Workers"
              description="Keep an eye on activity of workers"
              icon={UserCog}
              linkTo="/manage-workers"
            />
          )}
          {isNGOWorker && (
            <button
              onClick={toggleChatList}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center"
            >
              <MessageCircle className="w-12 h-12 text-teal-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Messages</h2>
              <p className="text-gray-600 text-center">Open chat list</p>
            </button>
          )}
        </div>
      </div>
      {showChatList && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-lg p-4 overflow-y-auto">
          <button
            onClick={toggleChatList}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ChatList />
        </div>
      )}
    </div>
  );
}

export default HeaderNGO;