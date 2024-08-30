import React from 'react';
import { motion } from 'framer-motion';
import "./Events.css";
import happy1 from '../../assets/happy1.jpg';
import happy2 from '../../assets/happy2.jpg';
import happy3 from '../../assets/happy3.png';

const EventCard = ({ title, date, description, image }) => (
  <motion.div 
    className="event-card bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-purple-300 mb-2">{title}</h3>
      <p className="text-white mb-4">{date}</p>
      <p className="text-purple-200">{description}</p>
    </div>
  </motion.div>
);

const CampaignCard = ({ title, goal, current, description }) => (
  <motion.div 
    className="campaign-card bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg p-6"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-2xl font-bold text-purple-300 mb-2">{title}</h3>
    <div className="mb-4">
      <div className="bg-purple-900 rounded-full h-4 w-full">
        <div 
          className="bg-purple-400 h-4 rounded-full" 
          style={{ width: `${(current / goal) * 100}%` }}
        ></div>
      </div>
      <p className="text-white mt-2">${current} raised of ${goal} goal</p>
    </div>
    <p className="text-purple-200">{description}</p>
  </motion.div>
);

function Events() {
  const events = [
    { title: "Pet Adoption Day", date: "June 15, 2024", description: "Find your perfect furry companion at our biggest adoption event of the year!", image: happy1 },
    { title: "Fundraising Gala", date: "July 22, 2024", description: "Join us for an elegant evening to support animal welfare initiatives.", image: happy2 },
    { title: "Volunteer Training", date: "August 5, 2024", description: "Learn how you can make a difference in the lives of shelter animals.", image: happy3 },
  ];

  const campaigns = [
    { title: "New Shelter Building", goal: 100000, current: 75000, description: "Help us build a state-of-the-art shelter to house more animals in need." },
    { title: "Medical Fund", goal: 50000, current: 30000, description: "Support our efforts to provide quality medical care to injured and sick animals." },
    { title: "Spay/Neuter Program", goal: 25000, current: 15000, description: "Contribute to our initiative to control the pet population humanely." },
  ];

  return (
    <div className='events-campaigns bg-gradient-to-br from-purple-700 to-indigo-900 min-h-screen py-16 px-4'>
      <div className='container mx-auto'>
        <h1 className="font-['Moo_Lah_Lah'] text-center text-7xl text-white mb-12">Events & Campaigns</h1>
        
        <section className="mb-16">
          <h2 className="font-['Moo_Lah_Lah'] text-4xl text-purple-300 mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-['Moo_Lah_Lah'] text-4xl text-purple-300 mb-8">Ongoing Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <CampaignCard key={index} {...campaign} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Events;
