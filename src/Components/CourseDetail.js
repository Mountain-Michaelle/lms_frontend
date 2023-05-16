import React from 'react';
import { useParams } from 'react-router-dom';
import CourseImg from '../static/images/Course2.jpg';

const CourseDetail = () => {

    let {course_id} = useParams();

    return(
        <div className="container mt-5">
            <div className='row justify-content-center'>
                <div className='col-md-6 col-sm-12'>
                    <img className='rounded w-100 h-75' style={{objectFit:"contain"}} src={CourseImg} alt=""  />
                </div>
                <div className='col-md-6 col-sm-12'>
                    <h2 className='mb-md-3 text-xs-left'>Application Program Interface</h2>
                    <article className='max-h-50'>
                    The useParams hook returns an object of key/value pairs of the...
                    </article>
                </div>
            </div>
        </div>
    )
}
export default CourseDetail;