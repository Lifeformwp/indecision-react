import React from 'react';

export default class AddDecision extends React.Component {
    state = {
        error: undefined
    };

    handleAddDecision = (e) => {
        e.preventDefault();

        const decision = e.target.elements.decision.value;
        const error = this.props.handleAddDecision(decision);

        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.decision.value = '';
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-decision-error">{this.state.error}  </p>}
                <form className="add-decision" onSubmit={this.handleAddDecision}>
                    <input className="add-decision__input" type="text" name="decision"/>
                    <button className="button">Add decision</button>
                </form>
            </div>
        )
    }
}