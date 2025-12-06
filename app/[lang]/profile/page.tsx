
import { getDictionary } from '@/lib/dictionary';
import ProfileClient from './ProfileClient';

export default async function Profile({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'th');
    return <ProfileClient lang={lang} dict={dict} />;
}
