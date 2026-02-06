import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10" id="contacto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 mb-8">
                            <img src="/logoaxis.png" alt="Axis BCN Realty" className="h-12 w-auto drop-shadow-sm brightness-0 invert" />
                        </div>
                        <p className="text-base leading-relaxed mb-8 pr-10 text-slate-400">
                            Líderes en consultoría inmobiliaria técnica, especializados en tasaciones, informes y certificaciones con cobertura nacional. Rigor, rapidez y profesionalidad.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="size-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all group">
                                <Globe className="size-4" />
                            </a>
                            <a href="mailto:valoraciones@axisbcn.com" className="size-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all group">
                                <Mail className="size-4" />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="lg:col-span-2">
                        <h5 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Servicios</h5>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Tasaciones</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Visitas Técnicas</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Certificados Energéticos</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Habitabilidad</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="lg:col-span-2">
                        <h5 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Empresa</h5>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Red de Técnicos</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Casos de Éxito</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Aviso Legal</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4">
                        <h5 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Contacto Directo</h5>
                        <ul className="space-y-6 text-sm font-medium">
                            <li className="flex items-start gap-4 text-slate-400">
                                <MapPin className="text-primary shrink-0" />
                                <span>Calle Dos de Maig 202, Despacho 2<br />08013 Barcelona, España</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400">
                                <Phone className="text-primary shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+34933345935" className="hover:text-primary transition-colors">+34 933 345 935</a>
                                    <a href="tel:+34690260905" className="hover:text-primary transition-colors">+34 690 260 905</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400">
                                <Mail className="text-primary shrink-0" />
                                <a href="mailto:valoraciones@axisbcn.com" className="hover:text-primary transition-colors">valoraciones@axisbcn.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-bold uppercase tracking-wider">
                    <p>© 2024 Axis BCN Realty. Consultoría Técnica Nacional.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-primary transition-colors">Cookies</a>
                        <a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
