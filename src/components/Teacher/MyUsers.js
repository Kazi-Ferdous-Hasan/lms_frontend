import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
function MyUsers(){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <aside className="col-md-3">
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>User List</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Enrolled Course</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>Md Hasibur Rahman</td>
                                    <td><Link to="/">EDA: Unlock the Secrets of Your Data</Link></td>
                                    <td>
                                        <button className='btn btn-danger btn-sm active'>Delete</button>
                                    </td>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );  
}
export default MyUsers;
