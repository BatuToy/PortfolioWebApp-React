import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Navbar.css';

const items = [
    {
        label: <Link to="/PortfolioWebApp-React/about">About</Link>,
        key: 'PortfolioWebApp-React/about',
        icon: <MailOutlined />,
    },
    {
        label: <Link to="PortfolioWebApp-React/projects">Projects</Link>,
        key: 'PortfolioWebApp-React/projects',
        icon: <AppstoreOutlined />,
    },
    {
        label: <Link to="/PortfolioWebApp-React/contact">Contact</Link>,
        key: 'PortfolioWebApp-React/contact',
        icon: <MessageOutlined />,
    },
];

const Navbar = () => {
    const [current, setCurrent] = useState("");

    const handleClick = (e) => {
        setCurrent(e.key);  
    };
    return (
        <div className='navbar'>
            <Menu 
            onClick={handleClick} 
            selectedKeys={[current]} 
            mode= {window.innerWidth <= 800 ? "horizontal" :'inline'} 
            items={items} 
        />
        </div>
    );
};
export default Navbar;