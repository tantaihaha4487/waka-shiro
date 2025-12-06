
import { getDictionary } from '@/lib/dictionary';
import DashboardClient from './DashboardClient';

export default async function Dashboard({ params }: { params: Promise<{ lang: 'en' | 'th' }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return <DashboardClient lang={lang} dict={dict} />;
}
