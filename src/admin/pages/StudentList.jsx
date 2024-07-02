import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await fetch('http://127.0.0.1:8000/users/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setStudents(data);
        } else {
          setError('Failed to fetch students');
        }
      } catch (error) {
        console.error('Error fetching students:', error);
        setError('An unexpected error occurred');
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('accessToken');
    try {
      const response = await fetch(`http://127.0.0.1:8000/users/${id}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setStudents(students.filter(student => student.id !== id));
      } else {
        setError('Failed to delete student');
      }
    } catch (error) {
      console.error('Error deleting student:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="flex flex-col items-center px-4 py-12 lg:px-8">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Students</h1>
          <Link className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600" to="/admin/createstudent">
            Add Student
          </Link>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="overflow-x-auto">
          {students.length === 0 ? (
            <p className="text-center text-gray-500">No students available</p>
          ) : (
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-4 text-left text-gray-600">ID</th>
                  <th className="py-3 px-4 text-left text-gray-600">First Name</th>
                  <th className="py-3 px-4 text-left text-gray-600">Last Name</th>
                  <th className="py-3 px-4 text-left text-gray-600">Roll No</th>
                  <th className="py-3 px-4 text-left text-gray-600">Email</th>
                  <th className="py-3 px-4 text-left text-gray-600">Date Joined</th>
                  <th className="py-3 px-4 text-center text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id} className="border-b">
                    <td className="py-2 px-4 text-gray-800">{student.id}</td>
                    <td className="py-2 px-4 text-gray-800">{student.first_name}</td>
                    <td className="py-2 px-4 text-gray-800">{student.last_name}</td>
                    <td className="py-2 px-4 text-gray-800">{student.rol_no}</td>
                    <td className="py-2 px-4 text-gray-800">{student.email}</td>
                    <td className="py-2 px-4 text-gray-800">{new Date(student.date_joined).toLocaleDateString()}</td>
                    <td className="py-2 px-4 text-center">
                      <Link
                        to={`/admin/updateuser/${student.id}`}
                        className="text-blue-500 hover:text-blue-700 mx-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="text-red-500 hover:text-red-700 mx-2"
                      >
                        Delete
                      </button>
                      <Link
                        to={`/admin/students/${student.rol_no}/`}
                        className="text-green-500 hover:text-green-700 mx-2"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentList;