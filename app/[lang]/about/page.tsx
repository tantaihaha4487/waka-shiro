
import { getDictionary } from '@/lib/dictionary';
import AboutClient from './AboutClient';

export default async function About({ params }: { params: Promise<{ lang: 'en' | 'th' }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return <AboutClient lang={lang} dict={dict} />;
}
