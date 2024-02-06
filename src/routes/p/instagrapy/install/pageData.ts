export const onThisPageLinks = [
    {
        slug: 'Server setup',
        href: '#server-setup',
        sublinks: [
            {
                slug: 'Requirements',
                href: '#server-requirements'
            },
            {
                slug: 'Clone server repository',
                href: '#clone-server-repository'
            },
            {
                slug: 'Install dependencies',
                href: '#install-server-dependencies'
            },
            {
                slug: 'Run app',
                href: '#run-server-app'
            }
        ]
    },
    {
        slug: 'Client setup',
        href: '#client-setup',
        sublinks: [
            {
                slug: 'Requirements',
                href: '#client-requirements'
            },
            {
                slug: 'Clone client repository',
                href: '#clone-client-repository'
            },
            {
                slug: 'Install dependencies',
                href: '#install-client-dependencies'
            },
            {
                slug: 'Run app',
                href: '#run-client-app'
            }
        ]
    }
];

export const serverRequeriments: { package: string; link: string }[] = [
    {
        package: 'Python',
        link: 'https://www.python.org/downloads/'
    },
    {
        package: 'Pip',
        link: 'https://pypi.org/project/pip/'
    },
    {
        package: 'Flask',
        link: 'https://flask.palletsprojects.com/en/3.0.x/'
    }
];

export const clientRequeriments: { package: string; link: string }[] = [
    {
        package: 'Node.js',
        link: 'https://nodejs.org/en'
    }
];

export let paths: { slug: string; href: string }[] = [
    {
        slug: 'Home',
        href: '/'
    },
    {
        slug: 'p',
        href: '/p'
    },
    {
        slug: 'Instagrapy',
        href: '/p/instagrapy'
    },
    {
        slug: 'Install',
        href: '/p/instagrapy/install'
    }
];