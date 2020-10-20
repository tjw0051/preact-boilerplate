import accountRes from "./fixtures/account.json";

const mocks = [
    {
        route: /.*\/account/,
        method: ["POST"],
        fn: (route, config) => {
            return accountRes;
        }
    },
];

function returnJson(json, status, ok) {
    return {
        json: () => Promise.resolve(json),
        status: status,
        ok: ok
    };
}

export function fetch(route, config) {
    const method = (config || {}).method || "GET";
    let res = returnJson(null, 404, false);

    mocks.forEach(mock => {
        if (mock.route.test(route) && mock.method.includes(method)) {
            const json = mock.fn(route, config);
            res = returnJson(json, 200, true);
        }
    });
    console.log(`${method} | ${res.status} | ${route}`);
    return Promise.resolve(res);
}
