import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Protected() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('Access denied. Please login.');
      return navigate('/');
    }

    axios.get('http://localhost:5000/api/protected', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setMessage(res.data.message))
    .catch(err => {
      alert('Unauthorized. Please login again.');
      localStorage.removeItem('token');
      navigate('/');
    });
  }, [navigate]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Protected Page</h2>
      <p>{message || 'Loading...'}</p>
    </div>
  );
}

export default Protected;

