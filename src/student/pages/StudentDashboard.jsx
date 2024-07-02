import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [rolNo, setRolNo] = useState(''); // State for rol_no
  const [userName, setUserName] = useState(''); // State for user name
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentData = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const rol_no = localStorage.getItem('rol_no'); // Get rol_no from localStorage

      if (!accessToken || !rol_no) {
        setError('You are not authorized. Please log in.');
        return;
      }

      setRolNo(rol_no); // Set rol_no state

      try {
        const response = await fetch(`http://127.0.0.1:8000/student/find_by_rol_no/${rol_no}/`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCourses(data.registrations || []);
          setUserName(data.name); // Assuming the API response includes the user's name
        } else if (response.status === 401) {
          setError('Unauthorized. Please log in again.');
          localStorage.removeItem('accessToken');
          localStorage.removeItem('rol_no');
          navigate('/login');
        } else {
          setError('Failed to fetch student data. Please try again later.');
        }
      } catch (error) {
        console.error('Error fetching student data:', error);
        setError('An unexpected error occurred.');
      }
    };

    fetchStudentData();
  }, [navigate]);

  return (
    <div className="p-6 flex flex-col items-center">
      {userName ? (
        <h1 className="text-3xl font-bold mb-4">Welcome, {userName}</h1>
      ) : (
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      )}
      {rolNo && (
        <div className="bg-gray-100 p-4 border border-gray-300 rounded-lg mb-6 w-full max-w-4xl text-center">
          <p className="text-lg font-medium">Role Number: {rolNo}</p>
        </div>
      )}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {courses.map((registration) => (
            <div key={registration.id} className="bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <h2 className="text-xl font-semibold mb-2">{registration.course.course_name}</h2>
              <p className="text-gray-700 mb-1">Course Code: {registration.course.course_code}</p>
              <p className="text-gray-700 mb-1">Total Marks: {registration.course.total_marks}</p>
              <p className="text-gray-700 mb-1">Marks Obtained: {registration.marks}</p>
              <p className="text-gray-500">Registration Date: {new Date(registration.created_date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No courses found.</p>
      )}
    </div>
  );
}

export default StudentDashboard;
