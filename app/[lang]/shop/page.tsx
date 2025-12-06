
import { getDictionary } from '@/lib/dictionary';
import ShopClient from './ShopClient';

export default async function Shop({ params }: { params: Promise<{ lang: 'en' | 'th' }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return <ShopClient lang={lang} dict={dict} />;
}
