'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecision = function (_React$Component) {
    _inherits(Indecision, _React$Component);

    function Indecision(props) {
        _classCallCheck(this, Indecision);

        var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

        _this.handleDeleteDecisions = _this.handleDeleteDecisions.bind(_this);
        _this.handleAddDecision = _this.handleAddDecision.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleDeleteDecisionSingular = _this.handleDeleteDecisionSingular.bind(_this);
        _this.state = {
            decisions: props.decisions
        };
        return _this;
    }

    _createClass(Indecision, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('decisionsed');
                var decisions = JSON.parse(json);

                if (decisions) {
                    this.setState(function () {
                        return { decisions: decisions };
                    });
                }
            } catch (e) {
                // Do doooo
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.decisions.length !== this.state.decisions.length) {
                var json = JSON.stringify(this.state.decisions);
                localStorage.setItem('decisionsed', json);
            }
        }
    }, {
        key: 'handleDeleteDecisions',
        value: function handleDeleteDecisions() {
            this.setState(function () {
                return {
                    decisions: []
                };
            });
        }
    }, {
        key: 'handleDeleteDecisionSingular',
        value: function handleDeleteDecisionSingular(decisionToRemoving) {
            this.setState(function (prevState) {
                return {
                    decisions: prevState.decisions.filter(function (decision) {
                        return decisionToRemoving !== decision;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.decisions.length);
            var decision = this.state.decisions[randomNum];
            alert(decision);
        }
    }, {
        key: 'handleAddDecision',
        value: function handleAddDecision(decision) {
            if (!decision) {
                return 'Enter valid data there';
            } else if (this.state.decisions.indexOf(decision) > -1) {
                return 'This decision is already in the decisions list';
            }

            this.setState(function (prevState) {
                return {
                    decisions: prevState.decisions.concat(decision)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitled = 'Put text in input of this website please';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitled: subtitled }),
                React.createElement(Action, {
                    hasDecisions: this.state.decisions.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Decisions, {
                    decisions: this.state.decisions,
                    handleDeleteDecisions: this.handleDeleteDecisions,
                    handleDeleteDecisionSingular: this.handleDeleteDecisionSingular
                }),
                React.createElement(AddDecision, {
                    handleAddDecision: this.handleAddDecision
                })
            );
        }
    }]);

    return Indecision;
}(React.Component);

Indecision.defaultProps = {
    decisions: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitled && React.createElement(
            'h2',
            null,
            props.subtitled
        )
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

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: props.hasOptions
            },
            'What to do now?'
        )
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

var Decisions = function Decisions(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteDecisions },
            'Remove All'
        ),
        props.decisions.length === 0 && React.createElement(
            'p',
            null,
            'Please add your decision to get application work'
        ),
        props.decisions.map(function (decision) {
            return React.createElement(Decision, {
                key: decision,
                decision: decision,
                handleDeleteDecisionSingular: props.handleDeleteDecisionSingular
            });
        })
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

var Decision = function Decision(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'li',
            { key: props.decision },
            'Decision: ',
            props.decision
        ),
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteDecisionSingular(props.decision);
                }
            },
            'remove'
        )
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

var AddDecision = function (_React$Component2) {
    _inherits(AddDecision, _React$Component2);

    function AddDecision(props) {
        _classCallCheck(this, AddDecision);

        var _this2 = _possibleConstructorReturn(this, (AddDecision.__proto__ || Object.getPrototypeOf(AddDecision)).call(this, props));

        _this2.handleAddDecision = _this2.handleAddDecision.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddDecision, [{
        key: 'handleAddDecision',
        value: function handleAddDecision(e) {
            e.preventDefault();

            var decision = e.target.elements.decision.value;
            var error = this.props.handleAddDecision(decision);

            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.decision.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error,
                    '  '
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddDecision },
                    React.createElement('input', { type: 'text', name: 'decision' }),
                    React.createElement(
                        'button',
                        null,
                        'Add decision'
                    )
                )
            );
        }
    }]);

    return AddDecision;
}(React.Component);

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(React.createElement(Indecision, null), document.getElementById('app'));
