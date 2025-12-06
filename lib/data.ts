
export type Product = {
    id: string;
    name: string;
    price: number;
    category: 'sweet' | 'savory';
    description: string;
    image: string;
};

export type User = {
    id: string;
    email: string;
    role: 'ADMIN' | 'CUSTOMER' | 'GUEST';
    name?: string;
};

export const products: Product[] = [
    {
        id: '1',
        name: 'Classic Red Bean',
        price: 3.50,
        category: 'sweet',
        description: 'Traditional sweet red bean paste filling in a crispy waffle shell.',
        image: 'https://images.unsplash.com/photo-1599629968754-3ef9d52b7526?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '2',
        name: 'Custard Waka',
        price: 3.75,
        category: 'sweet',
        description: 'Rich and creamy vanilla custard filling.',
        image: 'https://images.unsplash.com/photo-1618413134375-5727555fcd48?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '3',
        name: 'Matcha Shiro',
        price: 4.00,
        category: 'sweet',
        description: 'Premium matcha cream with white chocolate bits.',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '4',
        name: 'Chocolate Bliss',
        price: 3.75,
        category: 'sweet',
        description: 'Decadent dark chocolate filling.',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476d?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '5',
        name: 'Ham & Cheese',
        price: 4.50,
        category: 'savory',
        description: 'Savory ham and melted cheddar cheese.',
        image: 'https://images.unsplash.com/photo-1626202158864-1d3745672a42?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '6',
        name: 'Tuna Mayo',
        price: 4.50,
        category: 'savory',
        description: 'Japanese style tuna mayonnaise filling.',
        image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?q=80&w=800&auto=format&fit=crop',
    },
];

export const users = [
    { email: 'owner@wakashiro.com', pass: 'admin', role: 'ADMIN', name: 'Owner' },
    { email: 'user@wakashiro.com', pass: '123', role: 'CUSTOMER', name: 'Mashiro' },
];
