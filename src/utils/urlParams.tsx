export const getURLParams = () => {
    const params = {};
    const search = window.location.search;
    search.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        (str: any, key: any, value: any) => {
            params[key] = value;
            return value;
        }
    );
    return params;
};
