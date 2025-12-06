
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { owners } from "@/lib/data";

export default function Footer({ lang, dict }: { lang: string, dict: any }) {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content flex flex-wrap justify-center items-center gap-10">
            <aside className="flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold text-primary mb-2">Waka-Shiro</h2>
                <p className="font-medium">
                    {dict.home.heroTitle}<br />
                    {dict.home.heroSubtitle}
                </p>
            </aside>
            <nav className="flex flex-col items-center">
                <h6 className="footer-title">{lang === 'th' ? 'ทีมงาน' : 'Our Team'}</h6>
                <div className="flex flex-wrap gap-3 justify-center max-w-md">
                    {owners.map((owner) => (
                        <div key={owner.id} className="flex flex-col items-center gap-1">
                            <div className="avatar placeholder tooltip" data-tip={lang === 'th' ? owner.name_th : owner.name}>
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12 ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                                    <img src={owner.image} alt={lang === 'th' ? owner.name_th : owner.name} className="object-cover" />
                                </div>
                            </div>
                            <span className="text-xs text-center max-w-[80px] truncate">{lang === 'th' ? owner.name_th : owner.name}</span>
                        </div>
                    ))}
                </div>
            </nav>
            <nav className="flex flex-col items-center">
                <h6 className="footer-title">{lang === 'th' ? 'โซเชียล' : 'Social'}</h6>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Facebook /></a>
                </div>
            </nav>
        </footer>
    );
}
