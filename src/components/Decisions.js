import React from 'react';
import Decision from './Decision';

const Decisions = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteDecisions}>Remove All</button>
            {props.decisions.length === 0 && <p>Please add your decision to get application work</p>}
            {
                props.decisions.map((decision) => (
                    <Decision
                        key={decision}
                        decision={decision}
                        handleDeleteDecisionSingular={props.handleDeleteDecisionSingular}
                    />
                ))
            }
        </div>
    );
};

export default Decisions;