import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundedPage = () => (
    <div>
        Not found, sorry, 404 - <Link to="/">Go dashboard</Link>
    </div>
);

export default NotFoundedPage;