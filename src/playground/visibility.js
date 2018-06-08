let visibility = false;

const onToggleButton = () => {
    visibility = !visibility;
    renderTemplate();
};

const appRoot = document.getElementById('app');
const renderTemplate = () => {
    const template = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={onToggleButton}>
                {visibility ? 'Hide text' : 'Show this'}
            </button>
            {visibility && (
                <div>
                    <p>Text</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderTemplate();