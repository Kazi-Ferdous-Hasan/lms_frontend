
import {Link} from 'react-router-dom';
function Sidebar(){
    return(
        <div className='card'>
            <div className='list-group list-group-flush'>
                <Link to='/user-dashboard' className='list-group-item list-group-item-action'>Dashboard</Link>
                <Link to='/enrolled-courses' className='list-group-item list-group-item-action'>Enrolled Courses</Link>
                <Link to='/favorite-courses' className='list-group-item list-group-item-action'>Favorite Courses</Link>
                <Link to='/recommended-courses' className='list-group-item list-group-item-action'>Recommended Courses</Link>
                <Link to='/profile-settings' className='list-group-item list-group-item-action'>Profile Setting</Link>
                <Link to='/change-password' className='list-group-item list-group-item-action'>Change Password</Link>
                <Link to='/user-login' className='list-group-item list-group-item-action text-danger'>Lougout</Link>
            </div>
        </div>
    );
}
export default Sidebar;