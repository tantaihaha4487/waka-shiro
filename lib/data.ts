
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
        price: 4.00,
        category: 'sweet',
        description: 'Classic fish-shaped cake with a crispy exterior and soft, fluffy interior.',
        description_th: 'ขนมรูปปลาในตำนาน กรอบนอกนุ่มใน หอมอร่อย',
        image: 'https://i.pinimg.com/736x/76/96/ce/7696ce58bdb8c9efa13de4eb068e667b.jpg',
    },
    {
        id: '2',
        name: 'Traditional Mochi',
        name_th: 'โมจิ',
        price: 4.50,
        category: 'sweet',
        description: 'Special original recipe. Round, soft, and chewy mochi with a fragrant charcoal aroma.',
        description_th: 'สูตรพิเศษจากต้นตำรับ โมจิก้อนกลม เหนียว นุ่ม หนึบ หอมกรุ่นกลิ่นเตาถ่าน',
        image: 'https://i.pinimg.com/736x/57/bf/79/57bf793a72265c530ee97e71c38bbc06.jpg',
    },
    {
        id: '3',
        name: 'Strawberry Daifuku',
        name_th: 'ไดฟูกุ',
        price: 5.00,
        category: 'sweet',
        description: 'Soft and chewy round rice cake filled with generous red bean paste and a juicy strawberry.',
        description_th: 'ต้าวก้อนกลมๆ เหนียวนุ่ม ถั่วแดงเต็มคำ สตอว์เบอร์รีฉ่ำ ๆ',
        image: 'https://i.pinimg.com/736x/aa/cc/8b/aacc8b5a241a406d35353c9166cd9eaf.jpg',
    },
    {
        id: '4',
        name: 'Red Bean Dorayaki',
        name_th: 'โดรายากิ',
        price: 4.00,
        category: 'sweet',
        description: 'Fluffy, fragrant pancakes sandwiching a generous filling of sweet red bean paste.',
        description_th: 'แป้งหอมนุ่ม ไส้ถั่วแดงแน่นเต็มคำ',
        image: 'https://i.pinimg.com/1200x/d4/2d/9f/d42d9fa4cce8285442ba47474dbf2d88.jpg',
    },
    {
        id: '5',
        name: 'Mitarashi Dango',
        name_th: 'ดังโงะ',
        price: 3.50,
        category: 'sweet',
        description: 'Fragrant, soft, and chewy rice dumplings glazed with our special sweet soy sauce.',
        description_th: 'หอมกรุ่น นุ่มหนึบหนึบ ราดด้วยซอสสุดพิเศษ',
        image: 'https://i.pinimg.com/1200x/5c/95/48/5c9548213487cbe879c681816850714f.jpg',
    },
    {
        id: '6',
        name: 'Charcoal Grilled Senbei',
        name_th: 'เซมเบ้',
        price: 3.00,
        category: 'savory',
        description: 'Crispy traditional rice crackers with an authentic charcoal-grilled aroma.',
        description_th: 'ข้าวเกรียบกรุบกรอบ หอมกลิ่นเตาถ่านแบบต้นตำรับ',
        image: 'https://chillchilljapan.com/wp-content/uploads/2021/08/pixta_77312295_M.jpg.webp',
    },
    {
        id: '7',
        name: 'Nagasaki Castella',
        name_th: 'นางาซากิคาสุเทะระ',
        price: 5.50,
        category: 'sweet',
        description: 'Rich and firm sponge cake, incredibly fragrant in every bite.',
        description_th: 'เนื้อแน่น หอมมมมมมมมมมมมมมกรุ่นทุกอนูของเนื้อเค้ก',
        image: 'https://i.pinimg.com/1200x/09/ea/74/09ea7422d32e8a0e0f682c6057e8d4cb.jpg',
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
        name_th: 'ธนโชติ ',
        role: 'Master Chef',
        image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800&auto=format&fit=crop',
        bio: 'With over 20 years of experience in traditional Japanese confectionery.',
    },
    {
        id: '2',
        name: 'Ranchida Sarod',
        name_th: 'รัญชิดา สาโรจน์',
        role: 'Tea Specialist',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
        bio: 'Curating the finest matcha and tea pairings for our sweets.',
    },
    {
        id: '3',
        name: 'Kanphitcha Junpun',
        name_th: 'กานต์พิชชา จันทร์พันธ์',
        role: 'Pastry Chef',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
        bio: 'Bringing a modern twist to classic recipes.',
    },
    {
        id: '4',
        name: 'Natthaya Patipatpakdee',
        name_th: 'ณัฐธยาน์ ปฏิพัทธ์ภักดี',
        role: 'Store Manager',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
        bio: 'Ensuring every customer feels the warmth of Japanese hospitality.',
    },
];