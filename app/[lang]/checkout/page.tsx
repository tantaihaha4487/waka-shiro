
import { getDictionary } from '@/lib/dictionary';
import CheckoutClient from './CheckoutClient';

export default async function Checkout({ params }: { params: Promise<{ lang: 'en' | 'th' }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return <CheckoutClient lang={lang} dict={dict} />;
}
