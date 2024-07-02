import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ViewPage } from "./components/common/ViewPage"
import { Home } from "./pages/Home"
import { BlogSinglePage } from "./components/common/BlogSinglePage"
import { About } from "./pages/About"
import { Courses } from "./pages/Courses"
import { Blog } from "./pages/Blog"
import { Instructor } from "./pages/Instructor"
import Layout from './admin/Layout'
import Student_Layout from './student/Student_Layout'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import StudentList from "./admin/pages/StudentList"
import CourseList from "./admin/pages/CourseList"
import CreateCourse from "./admin/pages/CreateCourse"
import CreateStudent from "./admin/pages/CreateStudent"
import ViewDetails from "./admin/pages/ViewDetails"
import StudentRegister from "./admin/pages/StudentRegister"
import StudentCourseList from "./student/pages/StudentCourseList"
import StudentDashboard from "./student/pages/StudentDashboard"
// import Register from './components/auth/Register'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ViewPage>
                <Home />
              </ViewPage>
            }
          />
          <Route
            path='/about'
            element={
              <ViewPage>
                <About />
              </ViewPage>
            }
          />
          <Route
            path='/courses'
            element={
              <ViewPage>
                <Courses />
              </ViewPage>
            }
          />
          <Route
            path='/instructor'
            element={
              <ViewPage>
                <Instructor />
              </ViewPage>
            }
          />
          <Route
            path='/blog'
            element={
              <ViewPage>
                <Blog />
              </ViewPage>
            }
          />
          <Route
            path='/single-blog'
            element={
              <ViewPage>
                <BlogSinglePage />
              </ViewPage>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />


          <Route path="/admin" element={<Layout />} >
          <Route path="/admin/studentlist" element={<StudentList />} />
          <Route path="/admin/courselist" element={<CourseList />} />
          <Route path="/admin/createcourse" element={<CreateCourse />} />
          <Route path="/admin/createstudent" element={<CreateStudent />} />
          <Route path="/admin/students/:rol_no/" element={<ViewDetails />} />
          <Route path="/admin/studentregister" element={<StudentRegister />} />

          </Route>
          <Route path="/student" element={<Student_Layout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="/student/courselist" element={<StudentCourseList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
