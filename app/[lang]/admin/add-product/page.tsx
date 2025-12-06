
import { getDictionary } from '@/lib/dictionary';
import AddProductClient from './AddProductClient';

export default async function AddProduct({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'th');
    return <AddProductClient lang={lang} dict={dict} />;
}
