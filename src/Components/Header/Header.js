import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser] =useContext(UserContext);
    return (
        <div className="header">
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="login">Login</Link>  |{" "}
                <Link to="google">Google Map</Link>  |{" "}
                <Link to="book">Booking</Link>
            </nav>
            <h2>Choose Your Needed Room</h2>
            <p>User: {loggedInUser.email}</p>
        </div>
    );
};

export default Header;