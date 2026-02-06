import { Monitor, Camera, Zap, Home, Network, Headphones, Image, FileImage, Map } from 'lucide-react';
import { motion } from 'framer-motion';

export function Services() {
    const services = [
        {
            icon: <Camera className="size-8" />,
            title: "Reportajes Fotográficos",
            description: "Fotografía profesional de interiores y exteriores para inmobiliarias, fondos de inversión y particulares.",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            icon: <Map className="size-8" />,
            title: "Visitas Técnicas",
            description: "Inspecciones oculares para verificar el estado de ocupación, conservación y características del inmueble.",
            color: "text-indigo-600",
            bg: "bg-indigo-50"
        },
        {
            icon: <Zap className="size-8" />,
            title: "Certificados Energéticos",
            description: "Toma de datos y realización del CEE mediante visita técnica presencial.",
            color: "text-sky-600",
            bg: "bg-sky-50"
        },
        {
            icon: <Home className="size-8" />,
            title: "Cédulas de Habitabilidad",
            description: "Comprobación de condiciones de habitabilidad y tramitación de cédulas.",
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        },
        {
            icon: <Network className="size-8" />,
            title: "Red Nacional",
            description: "Coordinamos una extensa red de técnicos locales para cubrir cualquier código postal del país.",
            color: "text-violet-600",
            bg: "bg-violet-50"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="servicios">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-50/50 rounded-full blur-[120px] opacity-40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
                        Nuestra Especialización
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Servicios Técnicos Inmobiliarios
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Especialistas en la gestión de visitas y reportajes fotográficos a nivel nacional.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ y: -10 }}
                            className="group p-10 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/5 relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 ${service.color}`}>
                                {service.icon}
                            </div>

                            <div className={`size-16 rounded-2xl flex items-center justify-center mb-8 ${service.bg} ${service.color} transition-transform group-hover:scale-110 duration-300 shadow-sm shadow-blue-100`}>
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* Special CTA Card */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ scale: 1.02 }}
                        className="group p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 hover:border-primary transition-all duration-300 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-0 mix-blend-overlay"></div>

                        <div className="relative z-10">
                            <span className="text-5xl mb-6 block">📸</span>
                            <h4 className="text-2xl font-bold mb-4">Solicitar Reportaje</h4>
                            <p className="text-slate-400 mb-8 font-medium">¿Necesita fotos de un inmueble en cualquier punto de España?</p>
                            <a href="#contacto" className="w-full bg-white text-slate-900 hover:bg-blue-50 font-bold py-3 rounded-xl inline-block transition-colors">Contactar Ahora</a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
