import React from 'react';
import Decision from './Decision';

const Decisions = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Decisions</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteDecisions}
            >
                Remove All
            </button>
        </div>
        {props.decisions.length === 0 && <p className="widget__message">Please add your decision to get application work</p>}
        {
            props.decisions.map((decision, index) => (
                <Decision
                    key={decision}
                    decision={decision}
                    count={index+1}
                    handleDeleteDecisionSingular={props.handleDeleteDecisionSingular}
                />
            ))
        }
    </div>
);

export default Decisions;