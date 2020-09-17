import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Category1, Category2, Category3, Category4, Category5 } from './category/Category';
import { SidebarOption } from './SidebarOption';
import './Navbar.css'
import { useStateValue } from '../../StateProvider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Navbar() {
    const [{ user, disable }, dispatch] = useStateValue();

    const showSidebar = () => {
        dispatch({
            type: "TOGGLE_DISABLE"
        })
    }

    return (
        <>
            <Link to="#" className="navbar" onClick={showSidebar} >
                <div className="navbar__click">
                    <MenuOutlinedIcon />
                </div>
            </Link>

            <nav className={disable ? "navbar__menu active" : "navbar__menu"}>
                <div className="navbar__toggle">
                    <Link to="#" className="navbar__click">
                        <CloseOutlinedIcon onClick={showSidebar} />
                    </Link>
                </div>

                <Link to='/orders' onClick={showSidebar}>
                    <div className="navbar__header">
                        <span className="navbar__user">
                            <AccountCircleIcon style={{ display: 'inline-flex', verticalAlign: 'bottom', fontSize: '24px' }} /> Hello, <strong>{user ? user.displayName : 'Guest'}</strong>
                        </span>
                    </div>
                </Link>

                <div className="navbar__menuContainer">

                    <div className="navbar__menuTitle">
                        <span>AMAZON CLONE</span>
                    </div>

                    <div className="navbar__menuItems">
                        {SidebarOption.map((item, index) => (
                            <Link to={item.path} className="navbar__menuItem" onClick={showSidebar}>
                                <span>{item.title}</span>
                                <div>
                                    <ArrowForwardIosIcon style={{ fontSize: "15px", display: 'inline-flex', verticalAlign: 'bottom', color: "gray" }} className="navbar__clickArrow" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="navbar__menuSeparator"></div>

                    <div className="navbar__menuTitle">
                        <span>SHOP BY CATEGORY</span>
                    </div>

                    <div className="navbar__menuItems">
                        {Category1.map((item, index) => (
                            <Link to={item.path} className="navbar__menuItem" onClick={showSidebar}>
                                <span>{item.title}</span>
                                <div>
                                    <ArrowForwardIosIcon style={{ fontSize: "15px", display: 'inline-flex', verticalAlign: 'bottom', color: "gray" }} className="navbar__clickArrow" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="navbar__itemSeparator"></div>

                    <div className="navbar__menuItems">
                        {Category2.map((item, index) => (
                            <Link to={item.path} className="navbar__menuItem" onClick={showSidebar}>
                                <span>{item.title}</span>
                                <div>
                                    <ArrowForwardIosIcon style={{ fontSize: "15px", display: 'inline-flex', verticalAlign: 'bottom', color: "gray" }} className="navbar__clickArrow" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="navbar__itemSeparator"></div>

                    <div className="navbar__menuItems">
                        {Category3.map((item, index) => (
                            <Link to={item.path} className="navbar__menuItem" onClick={showSidebar}>
                                <span>{item.title}</span>
                                <div>
                                    <ArrowForwardIosIcon style={{ fontSize: "15px", display: 'inline-flex', verticalAlign: 'bottom', color: "gray" }} className="navbar__clickArrow" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="navbar__itemSeparator"></div>

                    <div className="navbar__menuItems">
                        {Category4.map((item, index) => (
                            <Link to={item.path} className="navbar__menuItem" onClick={showSidebar}>
                                <span>{item.title}</span>
                                <div>
                                    <ArrowForwardIosIcon style={{ fontSize: "15px", display: 'inline-flex', verticalAlign: 'bottom', color: "gray" }} className="navbar__clickArrow" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="navbar__menuSeparator"></div>

                    <div className="navbar__menuTitle">
                        <span>HELP & SETTINGS</span>
                    </div>

                    <div className="navbar__menuItems">
                        {Category5.map((item, index) => (
                            <Link to={item.path} className="navbar__menuItem" onClick={showSidebar}>
                                <span>{item.title}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="navbar__blank"></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
