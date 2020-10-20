import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";

const App: FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <div id="app">
            <Router onChange={handleRoute}>
                <Route path="/" component={Home} default />
            </Router>
        </div>
    );
};

export default App;
