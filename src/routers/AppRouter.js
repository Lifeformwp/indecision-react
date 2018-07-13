import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const ExpenseDashboardPage = () => (
    <div>
        Some test
    </div>
);

const AddExpensePage = () => (
    <div>
        Create Expense
    </div>
);

const EditExpensePage = () => (
    <div>
        Edit Expense
    </div>
);

const HelpPage = () => (
    <div>
        Just help
    </div>
);

const NotFoundedPage = () => (
    <div>
        Not found, sorry, 404 - <Link to="/">Go dashboard</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>New Title</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Homepage</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundedPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;