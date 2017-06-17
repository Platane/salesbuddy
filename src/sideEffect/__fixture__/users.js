const firstName = 'paul jim theo ludovik tim'.split(' ');
const lastName = 'paul jim theo ludovik tim'.split(' ');

const user = () => ({
    sender_id: Math.random().toString(16),
    firstname: firstName[Math.floor(Math.random() * firstName.length)],
    lastname: firstName[Math.floor(Math.random() * lastName.length)],
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
        type: 'speaker',
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
