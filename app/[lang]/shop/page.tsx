
import { getDictionary } from '@/lib/dictionary';
import ShopClient from './ShopClient';

export default async function Shop({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'th');
    return <ShopClient lang={lang} dict={dict} />;
}
