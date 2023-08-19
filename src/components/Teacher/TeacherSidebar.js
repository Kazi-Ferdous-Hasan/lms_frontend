
import {Link} from 'react-router-dom';
function TeacherSidebar(){
    return(
        <div className='card'>
            <div className='list-group list-group-flush'>
                <Link to='/teacher-dashboard' className='list-group-item list-group-item-action'>Dashboard</Link>
                <Link to='/teacher-my-courses' className='list-group-item list-group-item-action'>My Courses</Link>
                <Link to='/add-courses' className='list-group-item list-group-item-action'>Add Course</Link>
                <Link to='/my-users' className='list-group-item list-group-item-action'>My Users</Link>
                <Link to='/teacher-profile-settings' className='list-group-item list-group-item-action'>Profile Setting</Link>
                <Link to='/teacher-change-password' className='list-group-item list-group-item-action'>Change Password</Link>
                <Link to='/teacher-login' className='list-group-item list-group-item-action text-danger'>Lougout</Link>
            </div>
        </div>
    );
}
export default TeacherSidebar;