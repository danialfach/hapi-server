const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return `Homepage`;
        },
    },
    {
        method: "GET",
        path: "/users/{username?}",
        handler: (request, h) => {
            const { username = "Guys" } = request.params;
            const { lang } = request.query;

            if(lang === 'id'){
                return `Hai ${name}`;
            }

            return `Hello ${username}!`;
        },
    },
    {
        method: "GET",
        path: "/location",
        handler: (request, h) => {
            const { name, location } = request.params;

            return `Hello, ${name} from ${location}`;
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}!`;
        },
    }
];

export default routes;