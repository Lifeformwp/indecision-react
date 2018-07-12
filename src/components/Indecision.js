import React from 'react';
import AddDecision from'./AddDecision'
import Header from './Header'
import Action from './Action'
import Decisions from './Decisions'

export default class Indecision extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteDecisions = this.handleDeleteDecisions.bind(this);
        this.handleAddDecision = this.handleAddDecision.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteDecisionSingular = this.handleDeleteDecisionSingular.bind(this);
        this.state = {
            decisions: []
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('decisions');
            const decisions = JSON.parse(json);

            if (decisions) {
                this.setState(() => ({ decisions }));
            }
        } catch (e) {
            // Do doooo
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.decisions.length !== this.state.decisions.length) {
            const json = JSON.stringify(this.state.decisions);
            localStorage.setItem('decisions', json);
        }
    }

    handleDeleteDecisions() {
        this.setState(() => ({
            decisions: []
        }));
    }

    handleDeleteDecisionSingular(decisionToRemoving) {
        this.setState((prevState) => ({
            decisions: prevState.decisions.filter((decision) => decisionToRemoving !== decision)
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.decisions.length);
        const decision = this.state.decisions[randomNum];
        alert(decision);
    }

    handleAddDecision(decision) {
        if (!decision) {
            return 'Enter valid data there';
        } else if (this.state.decisions.indexOf(decision) > -1) {
            return 'This decision is already in the decisions list';
        }

        this.setState((prevState) => ({
            decisions: prevState.decisions.concat(decision)
        }));
    }

    render() {
        const subtitled = 'Put text in input of this website please';

        return (
            <div>
                <Header subtitled={subtitled} />
                <Action
                    hasDecisions={this.state.decisions.length > 0}
                    handlePick={this.handlePick}
                />
                <Decisions
                    decisions={this.state.decisions}
                    handleDeleteDecisions={this.handleDeleteDecisions}
                    handleDeleteDecisionSingular={this.handleDeleteDecisionSingular}
                />
                <AddDecision
                    handleAddDecision={this.handleAddDecision}
                />
            </div>
        )
    }
}