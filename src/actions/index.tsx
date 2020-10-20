import api from "./api";
import local from "./local";
import nav from "./nav";

const actions = (store: any) => ({
    ...api(store),
    ...local(store),
    ...nav(store)
});

export default actions;
