import React from 'react';
import AddDecision from'./AddDecision'
import Header from './Header'
import Action from './Action'
import Decisions from './Decisions'
import DecisionModal from './DecisionModal'

export default class Indecision extends React.Component {
    state = {
        decisions: [],
        selectedDecision: undefined
    };

    handleDeleteDecisions = () => {
        this.setState(() => ({
            decisions: []
        }));
    };

    handleDeleteDecisionSingular = (decisionToRemoving) => {
        this.setState((prevState) => ({
            decisions: prevState.decisions.filter((decision) => decisionToRemoving !== decision)
        }))
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.decisions.length);
        const decision = this.state.decisions[randomNum];
        this.setState(() => ({
            selectedDecision: decision
        }));
    };

    handleAddDecision = (decision) => {
        if (!decision) {
            return 'Enter valid data there';
        } else if (this.state.decisions.indexOf(decision) > -1) {
            return 'This decision is already in the decisions list';
        }

        this.setState((prevState) => ({
            decisions: prevState.decisions.concat(decision)
        }));
    };

    handleDeleteSelectedDecision = () => {
        this.setState(() => ({
            selectedDecision: undefined
        }))
    };

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

    render() {
        const subtitled = 'Put text in input of this website please';

        return (
            <div>
                <Header subtitled={subtitled} />
                <div className="container">
                    <Action
                        hasDecisions={this.state.decisions.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Decisions
                            decisions={this.state.decisions}
                            handleDeleteDecisions={this.handleDeleteDecisions}
                            handleDeleteDecisionSingular={this.handleDeleteDecisionSingular}
                        />
                        <AddDecision
                            handleAddDecision={this.handleAddDecision}
                        />
                    </div>
                </div>
                <DecisionModal
                    selectedDecision={this.state.selectedDecision}
                    handleDeleteSelectedDecision={this.handleDeleteSelectedDecision}
                />
            </div>
        )
    }
}