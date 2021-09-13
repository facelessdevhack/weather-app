import React from 'react'
import {Link} from 'react-router-dom';
import home from '../../assets/home.png';
import skyscraper from '../../assets/skyscraper.png';
import './sidebar.css';

function Sidebar() {
    return (
        <div className='sidebar'>
            <Link to='/' className='sidebar__link'>
                <img src={home} alt="Home" className='sidebar__imgs'/>
                <p className='sidebar__title'>Home</p>
            </Link>
            <Link to='/city' className='sidebar__link'>
                <img src={skyscraper} alt="Cities" className='sidebar__imgs'/>
                <p className='sidebar__title'>Cities</p>
            </Link>
        </div>
    )
}

export default Sidebar;
