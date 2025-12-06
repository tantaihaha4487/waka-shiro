
import { getDictionary } from '@/lib/dictionary';
import HomeClient from './HomeClient';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'th');
    return <HomeClient lang={lang} dict={dict} />;
}
