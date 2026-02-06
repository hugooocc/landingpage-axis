import { Globe2, History, Timer, Users } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ value, suffix = "", prefix = "" }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = prefix + Math.floor(latest) + suffix;
            }
        });
    }, [springValue, prefix, suffix]);

    return <span ref={ref} />;
}

export function Stats() {
    const stats = [
        {
            icon: <Globe2 className="size-8" />,
            value: 100,
            prefix: "",
            suffix: "%",
            label: "Cobertura Nacional"
        },
        {
            icon: <History className="size-8" />,
            value: 15,
            prefix: "+",
            suffix: " Años",
            label: "Experiencia"
        },
        {
            icon: <Timer className="size-8" />,
            value: 24,
            prefix: "",
            suffix: "h/48h",
            label: "Plazo de entrega"
        },
        {
            icon: <Users className="size-8" />,
            value: 500,
            prefix: "+",
            suffix: "",
            label: "Colaboradores"
        }
    ];

    return (
        <section className="bg-white py-16 border-b border-blue-100 relative z-30 -mt-10 rounded-t-[2.5rem] md:mt-0 md:rounded-none shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ y: -5 }}
                            className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                        >
                            <div className="size-14 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-3xl font-extrabold text-slate-900 flex items-baseline">
                                    <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                </p>
                                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
