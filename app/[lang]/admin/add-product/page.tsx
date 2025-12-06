
import { getDictionary } from '@/lib/dictionary';
import AddProductClient from './AddProductClient';

export default async function AddProduct({ params }: { params: Promise<{ lang: 'en' | 'th' }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return <AddProductClient lang={lang} dict={dict} />;
}
