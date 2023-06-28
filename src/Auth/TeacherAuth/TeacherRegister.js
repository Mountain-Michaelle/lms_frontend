import React, { useEffect, useState } from 'react';
import './css/TeacherRegister.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/teachers/';

const TeacherRegister = () => {
    
    const [teacherData, setTeacherData] = useState(
        {
            'full_name': '',
            'email': '',
            'qualification': '',
            'course_study': '',
            'country_name': '',
            'password': '',
            'confirm_password': '',
            'status': true
        }
    )

   const handleChange=(event) => {
        setTeacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        });
    }

   const handleSubmit=(event) =>{
        event.preventDefault()
        const teacherFormData = new FormData();
        teacherFormData.append("full_name", teacherData.full_name)
        teacherFormData.append("email", teacherData .email)
        teacherFormData.append("qualification", teacherData.qualification)
        teacherFormData.append("course_study", teacherData.course_study)
        teacherFormData.append("country_name", teacherData.country)
        teacherFormData.append("password", teacherData.password)
        teacherFormData.append("confirm_password", teacherData.confirm_password)
     
        axios.post(baseUrl, teacherFormData)
        .then((response) => {
                setTeacherData({
                    'full_name': '',
                    'email': '',
                    'qualification': '',
                    'course_study': '',
                    'country_name': '',
                    'password': '',
                    'confirm_password': '',
                    'status': 'success'
                })
            })
        .catch(error => {
            setTeacherData({
                'status': 'error',
            })
        })


        }
      
    return(
        <div className='teacher__register'>
            <div className='register__card'>
                <h2 className='h2'> Register a Teacher Account</h2>
                {
                    teacherData.status=='success' ?
                    <h4 style={{color: 'green', fontSize:'1.5rem', textAlign:'center'}}>You have successfully registered</h4>
                    :
                    <h5 style={{color: 'red', fontSize:'1.6rem', h4Hover: 'white', textAlign: 'center' }}>Check you data, something went wrong</h5>
                }
                <form className='form'>
                    <label className='label'>Full name</label>
                    <input onChange={handleChange} className='input' value={teacherData.full_name} name='full_name' type="text" placeholder='full name' />
                    <label className='label'>email</label>
                    <input onChange={handleChange} className='input' value={teacherData.email} name='email' type="email" placeholder='name@mail.com' />
                    <label className='label'>Nationality</label>
                    <select onChange={handleChange} className='select' value={teacherData.country_name} name="country_name" id="car">
                        <option className='option' value="Nigeria">Nigeria</option>
                        <option className='option' value="">Ghana</option>
                        <option className='option' value="">Biafra</option>
                    </select>
                    <label className='label'>Qualification</label>
                    <input onChange={handleChange} className='input' value={teacherData.qualification} name='qualification' type="text" placeholder='B.sc, HND, ND PHD..' />

                    <label className='label'>Subject</label>
                    <select onChange={handleChange} className='select' value={teacherData.course_study} name="course_study" id="car">
                        <option className='option' value="Nigeria">Python</option>
                        <option className='option' value="">COS452</option>
                        <option className='option' value="">History</option>
                    </select>
                    <label className='label'>Create a login password</label>
                    <input onChange={handleChange} className='input' value={teacherData.password} type="password" name="password" placeholder='*********' />
                    <label className='label'>Confirm Password</label>
                    <input onChange={handleChange} className='input' value={teacherData.confirm_password} type="password" name="confirm_password" placeholder='*********' />
                    <button className='bttn' onClick={handleSubmit}>SUMBIT</button>  
                </form>
                <div className='register'>
                        <h4 className='h4'>Already a registered staff? <Link to='/teacherauth' >Log-in here</Link></h4>
                </div>
            </div>
        </div>
    )
}
export default TeacherRegister;