
import { getDictionary } from '@/lib/dictionary';
import ProfileClient from './ProfileClient';

export default async function Profile({ params }: { params: Promise<{ lang: 'en' | 'th' }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return <ProfileClient lang={lang} dict={dict} />;
}
