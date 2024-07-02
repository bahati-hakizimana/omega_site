import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewDetails() {
  const { rol_no } = useParams(); // Use rol_no from URL params
  const [student, setStudent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          setError('No authorization token found');
          return;
        }

        const response = await fetch(`http://127.0.0.1:8000/student/find_by_rol_no/${rol_no}/`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            setError('Unauthorized: Please check your token');
          } else if (response.status === 404) {
            setError('Student not found');
          } else {
            setError(`Failed to fetch student details. Status: ${response.status}`);
          }
          return;
        }

        const data = await response.json();
        setStudent(data);
      } catch (error) {
        console.error('Error fetching student details:', error);
        setError('An unexpected error occurred');
      }
    };

    fetchStudent();
  }, [rol_no]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!student) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center px-4 py-12 lg:px-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">Student Details</h1>
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
          <div className="mb-4">
            <p><strong>ID:</strong> {student.id}</p>
            <p><strong>Roll No:</strong> {student.rol_no}</p>
          </div>
          <h2 className="text-xl font-bold mt-4 mb-2">Registrations</h2>
          <div className="grid grid-cols-1 gap-4">
            {student.registrations.map((registration) => (
              <div key={registration.id} className="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
                <p><strong>Course Name:</strong> {registration.course.course_name}</p>
                <p><strong>Course Code:</strong> {registration.course.course_code}</p>
                <p><strong>Total Marks:</strong> {registration.course.total_marks}</p>
                <p><strong>Marks Obtained:</strong> {registration.marks}</p>
                <p><strong>Registration Date:</strong> {new Date(registration.created_date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
