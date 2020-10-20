const actions = (store: any) => ({
    loadURLParams(state: any, params: any) {
        return { query: params["q"] };
    }
});

export default actions;
