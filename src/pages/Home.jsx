import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { Services } from '../components/sections/Services';
import { About } from '../components/sections/About';
import { ContactForm } from '../components/sections/ContactForm';
import { IntroAnimation } from '../components/layout/IntroAnimation';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <>
            <AnimatePresence>
                {showIntro && (
                    <IntroAnimation onComplete={() => setShowIntro(false)} />
                )}
            </AnimatePresence>

            <Layout>
                <Hero />
                <Stats />
                <Services />
                <About />
                <ContactForm />
            </Layout>
        </>
    );
}
