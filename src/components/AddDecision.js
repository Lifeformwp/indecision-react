import React from 'react';

export default class AddDecision extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddDecision = this.handleAddDecision.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddDecision(e) {
        e.preventDefault();

        const decision = e.target.elements.decision.value;
        const error = this.props.handleAddDecision(decision);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.decision.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}  </p>}
                <form onSubmit={this.handleAddDecision}>
                    <input type="text" name="decision"/>
                    <button>Add decision</button>
                </form>
            </div>
        )
    }
}