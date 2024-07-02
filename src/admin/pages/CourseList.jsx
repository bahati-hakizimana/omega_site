import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await fetch('http://127.0.0.1:8000/course/courses/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        } else {
          setError('Failed to fetch courses');
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('An unexpected error occurred');
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('accessToken');
    try {
      const response = await fetch(`http://127.0.0.1:8000/course/courses/${id}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setCourses(courses.filter(course => course.id !== id));
      } else {
        setError('Failed to delete course');
      }
    } catch (error) {
      console.error('Error deleting course:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="flex flex-col items-center px-4 py-12 lg:px-8">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Courses</h1>
          <Link className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600" to="/admin/createcourse">
            Add Course
          </Link>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="overflow-x-auto">
          {courses.length === 0 ? (
            <p className="text-center text-gray-500">No courses available</p>
          ) : (
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-4 text-left text-gray-600">ID</th>
                  <th className="py-3 px-4 text-left text-gray-600">Course Name</th>
                  <th className="py-3 px-4 text-left text-gray-600">Course Code</th>
                  <th className="py-3 px-4 text-left text-gray-600">Level</th>
                  <th className="py-3 px-4 text-left text-gray-600">Total Marks</th>
                  <th className="py-3 px-4 text-left text-gray-600">Created Date</th>
                  <th className="py-3 px-4 text-center text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course.id} className="border-b">
                    <td className="py-2 px-4 text-gray-800">{course.id}</td>
                    <td className="py-2 px-4 text-gray-800">{course.course_name}</td>
                    <td className="py-2 px-4 text-gray-800">{course.course_code}</td>
                    <td className="py-2 px-4 text-gray-800">{course.level}</td>
                    <td className="py-2 px-4 text-gray-800">{course.total_marks}</td>
                    <td className="py-2 px-4 text-gray-800">{new Date(course.created_date).toLocaleDateString()}</td>
                    <td className="py-2 px-4 text-center">
                      <Link
                        to={`/admin/updatecourse/${course.id}`}
                        className="text-blue-500 hover:text-blue-700 mx-2"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(course.id)}
                        className="text-red-500 hover:text-red-700 mx-2"
                      >
                        Delete
                      </button>
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

export default CourseList;
