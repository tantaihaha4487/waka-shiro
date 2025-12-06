
import { getDictionary } from '@/lib/dictionary';
import CheckoutClient from './CheckoutClient';

export default async function Checkout({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'th');
    return <CheckoutClient lang={lang} dict={dict} />;
}
