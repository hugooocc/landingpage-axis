import { Layout } from '../components/layout/Layout';
import { CollaboratorsCTA } from '../components/sections/CollaboratorsCTA';
import { ContactForm } from '../components/sections/ContactForm';
import { BadgeCheck, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

// Secondary Hero implementation internal for now as it differs slightly
function PortalHero() {
    return (
        <section className="relative min-h-[80vh] flex flex-col md:flex-row items-stretch overflow-hidden pt-20 md:pt-0">
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-16 bg-white">
                <div className="max-w-xl">
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-full">
                        Consultoría Técnica Inmobiliaria
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                        Soluciones Técnicas de <span className="text-blue-600">Cobertura Nacional</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Especialistas en la gestión integral de visitas y servicios técnicos para tasaciones. Conectamos rigor profesional con eficiencia operativa en todo el territorio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="gap-2 text-lg bg-blue-600 hover:bg-blue-700 text-white">
                            Solicitar Servicio
                            <ArrowRight className="size-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg border-blue-200 text-blue-700 hover:bg-blue-50">
                            Unirse a la Red
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 relative min-h-[400px] bg-slate-100">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcX5hd8Ji7em1Gamb-eMmuzabtJSHy9Evn74bAclq9rZqvYNXVT1yQdV1AlnNwUvYQajFlI0FqokMa9mWW-BLTL_3ycEcUzZ7uR00LeftbcMQEB1PbY15hKfYSi240lYeNb0YrDJ-m9gWoZ4yBEt9FRGB1YtOkTu9Jrw7e6SPQhEfYGhEQbfUHiO0XqdY-CU8hkHA_z8JReOBqN05Zb3uCU3m8fMrcZMJp8E3UH6t2CmFZZaxmrT8ue28O2bKfpbscO6FmYlofHMI')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white md:from-transparent via-transparent to-transparent"></div>

                <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 hidden lg:block shadow-lg">
                    <div className="flex items-center gap-4">
                        <div className="size-12 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                            <BadgeCheck className="size-6" />
                        </div>
                        <div>
                            <p className="text-slate-900 font-bold">Garantía de Calidad</p>
                            <p className="text-slate-600 text-sm italic">Cumplimiento estricto de normativa ECO y plazos de entrega.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function Portal() {
    return (
        <Layout>
            <PortalHero />
            <CollaboratorsCTA />
            <ContactForm />
        </Layout>
    );
}
