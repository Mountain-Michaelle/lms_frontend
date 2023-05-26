import React from 'react';
import '../Dashboard/css/Index.css';
import Sidebar from './Components/SideBarSection/Sidebar';


const Index = () => {
    return(
        <div className='body'>
            <div className='container1'>
               <Sidebar />
            <h2>
                Am the Dashboard!
            </h2>  
            </div>
        </div>
    )
}

export default Index;