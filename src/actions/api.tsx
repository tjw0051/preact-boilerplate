declare let API_URL: any;

const actions = (store: any) => ({
    async getAccount(state: any, name: any) {
        const account = store.getState().account;
        const res = await fetch(`${API_URL}/account`, {method: 'GET'});
        return { fetchState: {busy: false, error: null, done: true}, account: await res.json()};
    }
});

export default actions;
