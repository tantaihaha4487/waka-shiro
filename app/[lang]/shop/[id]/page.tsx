
import { getDictionary } from '@/lib/dictionary';
import ProductDetailClient from './ProductDetailClient';

export default async function ProductDetail({ params }: { params: Promise<{ lang: 'en' | 'th', id: string }> }) {
    const { lang, id } = await params;
    const dict = await getDictionary(lang);
    return <ProductDetailClient lang={lang} dict={dict} id={id} />;
}
