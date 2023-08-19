import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
//const baseUrl = 'https://cors-anywhere.herokuapp.com/http://127.0.0.1:8000/api/teacher/';
const baseUrl = 'http://127.0.0.1:8000/api/teacher/';

function TeacherRegister(){
  const [teacherData, setTeacherData] = useState({
    'full_name':'',
    'email':'',
    'password':'',
    'qualification':'',
    'mobile_no':'',
    'skills':'',
    'status':''
  });
  // Change Element value
  const handleChange=(event)=>{
    setTeacherData({
      ...teacherData,
      [event.target.name]:event.target.value
    });
  }
  console.log(teacherData);
  // End

  //Submit Form
  // const submitForm=(e)=>{
  //   e.preventDefault()
  //   const teacherFormData = new FormData();
  //   teacherFormData.append("full_name", teacherData.full_name)
  //   teacherFormData.append("email", teacherData.email)
  //   teacherFormData.append("password", teacherData.password)
  //   teacherFormData.append("qualification", teacherData.qualification)
  //   teacherFormData.append("mobile_no", teacherData.mobile_no)
  //   teacherFormData.append("skills", teacherData.skills)


  //     axios.post(baseUrl, teacherFormData).then((response)=>{
  //       setTeacherData({
  //         'full_name':'',
  //         'email':'',
  //         'password':'',
  //         'qualification':'',
  //         'mobile_no':'',
  //         'skills':'',
  //         'status': 'success'
  //       });
  //     }).catch(
  //       ()=>{
  //         console.log("asdfghj")
  //         setTeacherData({status:'error'})
  //       }
  //     );
  // };

  const submitForm = (e) => {
    e.preventDefault();
    const teacherFormData = new FormData();
    teacherFormData.append("full_name", teacherData.full_name);
    teacherFormData.append("email", teacherData.email);
    teacherFormData.append("password", teacherData.password);
    teacherFormData.append("qualification", teacherData.qualification);
    teacherFormData.append("mobile_no", teacherData.mobile_no);
    teacherFormData.append("skills", teacherData.skills);

    // const token = localStorage.getItem("token");

    axios
      .post(baseUrl, teacherFormData, {
        headers: {
          // Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data)
        setTeacherData({
          full_name: "",
          email: "",
          password: "",
          qualification: "",
          mobile_no: "",
          skills: "",
          status: "success",
        });
      })
      .catch(() => {
        console.log("Error occurred while registering teacher.");
        setTeacherData({ status: "error" });
      });
  };
  
  
  //End
    useEffect(()=>{
      document.title = 'Teacher Register';
    });
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 offset-3'>
                  {teacherData.status === 'success' && <p className='text-success'>Thanks for your registration</p>}
                  {teacherData.status === 'error' && <p className='text-danger'>Something went wrong!</p>}
                    <div className='card'>
                        <h5 className='card-header' align='center'>Teacher Register</h5>
                        <div className='card-body'>
                            <form>
                                <div className="mb-3">
                                  <label for="exampleInputEmail1" className="form-label">Full Name</label>
                                  <input value={teacherData.full_name} onChange={handleChange} name='full_name' type="text" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                  <label for="exampleInputEmail1" className="form-label">Email</label>
                                  <input value={teacherData.email} onChange={handleChange} name='email' type="email" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                  <label for="exampleInputPassword1" className="form-label">Password</label>
                                  <input value={teacherData.password} onChange={handleChange} name='password' type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3">
                                  <label for="exampleInputEmail1" className="form-label">Qualification</label>
                                  <input value={teacherData.qualification} onChange={handleChange} name='qualification' type="text" className="form-control"/>
                                </div>
                                
                                <div className="mb-3">
                                  <label for="exampleInputPassword1" className="form-label">Mobile Number</label>
                                  <input value={teacherData.mobile_no} onChange={handleChange} name='mobile_no' type="number" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3">
                                  <label for="exampleInputEmail1" className="form-label">Skills</label>
                                  <textarea value={teacherData.skills} onChange={handleChange} name='skills' className='form-control'></textarea>
                                  <div id="emailHelp" className="form-text">Briefly tell us about your skills.</div>
                                </div>
                                <button onClick={submitForm} type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TeacherRegister;