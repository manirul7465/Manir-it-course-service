import React, { useState } from 'react';
import "./Dashboard.css"
import * as FaIcons from "react-icons/fa";

import { Offcanvas } from 'react-bootstrap';
import { Link, Outlet, } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
const Dashboard = () => {
  const { logout, admin } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='dashboard-header'>

      <FaIcons.FaBars className='menu-bars' onClick={handleShow} />

      <Offcanvas show={show} onHide={handleClose} className="offcanvas">
        <Offcanvas.Header closeButton closeVariant='white'>
          <img
            alt=""
            src="https://i.ibb.co/2NMmj4G/images.png"
            width="90"
            height="50"
            className="d-inline-block align-top"
          />

        </Offcanvas.Header>
        <hr style={{ color: "white", width: "80%", marginLeft: "30px" }} />
        {
          !admin && <div>
            <Link className='dashbord-nav' to="myorders" >Myorders</Link><br />
            <Link className='dashbord-nav' to="review" >Review</Link>
          </div>}
        {admin && <div>
          <Link className='dashbord-nav' to="addproduct" >AddService</Link><br />
          <Link className='dashbord-nav' to="manageproduct" >Manage product</Link><br />
          <Link className='dashbord-nav' to="manageallorder" >Manage All  Order</Link><br />
          <Link className='dashbord-nav' to="makeadmin" >Make Admin</Link>
        </div>
        }
        <div style={{ marginTop: "50px" }} className='dashbord-nav'>
          <h1 >Back To </h1>
          <Link className='dashbord-nav' to="/home" style={{ textDecoration: "underline", color: "blue" }}>Home</Link>
        </div>
        <div>
          <h2 className='dashbord-nav' style={{ marginLeft: "50px", marginTop: "10px", }}>OR</h2>
          <span onClick={logout} className='dashbord-nav' style={{ marginLeft: "50px", marginTop: "10px", textDecoration: "underline", color: "blue", cursor: "pointer" }}>logout</span>
        </div>

      </Offcanvas>


      <h1 style={{ marginTop: "50px" }}>Welcome your Dashboard</h1>
      <Outlet/>
    </div>
  );
};

export default Dashboard;