import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

function CourseDetail(){
    let {course_id}=useParams();
    return(
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-4'>
                    <img src="/logo512.png" className="img-thumbnail" alt="Course Image"/>
                </div>
                <div className='col-8'>
                    <h3>Course Title</h3>
                    <p>Using a combination of grid and utility classes, 
                    cards can be made horizontal in a mobile-friendly and 
                    responsive way. In the example below, we remove the grid 
                    gutters with .g-0 and use .col-md-* classes to make the card 
                    horizontal at the md breakpoint. Further adjustments may be 
                    needed depending on your card content.</p>
                    <p className='fw-bold'>Course by: <Link to='/teacher-detail/1'>Teacher 1</Link></p>
                    <p className='fw-bold'>Duration: 3 hrs 30 mins</p>
                    <p className='fw-bold'>Total Enrolled: 678 students</p>
                    <p className='fw-bold'>Rating: 4.5/5 </p>
                </div>
            </div>
            {/* course videos */}
            <div className='card mt-4'>
                <h5 className='card-header'>
                   Video Lectures
                </h5>
                <ul class="list-group list-group-flush">
                    <li className="list-group-item">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 hour 30 minuts</span>
                            <button className='btn btn-sm btn-danger' data-bs-toggle="modal" data-bs-target='#videoModal1'><i class="bi-youtube"></i></button>
                        </span> 
                        {/* Video Modal Start*/}
                        <div className="modal fade" id="videoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Video 1</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <div class="ratio ratio-16x9">
                                    <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* EndVideo Modal */}
                    </li>
                    <li className="list-group-item">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 hour 30 minuts</span>
                            <button className='btn btn-sm btn-danger'><i class="bi-youtube"></i></button>
                        </span> 
                    </li>
                    <li className="list-group-item">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 hour 30 minuts</span>
                            <button className='btn btn-sm btn-danger'><i class="bi-youtube"></i></button>
                        </span> 
                    </li>
                    <li className="list-group-item">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 hour 30 minuts</span>
                            <button className='btn btn-sm btn-danger'><i class="bi-youtube"></i></button>
                        </span> 
                    </li>
                    <li className="list-group-item">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 hour 30 minuts</span>
                            <button className='btn btn-sm btn-danger'><i class="bi-youtube"></i></button>
                        </span> 
                    </li>
                    <li className="list-group-item">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 hour 30 minuts</span>
                            <button className='btn btn-sm btn-danger'><i class="bi-youtube"></i></button>
                        </span> 
                    </li>
                </ul>
            </div>

            <h3 className="pb-1 mb-4 mt-5">Related Courses </h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <Link to= "/detail/1"><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to= "/detail/1">Course title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to= "/detail/1"><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to= "/detail/1">Course title</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default CourseDetail;
