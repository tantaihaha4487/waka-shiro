
import { getDictionary } from '@/lib/dictionary';
import LoginClient from './LoginClient';

export default async function Login({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'th');
    return <LoginClient lang={lang} dict={dict} />;
}
