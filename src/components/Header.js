import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitled && <h2 className="header__subtitle">{props.subtitled}</h2>}
        </div>
    </div>
);

Header.defaultProps = {
    title: 'some definition'
};

export default Header;