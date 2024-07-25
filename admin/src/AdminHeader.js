import React, { useState } from 'react';
import { Image, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from './image/Piyu(3).png';
import { isMobile } from 'react-device-detect';
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

    const handleCollapsedChange = () => {
        if (collapsed) {
            if (!isMobile) {
                document.getElementById('page-container').setAttribute('class', 'BigScreen');
            }
        } else {
            if (!isMobile) {
                document.getElementById('page-container').setAttribute('class', 'SmallScreen');
            }
        }
        setCollapsed(!collapsed);
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="Header_nav fixed-top mb-5">
                <Image src={logo} width={180} style={{ borderRadius: 5 }} alt='Logo' />
            </Navbar>

            <Sidebar
                backgroundColor="#fff"
                id='Sidebar'
                className={`app ${toggled ? "toggled" : ""}`}
                style={{ height: "100%", position: "fixed", zIndex: 100, boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)" }}
                collapsed={collapsed}
                onBackdropClick={() => setToggled(false)}
                toggled={toggled}
                breakPoint="lg">

                <Menu iconShape="square" className='pt-4 mt-4'>
                    <MenuItem active={true} icon={<FiHome />} component={<Link to="/" />}>
                        Home
                    </MenuItem>
                    <MenuItem icon={<FaCloudUploadAlt />} component={<Link to="/UploadImage" />}>Upload Image</MenuItem>
                    <MenuItem icon={<FaTableList />} component={<Link to="/AdminHome" />}>Booking Slot</MenuItem>
                    <MenuItem icon={<RiGalleryFill />} component={<Link to="/Gallery" />}>Gallery</MenuItem>
                </Menu>
                <div className="sidebar-footer">
                    <Menu iconShape="square">
                        <MenuItem icon={<FiLogOut />} onClick={handleLogout}>Logout</MenuItem>
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
