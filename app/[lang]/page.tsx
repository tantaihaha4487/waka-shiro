
import { getDictionary } from '@/lib/dictionary';
import HomeClient from './HomeClient';

export default async function Home({ params }: { params: Promise<{ lang: 'en' | 'th' }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return <HomeClient lang={lang} dict={dict} />;
}
