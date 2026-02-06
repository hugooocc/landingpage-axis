import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export function ContactForm() {
    return (
        <section className="py-24 bg-white" id="contacto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/3"
                    >
                        <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-slate-900">Contacta con nosotros</h2>
                        <p className="text-lg text-slate-600 mb-10">Estamos a tu disposición para cualquier consulta técnica o propuesta de colaboración.</p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-xl text-primary border border-blue-100">
                                    <Mail className="size-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Departamento Técnico</h4>
                                    <p className="text-slate-600 text-sm">info@axisbcnrealty.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-xl text-primary border border-blue-100">
                                    <Phone className="size-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Teléfonos de atención</h4>
                                    <div className="flex flex-col">
                                        <a href="tel:+34933345935" className="text-slate-600 text-sm hover:text-primary transition-colors">+34 933 345 935</a>
                                        <a href="tel:+34690260905" className="text-slate-600 text-sm hover:text-primary transition-colors">+34 690 260 905</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-2/3 bg-slate-50 p-8 lg:p-12 rounded-[2.5rem] border border-slate-200 shadow-lg"
                    >
                        <form action="#" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Nombre completo</label>
                                    <input type="text" placeholder="Juan Pérez" className="w-full bg-white border border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none text-slate-900 transition-all placeholder:text-slate-400" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Email profesional</label>
                                    <input type="email" placeholder="juan@estudio.com" className="w-full bg-white border border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none text-slate-900 transition-all placeholder:text-slate-400" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Tipo de solicitud</label>
                                <div className="relative">
                                    <select className="w-full bg-white border border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none text-slate-900 transition-all appearance-none cursor-pointer">
                                        <option>Solicitar Servicio Técnico</option>
                                        <option>Candidatura Colaborador Externo</option>
                                        <option>Información General</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                        <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Mensaje</label>
                                <textarea rows="4" placeholder="Detalla tu consulta..." className="w-full bg-white border border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none text-slate-900 transition-all placeholder:text-slate-400 resize-none"></textarea>
                            </div>

                            <Button type="submit" size="lg" className="w-full text-lg py-6 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-shadow">
                                Enviar mensaje
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
