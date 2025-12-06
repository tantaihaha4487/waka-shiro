
import { getDictionary } from '@/lib/dictionary';
import AboutClient from './AboutClient';

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'th');
    return <AboutClient lang={lang} dict={dict} />;
}
