import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function IntroAnimation({ onComplete }) {
    return (
        <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-blue-100"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 2.5, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
        >
            <div className="relative flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "anticipate" }}
                    className="mb-8"
                >
                    <img src="/logoaxis.png" alt="Axis Logo" className="w-48 md:w-64 h-auto object-contain drop-shadow-2xl" />
                </motion.div>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                    className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent w-full max-w-[200px]"
                />

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-8 text-3xl md:text-5xl font-extrabold text-slate-900 tracking-widest uppercase text-center"
                >
                    Axis BCN <span className="text-primary">Realty</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="mt-4 text-slate-500 font-medium tracking-wide text-lg"
                >
                    Red Nacional de Servicios Técnicos
                </motion.p>
            </div>
        </motion.div>
    );
}
