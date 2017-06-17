const first_name = 'paul jim theo ludovik tim'.split(' ');
const last_name = 'paul jim theo ludovik tim'.split(' ');

const user = () => ({
    sender_id: Math.random().toString(16),
    first_name: first_name[Math.floor(Math.random() * first_name.length)],
    last_name: first_name[Math.floor(Math.random() * last_name.length)],
    gender: 'm',
    profile_pic:
        'http://25.media.tumblr.com/tumblr_lzcdj8TjeQ1qamec9o1_1280.jpg',
    search: {
        location: {
            category: 'audio',
        },
        usage: 'home',
        price: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100) + 100,
        ].join('-'),
        category: 'speaker',
        type2: 'portableSpeaker',
        emotion: Math.floor(Math.random() * 3).toString(),
    },
    status: {
        is_taken: false,
        taken_by: null,
        open: true,
    },
    matching_products: [],
});

export const users = Array.from({ length: 10 }, user);
