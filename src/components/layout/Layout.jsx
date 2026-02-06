import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingContact } from './FloatingContact';

export function Layout({ children }) {
    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <FloatingContact />
        </div>
    );
}
