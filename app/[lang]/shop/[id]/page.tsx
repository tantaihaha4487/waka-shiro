
import { getDictionary } from '@/lib/dictionary';
import ProductDetailClient from './ProductDetailClient';

export default async function ProductDetail({ params }: { params: Promise<{ lang: string; id: string }> }) {
    const { lang, id } = await params;
    const dict = await getDictionary(lang as 'en' | 'th');
    return <ProductDetailClient lang={lang} dict={dict} id={id} />;
}
