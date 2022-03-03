import React from 'react';
import { Link } from 'react-router-dom';

const Book = () => {
    return (
        <div>
            <h1> Bed Room Booked</h1>
            <Link to="/home">
            <p>Want to book a different Room ?? </p>
            </Link>
        </div>
    );
};

export default Book;