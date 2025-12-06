
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer({ lang, dict }: { lang: string, dict: any }) {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <aside>
                <h2 className="text-3xl font-bold text-primary mb-2">Waka-Shiro</h2>
                <p className="font-medium">
                    {dict.home.heroTitle}<br />
                    {dict.home.heroSubtitle}
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Facebook /></a>
                </div>
            </nav>
        </footer>
    );
}
