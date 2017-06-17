const first_name = 'paul jim theo ludovik tim'.split(' ');
const last_name = 'paul jim theo ludovik tim'.split(' ');

const product = () => ({
    id_product: Math.random().toString(16),
    location: Math.floor(Math.random() * 3).toString(),
    category: 'speaker',
    transport: ['fixe', 'transportable', null][Math.floor(Math.random() * 3)],
    utilisation: ['music', 'movie', 'both'][Math.floor(Math.random() * 3)],
    price: '549,99',
    budget: '500-1000',
    product_name: 'Enceinte Bluetooth Marshall Woburn Black',
    brand: ['b&o', 'Marshall', 'dell', 'beats'][Math.floor(Math.random() * 4)],
    img_url:
        'http://static.fnac-static.com/multimedia/Images/FR/NR/8c/48/60/6310028/1505-1/tsp20140926112403/Enceinte-Bluetooth-Marshall-Woburn-Black.jpg',
    desc: '',
    rate: Math.floor(Math.random() * 5),
});

const search = () => ({
    category: 'speaker',
    transport: ['fixe', 'transportable', null][Math.floor(Math.random() * 3)],
    utilisation: ['music', 'movie', 'both'][Math.floor(Math.random() * 3)],
    location: ['speaker', 'tv', 'book'][Math.floor(Math.random() * 3)],
    budget: [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100) + 100,
    ].join('-'),
    emotion: Math.floor(Math.random() * 3).toString(),
});

const user = () => ({
    id_user: Math.random().toString(16),
    first_name: first_name[Math.floor(Math.random() * first_name.length)],
    last_name: first_name[Math.floor(Math.random() * last_name.length)],
    gender: 'm',
    profile_pic:
        'http://25.media.tumblr.com/tumblr_lzcdj8TjeQ1qamec9o1_1280.jpg',
    searches: Array.from({ length: 10 }, search),
    status: {
        is_taken: false,
        taken_by: null,
        open: true,
    },
    matching_products: Array.from({ length: 10 }, product),
});

export const users = Array.from({ length: 30 }, user);
