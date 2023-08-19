import Header from './Header';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import CourseDetail from './CourseDetail';
import TeacherDetail from './TeacherDetail';
import {Routes as Switch, Route} from 'react-router-dom';

//User
import Login from './user/login';
import Register from './user/register';
import Dashboard from './user/Dashboard';
import MyCourses from './user/MyCourses';
import FavoriteCourses from './user/FavoriteCourses';
import RecommendedCourses from './user/RecommendedCourses';
import ProfileSets from './user/ProfileSetting';
import ChangePass from './user/ChangePass';

//Teacher
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from './Teacher/TeacherDashboard';
import TeacherMyCourses from './Teacher/TeacherMyCourses';
import AddCourse from './Teacher/AddCourse';
import MyUsers from './Teacher/MyUsers';
import TeacherProfileSets from './Teacher/TeacherProfileSets';
import TeacherChangePass from './Teacher/TeacherChangePass';

//List Pages
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularTeacher from './PopularTeacher';
import CategoryCourses from './CategoryCourses';

function Main(){
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='/detail/:course_id' element={<CourseDetail />}/>
        <Route path='/user-login' element={<Login />}/>
        <Route path='/user-register' element={<Register />}/>
        <Route path='/teacher-login' element={<TeacherLogin />}/>
        <Route path='/teacher-register' element={<TeacherRegister />}/>
        <Route path='/user-dashboard' element={<Dashboard />}/>
        <Route path='/teacher-dashboard' element={<TeacherDashboard />}/>
        <Route path='/enrolled-courses' element={<MyCourses />}/>
        <Route path='/teacher-my-courses' element={<TeacherMyCourses />}/>
        <Route path='/favorite-courses' element={<FavoriteCourses />}/>
        <Route path='/recommended-courses' element={<RecommendedCourses />}/>
        <Route path='/profile-settings' element={<ProfileSets />}/>
        <Route path='/teacher-profile-settings' element={<TeacherProfileSets />}/>
        <Route path='/add-courses' element={<AddCourse />}/>
        <Route path='/my-users' element={<MyUsers />}/>
        <Route path='/change-password' element={<ChangePass />}/>
        <Route path='/teacher-change-password' element={<TeacherChangePass/>}/>
        <Route path='/teacher-detail/:teacher_id' element={<TeacherDetail/>}/>
        <Route path='/all-courses' element={<AllCourses />}/>
        <Route path='/popular-courses' element={<PopularCourses />}/>
        <Route path='/popular-teacher' element={<PopularTeacher />}/>
        <Route path='/category/:category_slug' element={<CategoryCourses />}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
