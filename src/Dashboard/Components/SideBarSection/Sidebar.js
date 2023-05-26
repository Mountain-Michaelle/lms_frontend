import React from 'react';
import myIcon from '../images/myicon.jpg.png';


const Sidebar = () => {
    return(
        <div className='sidebar grid'>
            <div className='logo__div flex'>
                <img src={myIcon} alt="image name" />
                <h2>IMTech</h2>
            </div>
        </div>
    )
}

export default Sidebar;