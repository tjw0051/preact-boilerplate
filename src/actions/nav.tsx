import { route } from "preact-router";

const actions = (store: any) => ({
    gotoAccount(state: any) {
        route("/account");
        return {};
    }
});

export default actions;
