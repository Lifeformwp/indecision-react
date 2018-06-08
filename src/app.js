class Indecision extends React.Component {
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
            const json = localStorage.getItem('decisionsed');
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
            localStorage.setItem('decisionsed', json);
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

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitled && <h2>{props.subtitled}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'some defenition'
};

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitled}
//                 </h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={props.hasOptions}
            >
                What to do now?
            </button>
        </div>
    );
};

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={this.props.hasOptions}
//                 >
//                     What to do now?
//                 </button>
//             </div>
//         );
//     }
// }

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

// class Decisions extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteDecisions}>Remove All</button>
//                 {
//                     this.props.decisions.map((decision) => <Decision key={decision} decision={decision} />)
//                 }
//             </div>
//         )
//     }
// }

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

// class Decision extends React.Component {
//     render() {
//         return (
//             <div>
//                 <li key={this.props.decision}>Decision: {this.props.decision}</li>
//             </div>
//         )
//     }
// }

class AddDecision extends React.Component {
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

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<Indecision />, document.getElementById('app'));