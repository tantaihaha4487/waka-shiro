
import { getDictionary } from '@/lib/dictionary';
import LoginClient from './LoginClient';

export default async function Login({ params }: { params: Promise<{ lang: 'en' | 'th' }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return <LoginClient lang={lang} dict={dict} />;
}
