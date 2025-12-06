import { getDictionary } from '@/lib/dictionary';
import DashboardClient from './DashboardClient';

export default async function Dashboard({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'th');
    return <DashboardClient lang={lang} dict={dict} />;
}
