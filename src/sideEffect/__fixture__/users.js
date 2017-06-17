const first_name = 'paul jim theo ludovik tim'.split(' ');
const last_name = 'paul jim theo ludovik tim'.split(' ');

const user = () => ({
    id_user: Math.random().toString(16),
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
    matching_products: [
        {
            id_product: 61,
            location: '1',
            category: 'speaker',
            transport: 'fixe',
            utilisation: 'music',
            price: '549,99',
            budget: '500-1000',
            product_name: 'Enceinte Bluetooth Marshall Woburn Black',
            brand: 'Marshall',
            img_url:
                'http://static.fnac-static.com/multimedia/Images/FR/NR/8c/48/60/6310028/1505-1/tsp20140926112403/Enceinte-Bluetooth-Marshall-Woburn-Black.jpg',
            desc: '',
            rate: 4,
        },
        {
            id_product: 62,
            location: '1',
            category: 'speaker',
            transport: 'fixe',
            utilisation: 'music',
            price: '549,99',
            budget: '500-1000',
            product_name: 'Enceinte Bluetooth Marshall Woburn Black',
            brand: 'beats',
            img_url:
                'http://static.fnac-static.com/multimedia/Images/FR/NR/8c/48/60/6310028/1505-1/tsp20140926112403/Enceinte-Bluetooth-Marshall-Woburn-Black.jpg',
            desc: '',
            rate: 4,
        },
        {
            id_product: 63,
            location: '1',
            category: 'speaker',
            transport: 'fixe',
            utilisation: 'music',
            price: '549,99',
            budget: '500-1000',
            product_name: 'Enceinte Bluetooth Marshall Woburn Black',
            brand: 'b&o',
            img_url:
                'http://static.fnac-static.com/multimedia/Images/FR/NR/8c/48/60/6310028/1505-1/tsp20140926112403/Enceinte-Bluetooth-Marshall-Woburn-Black.jpg',
            desc: '',
            rate: 4,
        },
        {
            id_product: 64,
            location: '1',
            category: 'speaker',
            transport: 'fixe',
            utilisation: 'music',
            price: '549,99',
            budget: '500-1000',
            product_name: 'Enceinte Bluetooth Marshall Woburn Black',
            brand: 'lg',
            img_url:
                'http://static.fnac-static.com/multimedia/Images/FR/NR/8c/48/60/6310028/1505-1/tsp20140926112403/Enceinte-Bluetooth-Marshall-Woburn-Black.jpg',
            desc: '',
            rate: 0,
        },
        {
            id_product: 65,
            location: '1',
            category: 'speaker',
            transport: 'fixe',
            utilisation: 'music',
            price: '549,99',
            budget: '500-1000',
            product_name: 'Enceinte Bluetooth Marshall Woburn Black',
            brand: 'harman',
            img_url:
                'http://static.fnac-static.com/multimedia/Images/FR/NR/8c/48/60/6310028/1505-1/tsp20140926112403/Enceinte-Bluetooth-Marshall-Woburn-Black.jpg',
            desc: '',
            rate: 0,
        },
    ],
});

export const users = Array.from({ length: 10 }, user);
