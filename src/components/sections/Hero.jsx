import { ArrowRight, BadgeCheck } from 'lucide-react';
import { Button } from '../ui/Button'; // Assuming Button is used effectively, or kept for consistency if needed, though mostly using <a> tag in prev code
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/70 to-blue-900/30 z-10"></div>
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYRKqj28-Np2641MY1MuEJYe8mMlrweNKLTKNQyIrtlkKrlOeUHsSSG5pWlt3API9LY26YECDoQtbt63ATYM6vJJ6nqzav8Ea37JvLZvvB_FCRRgw1GRVh-erMwhfQrVaxAhcMsCRN6YGNJzncUkGpJtVK_QLLduaUUgtVo25hJtcXQ5E1fl-Rlhja13iSoA3JqBlchHTyuzh796Dm8S0PFj2jyHJDyR87GNuKVJIRTeKg1okS69QVbemRIy0bMAyYpOcxYsjbXSk"
                    alt="Barcelona Architecture"
                    className="w-full h-full object-cover mix-blend-overlay opacity-60"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 mb-8 backdrop-blur-md shadow-lg"
                    >
                        <BadgeCheck className="size-4 text-primary-light" />
                        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-50">Especialistas en Reportajes Técnicos</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-8 tracking-tight drop-shadow-xl"
                    >
                        Red Nacional de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Técnicos</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-2xl md:text-4xl font-bold text-blue-100 mb-8 tracking-tight drop-shadow-md"
                    >
                        Reportajes Fotográficos y Visitas Técnicas
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl font-medium drop-shadow-md"
                    >
                        Realizamos todo tipo de reportajes fotográficos y visitas a inmuebles en toda España mediante nuestra amplia red de técnicos.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-5"
                    >
                        <a href="#contacto" className="inline-flex items-center justify-center gap-2 min-w-[220px] bg-primary hover:bg-primary-dark text-white py-4 px-10 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/25 hover:scale-105 active:scale-95">
                            Solicitar Servicio
                            <ArrowRight className="size-5" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
