'use strict';

var visibility = '';

var optionSet = '';

var onToggleButton = function onToggleButton() {
    visibility = !visibility;
    renderTemplate();
};

var appRoot = document.getElementById('app');
var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility toggle'
        ),
        React.createElement(
            'button',
            { onClick: onToggleButton },
            visibility ? 'Hide text' : 'Show this'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Text'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderTemplate();
