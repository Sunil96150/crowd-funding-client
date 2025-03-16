import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navicon from '../assets/Navicon.jpeg'

const Navber = () => {
    const linkClass =({ isActive }) => `hover:underline transition-colors duration-300 ${ isActive ? "text-blue-700" : "text-gray-600"}`;

    const Home = <Link to ="/">Home</Link>
    const AddMyCampaingn = <Link to ="/AddNewCampaign">AddNewCampaingn</Link>
    const Donations = <Link to ="/donations">Donations</Link>
   





    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className={linkClass}>{Home}</li>
        <li className={linkClass}>{AddMyCampaingn}</li>
        <li className={linkClass}>{Donations}</li>
       
      </ul>
    </div>
    <img className='w-30 h-10' src={Navicon} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className={linkClass}>{Home}</li>
      <li className={linkClass}>{AddMyCampaingn}</li>
      <li className={linkClass}>{Donations}</li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn"><NavLink to = "login">Login</NavLink></a>
  </div>
</div>
        </div>
    );
};

export default Navber;