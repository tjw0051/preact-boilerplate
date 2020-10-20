import "./style/normalize.css";
import "./style/layout.css";
import "./style/colors.css";
import "./style/typography.css";
import App from "./components/app.tsx";
import { createStore, Provider } from "unistore/full/preact";

if (API_MOCKS == 1) {
    fetch = require("./tests/__mocks__/apiMocks").fetch;
}

const initStore = {
    account: undefined
};
const store = createStore(initStore);

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);
