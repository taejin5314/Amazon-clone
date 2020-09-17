import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
import Navbar from '../navbar/Navbar';

function Header() {
    const [{ basket, user, disable }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <>
            <div className={disable ? "header disable" : "header"}>
                <Link to="/">
                    <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                </Link>

                <div className="header__search">
                    <input type="text" className="header__searchInput" />
                    <SearchIcon className="header__searchIcon" />
                </div>

                <div className="header__nav">
                    <Link to={!user && '/login'}>
                        <div onClick={handleAuthentication} className="header__option">
                            <span className="header__optionLineOne">Hello, {user ? user.displayName + '!' : 'Guest!'}</span>
                            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>

                    <Link to='/orders'>
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>

                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime<ArrowDropDownIcon fontSize='small' /></span>
                    </div>

                    <Link to="/checkout">
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon />
                            <span className="header__optionLineTwo haeder__basketCount">{basket.length}</span>
                        </div>
                    </Link>

                </div>
            </div>

            <Navbar />
        </>
    )
}

export default Header
