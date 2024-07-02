import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

function CreateStudent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rol_no: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      setError('You are not authorized. Please log in.');
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/student/add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setError(null);
        setFormData({
          rol_no: '',
        });
      } else if (response.status === 401) {
        setError('You are not authorized. Please log in.');
        navigate('/login');
      } else {
        setError('Failed to add student. Please try again later.');
      }
    } catch (error) {
      console.error('Error during adding student:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <>
      <div className="flex ml-4 min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Student
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="rol_no" className="block text-sm font-medium leading-6 text-gray-900">
                Roll Number
              </label>
              <div className="mt-2">
                <input
                  id="rol_no"
                  name="rol_no"
                  type="text"
                  value={formData.rol_no}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <LockClosedIcon className='h-5 w-5 text-purple-400 group-hover:text-indigo-400 aria-hidden:true' />
                </span>
                Create
              </button>
            </div>
          </form>
          {error && <p className="mt-4 text-center text-red-500">{error}</p>}
          {success && <p className="mt-4 text-center text-green-500">Student added successfully!</p>}
        </div>
      </div>
    </>
  );
}

export default CreateStudent;



//  "rol_no": "00002",
    // "password": "258440"
    // http://127.0.0.1:8000/signup/