import React, { useState } from 'react';
import { Image, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from './image/Piyu(3).png';
import {
    Sidebar,
    Menu,
    MenuItem,
    useProSidebar,
} from "react-pro-sidebar";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaTableList, FaBars } from "react-icons/fa6";
import { FiHome, FiLogOut } from "react-icons/fi";
import { RiGalleryFill } from "react-icons/ri";
import { toast } from 'react-toastify';

export default function AdminHeader() {
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
        toast('Logout Succsessfuly')
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="Header_nav fixed-top mb-5 ">
                <Image src={logo} width={180} style={{ borderRadius: 5 }} alt='Logo' className='ms-4 nav-link' />
            </Navbar>

            <Sidebar
                backgroundColor="#c2e7e0"
                id='Sidebar'
                className={`app ${toggled ? "toggled" : ""}`}
                style={{ height: "100%", position: "fixed", zIndex: 100, boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)" }}
                collapsed={collapsed}
                onBackdropClick={() => setToggled(false)}
                toggled={toggled}
                breakPoint="lg">

                <Menu iconShape="square" className='pt-4 mt-4'>
                    <MenuItem className='nav-link' active={true} icon={<FiHome />} component={<Link to="/" />}>
                        Home
                    </MenuItem>
                    <MenuItem className='nav-link' icon={<FaCloudUploadAlt />} component={<Link to="/UploadImage" />}>Upload Image</MenuItem>
                    <MenuItem className='nav-link' icon={<FaTableList />} component={<Link to="/AdminHome" />}>Booking Slot</MenuItem>
                    <MenuItem className='nav-link' icon={<RiGalleryFill />} component={<Link to="/Gallery" />}>Gallery</MenuItem>
                </Menu>
                <div className="sidebar-footer">
                    <Menu iconShape="square">
                        <MenuItem className='nav-link' icon={<FiLogOut />} onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </Sidebar>
            <div className="adminHeaderClass" style={{ position: 'fixed', padding: "15px", marginTop: '20px' }}>
                <div className="w-100 d-flex justify-content-between">
                    <button className='btn p-0' onClick={() => setToggled(!toggled)}>
                        <FaBars style={{ color: '#000', fontSize: "20px" }} />
                    </button>
                </div>
            </div>
        </>
    );
}
