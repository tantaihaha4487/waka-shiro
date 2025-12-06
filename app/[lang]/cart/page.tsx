
import { getDictionary } from '@/lib/dictionary';
import CartClient from './CartClient';

export default async function Cart({ params }: { params: Promise<{ lang: 'en' | 'th' }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return <CartClient lang={lang} dict={dict} />;
}
