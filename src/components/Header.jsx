import React, {Component} from 'react';
import contacts_img from '../img/phone.png';
import profile_img from '../img/profile.png';
import cart_img from '../img/cart.png';
import like_img from '../img/like.png';
import compare_img from '../img/compare.png';
import {Link} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <Link exact="exact" to="/catalogue">
                        <h1>Dominus</h1>
                    </Link>
                </div>
                <div className="nav">
                    <Link exact="exact" to="/contacts">
                        <div className="nav-button">
                            <img src={contacts_img} alt=""/><br/>
                            <span>Contacts</span><br/>
                        </div>
                    </Link>
                    <Link exact="exact" to="/compare">
                        <div className="nav-button">
                            <img src={compare_img} alt=""/><br/>
                            <span>Compare</span><br/>
                        </div>
                    </Link>
                    <Link exact="exact" to="/cart">
                        <div className="nav-button">
                            <img src={cart_img} alt=""/><br/>
                            <span>Cart</span><br/>
                        </div>
                    </Link>
                    <Link exact="exact" to="/favorite">
                        <div className="nav-button">
                            <img src={like_img} alt=""/><br/>
                            <span>Favorite</span><br/>
                        </div>
                    </Link>
                    <Link excit="excit" to="/profile">
                        <div className="nav-button">
                            <img src={profile_img} alt=""/><br/>
                            <span>Profile</span><br/>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;
