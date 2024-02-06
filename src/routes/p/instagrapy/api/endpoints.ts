type Color = 'gray' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
type Path = {
    slug: string,
    color: Color
}

type Params = {
    name: string,
    value: string
}

type Endpoints = {
    title: string,
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
    methodColor: Color,
    path: Path[],
    params?: Params[],
    body?: any,
    response: string
}

export const endpoints: Endpoints[] = [
    {
        title: 'Get all scheduled posts.',
        method: 'GET',
        methodColor: 'success',
        path: [
            {
                slug: 'type/',
                color: 'success'
            },
            {
                slug: 'username/',
                color: 'secondary'
            },
            {
                slug: 'all',
                color: 'gray'
            }
        ],
        params: [
            {
                name: 'type',
                value: 'album | photo | reel | story'
            },
            {
                name: 'username',
                value: 'Instagrapy username'
            }
        ],
        body: null,
        response: `[
    {
        "_id": "656137111678a4f05dbbd3df",
        "caption": "Do you remember the first time you were here?\n\n#bullyscholarshipedition #jimmyhopkins #caniscanemedit #bully",
        "createdAt": "Fri, 24 Nov 2023 23:51:45 GMT",
        "day": "07/01/2024",
        "hour": "19:00",
        "posted": false,
        "type": "album",
        "updatedAt": "Fri, 24 Nov 2023 23:51:45 GMT",
        "urls": [
            "https://raw.githubusercontent.com/Kevin170597/my-drive/main/bullworth.pics/6HNv5.jpg",
            "https://raw.githubusercontent.com/Kevin170597/my-drive/main/bullworth.pics/5o0Lx.jpg",
            "https://raw.githubusercontent.com/Kevin170597/my-drive/main/bullworth.pics/mwZHo.jpg"
        ],
        "userid": "60843199231",
        "username": "bullworth.pics"
    },
    {...}
]`
    },
    {
        title: 'Get one scheduled post.',
        method: 'GET',
        methodColor: 'success',
        path: [
            {
                slug: 'type/',
                color: 'success'
            },
            {
                slug: 'username/',
                color: 'secondary'
            },
            {
                slug: '?day=DD/MM/YYYY&hour=00:00',
                color: 'warning'
            }
        ],
        params: [
            {
                name: 'type',
                value: 'album | photo | reel | story'
            },
            {
                name: 'username',
                value: 'Instagrapy username'
            },
            {
                name: 'day',
                value: 'Formatted day.'
            },
            {
                name: 'hour',
                value: 'Formatted hour.'
            }
        ],
        body: null,
        response: `{
    "_id": "656137111678a4f05dbbd3df",
    "caption": "Do you remember the first time you were here?\n\n#bullyscholarshipedition #jimmyhopkins #caniscanemedit #bully",
    "createdAt": "Fri, 24 Nov 2023 23:51:45 GMT",
    "day": "07/01/2024",
    "hour": "19:00",
    "posted": false,
    "type": "album",
    "updatedAt": "Fri, 24 Nov 2023 23:51:45 GMT",
    "urls": [
        "https://raw.githubusercontent.com/Kevin170597/my-drive/main/bullworth.pics/6HNv5.jpg",
        "https://raw.githubusercontent.com/Kevin170597/my-drive/main/bullworth.pics/5o0Lx.jpg",
        "https://raw.githubusercontent.com/Kevin170597/my-drive/main/bullworth.pics/mwZHo.jpg"
    ],
    "userid": "60843199231",
    "username": "bullworth.pics"
}`
    },
    {
        title: 'Get one scheduled post by ID.',
        method: 'GET',
        methodColor: 'success',
        path: [
            {
                slug: 'type/',
                color: 'success'
            },
            {
                slug: 'username/',
                color: 'secondary'
            },
            {
                slug: 'id',
                color: 'warning'
            }
        ],
        params: [
            {
                name: 'type',
                value: 'album | photo | reel | story'
            },
            {
                name: 'username',
                value: 'Instagrapy username'
            },
            {
                name: 'id',
                value: 'Scheduled post id.'
            }
        ],
        body: null,
        response: `{
    "_id": "656137111678a4f05dbbd3df",
    "caption": "Do you remember the first time you were here?\n\n#bullyscholarshipedition #jimmyhopkins #caniscanemedit #bully",
    "createdAt": "Fri, 24 Nov 2023 23:51:45 GMT",
    "day": "07/01/2024",
    "hour": "19:00",
    "posted": false,
    "type": "album",
    "updatedAt": "Fri, 24 Nov 2023 23:51:45 GMT",
    "urls": [
        "https://raw.githubusercontent.com/Kevin170597/my-drive/main/bullworth.pics/6HNv5.jpg",
        "https://raw.githubusercontent.com/Kevin170597/my-drive/main/bullworth.pics/5o0Lx.jpg",
        "https://raw.githubusercontent.com/Kevin170597/my-drive/main/bullworth.pics/mwZHo.jpg"
    ],
    "userid": "60843199231",
    "username": "bullworth.pics"
}`
    },
    {
        title: 'Add a scheduled post.',
        method: 'POST',
        methodColor: 'secondary',
        path: [
            {
                slug: 'type/',
                color: 'success'
            },
            {
                slug: 'username/',
                color: 'secondary'
            },
            {
                slug: 'add',
                color: 'gray'
            }
        ],
        params: [
            {
                name: 'type',
                value: 'album | photo | reel | story'
            },
            {
                name: 'username',
                value: 'Instagrapy username'
            }
        ],
        body: `{
    day: "12/12/2023",
    hour: "17:00",
    type: "album",
    username: "bullworth.pics",
    url: "https://raw.githubusercontent.com/Kevin170597/my-drive/main/bullworth.pics/pppqqq.jpg"
}`,
        response: `{
    "_id": "659b301c6d1caf2b5922381b"
}`
    },
    {
        title: 'Update a scheduled post.',
        method: 'PATCH',
        methodColor: 'warning',
        path: [
            {
                slug: 'type/',
                color: 'success'
            },
            {
                slug: 'update/',
                color: 'gray'
            },
            {
                slug: 'id',
                color: 'warning'
            }
        ],
        params: [
            {
                name: 'type',
                value: 'album | photo | reel | story'
            },
            {
                name: 'id',
                value: 'Scheduled post id'
            }
        ],
        body: `{
    caption: 'new caption'
}`,
        response: `{
    "_id": "659b301c6d1caf2b5922381b"
}`
    },
    {
        title: 'Delete a scheduled post.',
        method: 'DELETE',
        methodColor: 'danger',
        path: [
            {
                slug: 'type/',
                color: 'success'
            },
            {
                slug: 'delete/',
                color: 'gray'
            },
            {
                slug: 'id',
                color: 'warning'
            }
        ],
        params: [
            {
                name: 'type',
                value: 'album | photo | reel | story'
            },
            {
                name: 'id',
                value: 'Scheduled post id'
            }
        ],
        body: null,
        response: `{
    "deleted_count": 0
}`
    }
]