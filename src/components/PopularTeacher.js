import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from 'axios';

// const baseUrl = 'https://cors-anywhere.herokuapp.com/http://127.0.0.1:8000/api';
const baseUrl = 'http://127.0.0.1:8000/api';
function PopularTeacher(){
    const [teacher, setTeacher] = useState(null);
    useEffect(() => {
      axios.get(baseUrl + '/teacher/')
        .then((response) => {
          setTeacher(response.data);
        })
        .catch((error) => {
          console.error('Error fetching teacher data:', error);
        });
    }, []);
    console.log(teacher);
    return(
        <div className='container mt-3'>
            {/*Popular Teacher */}
            <h3 className="pb-1 mb-4">Popular Teacher</h3>
            <div className="row mb-4">
              <div className="col-md-3 mb-4">
                <div className="card">
                  <Link to= "/detail/1"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                      <h5 className="card-title"><Link to= "/teacher-detail/1">Teacher Name</Link></h5>
                    </div>
                    <div className='card-footer'>
                        <div className='title'>
                            <span>Rating: 4.5/5</span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card">
                <a href= "#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                      <h5 className="card-title"><a href= "#">Teacher Name</a></h5>
                    </div>
                    <div className='card-footer'>
                        <div className='title'>
                            <span>Rating: 4.5/5</span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card">
                <a href= "#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                      <h5 className="card-title"><a href= "#">Teacher Name</a></h5>
                    </div>
                    <div className='card-footer'>
                        <div className='title'>
                            <span>Rating: 4.5/5</span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card">
                <a href= "#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                      <h5 className="card-title"><a href= "#">Teacher Name</a></h5>
                    </div>
                    <div className='card-footer'>
                        <div className='title'>
                            <span>Rating: 4.5/5</span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card">
                <a href= "#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                      <h5 className="card-title"><a href= "#">Teacher Name</a></h5>
                    </div>
                    <div className='card-footer'>
                        <div className='title'>
                            <span>Rating: 4.5/5</span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card">
                <a href= "#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                      <h5 className="card-title"><a href= "#">Teacher Name</a></h5>
                    </div>
                    <div className='card-footer'>
                        <div className='title'>
                            <span>Rating: 4.5/5</span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card">
                <a href= "#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                      <h5 className="card-title"><a href= "#">Teacher Name</a></h5>
                    </div>
                    <div className='card-footer'>
                        <div className='title'>
                            <span>Rating: 4.5/5</span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card">
                <a href= "#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                      <h5 className="card-title"><a href= "#">Teacher Name</a></h5>
                    </div>
                    <div className='card-footer'>
                        <div className='title'>
                            <span>Rating: 4.5/5</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            {/*End of Popular Teacher */}
            {/*Pagination Starts */}
            <nav aria-label="Page navigation example mt-5">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {/*Pagination Ends*/}
        </div>
    );
}
export default PopularTeacher;