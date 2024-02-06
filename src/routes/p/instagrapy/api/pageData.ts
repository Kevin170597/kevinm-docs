export const onThisPageLinks = [
    {
        slug: 'Base URL.',
        href: '#base-url'
    },
    {
        slug: 'Scheduled posts.',
        href: '#scheduled-posts',
        sublinks: [
            {
                slug: 'Get all scheduled posts.',
                href: '#get-all-scheduled-posts'
            },
            {
                slug: 'Get scheduled post.',
                href: '#get-one-scheduled-post'
            },
            {
                slug: 'Get scheduled post by ID.',
                href: '#get-one-scheduled-post-by-id'
            },
            {
                slug: 'Add a scheduled post.',
                href: '#add-a-scheduled-post'
            },
            {
                slug: 'Update a scheduled post.',
                href: '#update-a-scheduled-post'
            },
            {
                slug: 'Delete a scheduled post.',
                href: '#delete-a-scheduled-post'
            }
        ]
    },
    {
        slug: 'Instagram actions.',
        href: '#instagram-actions',
        sublinks: [
            {
                slug: 'Login.',
                href: '#ig-login'
            },
            {
                slug: 'Post Photo.',
                href: '#post-photo'
            },
            {
                slug: 'Post Album.',
                href: '#post-album'
            },
            {
                slug: 'Post Story.',
                href: '#post-story'
            },
            {
                slug: 'Post Reel.',
                href: '#post-reel'
            }
        ]
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
        slug: 'API',
        href: '/p/instagrapy/api'
    }
];