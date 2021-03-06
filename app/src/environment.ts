interface Environment {
    apiHost: string
}

const prod = {
    apiHost: 'https://stormy-cliffs-90695.herokuapp.com'
};
const local = {
    apiHost: 'http://localhost:8080'
};

export const environment: Environment =
    process.env.NODE_ENV !== 'production' ? local : prod;