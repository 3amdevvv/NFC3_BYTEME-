import React from 'react';
import { useLocation } from 'react-router-dom';

const QRCodePaymentPage = () => {
  const location = useLocation();
  const { amount } = location.state || {};

  // In a real application, you would generate a unique QR code based on the amount
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=UPI://PAY?pa=yourUPIid@bank&pn=YourName&am=${amount || ''}`;

  return (
    <div style={{
      backgroundColor: 'var(--color-light-green)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Nunito, sans-serif'
    }}>
      <h1 style={{
        fontSize: '2rem',
        color: 'var(--color-dark-green)',
        marginBottom: '20px'
      }}>Scan QR Code to Donate</h1>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <img src={qrCodeUrl} alt="Payment QR Code" style={{ marginBottom: '20px' }} />
        <p style={{ color: 'var(--color-dark-green)', marginBottom: '10px' }}>
          Amount: ₹{amount || 'Custom'}
        </p>
        <p style={{ color: 'var(--color-dark-green)', fontSize: '0.9rem' }}>
          Scan this QR code with your UPI app to make the donation
        </p>
      </div>
    </div>
  );
};

export default QRCodePaymentPage;