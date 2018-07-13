import React from 'react';

const Decision = (props) => (
    <div className="decision">
        <p className="decision__text">{props.count}. {props.decision}</p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteDecisionSingular(props.decision)
            }}
        >
            remove
        </button>
    </div>
);

export default Decision;