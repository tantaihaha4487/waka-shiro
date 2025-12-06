
import { getDictionary } from '@/lib/dictionary';
import CartClient from './CartClient';

export default async function Cart({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'th');
    return <CartClient lang={lang} dict={dict} />;
}
