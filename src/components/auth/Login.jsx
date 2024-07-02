import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rol_no: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const { refresh, access, role, rol_no } = data;

        // Store tokens and user data in localStorage
        localStorage.setItem('refreshToken', refresh);
        localStorage.setItem('accessToken', access);
        localStorage.setItem('rol_no', rol_no); // Store rol_no

        // Store user data in state
        setUserData({ rol_no, role });
        console.log('User Data:', { rol_no, role });

        // Navigate based on user role
        if (role === 'admin') {
          navigate('/admin');
        } else if (role === 'user') {
          navigate('/student');
        } else {
          setError('Unknown role received from the server');
        }
      } else if (response.status === 401) {
        setError('Invalid rol_no or password');
      } else {
        setError('Failed to log in. Please try again later.');
      }
    } catch (error) {
      console.error('Error during signin:', error);
      setError('An unexpected error occurred');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <span className="mb-2 text-md">Role_no:</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                name="rol_no"
                id="rol_no"
                value={formData.rol_no}
                onChange={handleChange}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password:</span>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button className="w-full bg-blue-600 text-white p-2 rounded-lg mb-6">Sign in</button>
          </form>
          {error && <p className="mt-4 text-center text-red-500">{error}</p>}
          {userData && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Logged In User Details:</h3>
              <p>Role_no: {userData.rol_no}</p>
              <p>Role: {userData.role}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;