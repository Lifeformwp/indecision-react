import React from 'react';

const Decision = (props) => {
    return (
        <div>
            <li key={props.decision}>Decision: {props.decision}</li>
            <button
                onClick={(e) => {
                    props.handleDeleteDecisionSingular(props.decision)
                }}
            >
                remove
            </button>
        </div>
    );
};

export default Decision;