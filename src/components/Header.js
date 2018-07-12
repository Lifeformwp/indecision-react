import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitled && <h2>{props.subtitled}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'some definition'
};

export default Header;