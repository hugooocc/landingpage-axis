import { Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
    return (
        <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden" id="nosotros">
            {/* Background Blobs - Mirroring Services but varied */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[120px] opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
                            Información de Oficina
                        </div>
                        <h4 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Presencia en el Corazón de Barcelona</h4>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            En Axis BCN Realty operamos desde nuestras oficinas centrales coordinando nuestra red nacional de técnicos para realizar reportajes fotográficos y visitas técnicas en todo el país.
                        </p>

                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6 hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <Clock className="text-primary mt-1 size-6" />
                                <div>
                                    <h5 className="font-bold text-slate-900 mb-2 text-lg">Horario de Oficina</h5>
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-600">
                                        <span className="font-medium">Lunes - Jueves</span>
                                        <span>09:00 - 14:00 | 15:30 - 18:30</span>
                                        <span className="font-medium">Viernes</span>
                                        <span>09:00 - 15:00</span>
                                        <span className="font-medium">Sábados - Domingos</span>
                                        <span className="text-slate-400 italic">Cerrado</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual/Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-full min-h-[400px]"
                    >
                        <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://maps.google.com/maps?q=Carrer+de+Dos+de+Maig,+202,+08013+Barcelona&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                title="Ubicación Axis BCN Realty"
                                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
