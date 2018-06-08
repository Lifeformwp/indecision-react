console.log('App running!');

const app = {
    title: 'Some it',
    subtitle: 'This is subtitle fine',
    decisions: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.decision.value;

    if (option) {
        app.decisions.push(option);
        e.target.elements.decision.value = '';
        renderTemplate();
    }
};

const onRemoveAll = () => {
    app.decisions = [];
    renderTemplate();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.decisions.length);
  const decision = app.decisions[randomNum];
  alert(decision);
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.decisions.length > 0 ? 'Here are your imps': 'No imps'}</p>
            <button disabled={app.decisions.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove all</button>
            <ol>
                {
                    app.decisions.map((decision) => <li key={decision}>{decision}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="decision"/>
                <button>Add decision</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderTemplate();