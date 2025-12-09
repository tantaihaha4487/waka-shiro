
export type Product = {
    id: string;
    name: string;
    name_th: string;
    price: number;
    category: 'sweet' | 'savory';
    description: string;
    description_th: string;
    image: string;
};

export type User = {
    id: string;
    email: string;
    role: 'ADMIN' | 'CUSTOMER' | 'GUEST';
    name?: string;
    name_th?: string;
};

export type Owner = {
    id: string;
    name: string;
    name_th: string;
    role: string;
    image: string;
    bio: string;
};

export const products: Product[] = [
    {
        id: '1',
        name: 'Signature Taiyaki',
        name_th: 'ไทยากิ',
        price: 50.00,
        category: 'sweet',
        description: 'Classic fish-shaped cake with a crispy exterior and soft, fluffy interior.',
        description_th: 'ขนมรูปปลาในตำนาน กรอบนอกนุ่มใน หอมอร่อย',
        image: 'https://i.pinimg.com/736x/76/96/ce/7696ce58bdb8c9efa13de4eb068e667b.jpg',
    },
    {
        id: '2',
        name: 'Traditional Mochi',
        name_th: 'โมจิ',
        price: 25.00,
        category: 'sweet',
        description: 'Special original recipe. Round, soft, and chewy mochi with a fragrant charcoal aroma.',
        description_th: 'สูตรพิเศษจากต้นตำรับ โมจิก้อนกลม เหนียว นุ่ม หนึบ หอมกรุ่นกลิ่นเตาถ่าน',
        image: 'https://i.pinimg.com/736x/57/bf/79/57bf793a72265c530ee97e71c38bbc06.jpg',
    },
    {
        id: '3',
        name: 'Strawberry Daifuku',
        name_th: 'ไดฟูกุ',
        price: 120.00,
        category: 'sweet',
        description: 'Soft and chewy round rice cake filled with generous red bean paste and a juicy strawberry.',
        description_th: 'ต้าวก้อนกลมๆ เหนียวนุ่ม ถั่วแดงเต็มคำ สตอว์เบอร์รีฉ่ำ ๆ',
        image: 'https://i.pinimg.com/736x/aa/cc/8b/aacc8b5a241a406d35353c9166cd9eaf.jpg',
    },
    {
        id: '4',
        name: 'Red Bean Dorayaki',
        name_th: 'โดรายากิ',
        price: 180.00,
        category: 'sweet',
        description: 'Fluffy, fragrant pancakes sandwiching a generous filling of sweet red bean paste.',
        description_th: 'แป้งหอมนุ่ม ไส้ถั่วแดงแน่นเต็มคำ',
        image: 'https://i.pinimg.com/1200x/d4/2d/9f/d42d9fa4cce8285442ba47474dbf2d88.jpg',
    },
    {
        id: '5',
        name: 'Mitarashi Dango',
        name_th: 'ดังโงะ',
        price: 109.00,
        category: 'sweet',
        description: 'Fragrant, soft, and chewy rice dumplings glazed with our special sweet soy sauce.',
        description_th: 'หอมกรุ่น นุ่มหนึบหนึบ ราดด้วยซอสสุดพิเศษ',
        image: 'https://i.pinimg.com/1200x/5c/95/48/5c9548213487cbe879c681816850714f.jpg',
    },
    {
        id: '6',
        name: 'Charcoal Grilled Senbei',
        name_th: 'เซมเบ้',
        price: 99.00,
        category: 'savory',
        description: 'Crispy traditional rice crackers with an authentic charcoal-grilled aroma.',
        description_th: 'ข้าวเกรียบกรุบกรอบ หอมกลิ่นเตาถ่านแบบต้นตำรับ',
        image: 'https://chillchilljapan.com/wp-content/uploads/2021/08/pixta_77312295_M.jpg.webp',
    },
    {
        id: '7',
        name: 'Nagasaki Castella',
        name_th: 'นางาซากิคาสุเทะระ',
        price: 75.00,
        category: 'sweet',
        description: 'Rich and firm sponge cake, incredibly fragrant in every bite.',
        description_th: 'เนื้อแน่น หอมมมมมมมมมมมมมมกรุ่นทุกอนูของเนื้อเค้ก',
        image: 'https://i.pinimg.com/1200x/09/ea/74/09ea7422d32e8a0e0f682c6057e8d4cb.jpg',
    },
    {
        id: '8',
        name: 'Japanese Crepe',
        name_th: 'เครป',
        price: 65.00,
        category: 'sweet',
        description: 'Soft crepe filled with generous whipped cream and delicious fillings.',
        description_th: 'แป้งนุ่ม วิปครีมก้อนโต อัดแน่นไปด้วยไส้เลิศรส',
        image: 'https://i.pinimg.com/1200x/3c/66/90/3c6690a02da7ab49fe543a1e9a2249de.jpg',
    },
    {
        id: '9',
        name: 'Obanyaki',
        name_th: 'โอปันยากิ',
        price: 60.00,
        category: 'sweet',
        description: 'Soft fluffy cake with packed sweet filling inside.',
        description_th: 'แป้งนุ่ม ไส้อัดแน่น หวานฉ่ำ',
        image: 'https://www.daco-thai.com/wp-content/uploads/2021/03/frozen-imagawayaki-2.jpeg',
    },
    {
        id: '10',
        name: 'Tamagoyaki',
        name_th: 'ไข่หวานย่างเสียบไม้',
        price: 20.00,
        category: 'savory',
        description: 'Special recipe sweet egg grilled on skewers with fragrant charcoal aroma.',
        description_th: 'ไข่หวานเนียนนุ่มสูตรพิเศษ ย่างเตาหอมกรุ่น',
        image: 'https://img.wongnai.com/p/400x0/2020/01/20/1e4dbd41d04647b9a88de596951222fb.jpg',
    }
];

export const users = [
    { email: 'owner@wakashiro.com', pass: 'admin', role: 'ADMIN', name: 'Owner' },
    { email: 'user@wakashiro.com', pass: '123', role: 'CUSTOMER', name: 'Mashiro' },
];

export const owners: Owner[] = [
    {
        id: '1',
        name: 'Thanachot Phomthong',
        name_th: 'ธนโชติ พรมทอง',
        role: 'Master Chef',
        image: '/owner/Thanachot.png',
        bio: 'With over 20 years of experience in traditional Japanese confectionery.',
    },
    {
        id: '2',
        name: 'Ranchida Sarod',
        name_th: 'รัญชิดา สาโรจน์',
        role: 'Tea Specialist',
        image: '/owner/Ranchida.jpg',
        bio: 'Curating the finest matcha and tea pairings for our sweets.',
    },
    {
        id: '3',
        name: 'Kanphitcha Junpun',
        name_th: 'กานต์พิชชา จันทร์พันธ์',
        role: 'Pastry Chef',
        image: '/owner/Kanphitcha.JPG',
        bio: 'Bringing a modern twist to classic recipes.',
    },
    {
        id: '4',
        name: 'Natthaya Patipatpakdee',
        name_th: 'ณัฐธยาน์ ปฏิพัทธ์ภักดี',
        role: 'Store Manager',
        image: '/owner/Natthaya.jpg',
        bio: 'Ensuring every customer feels the warmth of Japanese hospitality.',
    },
];