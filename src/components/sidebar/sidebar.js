import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import home from '../../assets/home.png';
import skyscraper from '../../assets/skyscraper.png';
import './sidebar.css';

function Sidebar() {
    const [activeTab, setActiveTab] = useState(0)
    const activeNav = (id) => {
        if (id === activeTab) {
          return "nav-item nav-link active";
        } else {
          return "nav-item nav-link";
        }
      };
     const onClick = (id) => {
          setActiveTab(id)
      };
    return (
        <div className='sidebar'>
            <div className={activeNav(0)} onClick={() => onClick(0)}>
                <Link to='/' className='sidebar__link'>
                    <img src={home} alt="Home" className="sidebar__imgs"/>
                    <p className='sidebar__title'>Home</p>
                </Link>
            </div>
            <div className={activeNav(1)} onClick={() => onClick(1)}>
                <Link to='/city' className='sidebar__link'>
                    <img src={skyscraper} alt="Cities" className="sidebar__imgs"/>
                    <p className='sidebar__title'>Cities</p>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;
