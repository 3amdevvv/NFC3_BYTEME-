import React, { useState } from 'react';

const VolunteerForm = () => {
  const [volunteer, setVolunteer] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
    skills: '',
    experience: '',
    motivation: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVolunteer(prevVolunteer => ({
      ...prevVolunteer,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer application submitted:', volunteer);
    // In a real application, you would send this data to a server
    alert('Thank you for your application!');
  };

  return (
    <div style={{
      backgroundColor: '#f3e5f5', // Light purple background
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '24px',
          color: '#4a148c', // Dark purple for title
          textAlign: 'center',
          marginBottom: '20px'
        }}>Volunteer Application</h1>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          {Object.keys(volunteer).map((key) => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label htmlFor={key} style={{ color: '#6a1b9a', fontWeight: 'bold' }}> {/* Purple for labels */}
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </label>
              {key === 'availability' || key === 'skills' || key === 'experience' || key === 'motivation' ? (
                <textarea
                  id={key}
                  name={key}
                  value={volunteer[key]}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #9c27b0', // Light purple border
                    minHeight: '80px'
                  }}
                />
              ) : (
                <input
                  type={key === 'email' ? 'email' : 'text'}
                  id={key}
                  name={key}
                  value={volunteer[key]}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #9c27b0' // Light purple border
                  }}
                />
              )}
            </div>
          ))}
          <button type="submit" style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4a148c', // Dark purple for button
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            alignSelf: 'flex-start',
            marginTop: '10px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#6a1b9a'} // Lighter purple on hover
          onMouseOut={(e) => e.target.style.backgroundColor = '#4a148c'} // Back to dark purple when not hovering
          >Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;