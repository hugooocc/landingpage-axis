import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function CollaboratorsCTA() {
    return (
        <section className="py-24 bg-blue-600 text-white" id="colaboradores">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-[2.5rem] p-12 lg:p-20 border border-white/20 flex flex-col lg:flex-row items-center gap-16">

                    <div className="lg:w-1/2">
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight text-white">
                            Estudios Profesionales &amp; <span className="text-blue-200">Arquitectos Técnicos</span>
                        </h2>
                        <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                            Buscamos ampliar nuestra red con profesionales cualificados en toda España. Si eres arquitecto técnico o tienes un estudio profesional, Axis BCN Realty es tu socio logístico ideal.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            {[
                                "Flujo constante de encargos",
                                "Soporte técnico normativo",
                                "Plataforma de gestión propia",
                                "Facturación centralizada"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="text-blue-200 shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 border-transparent font-bold text-lg px-8 py-6 h-auto rounded-xl shadow-lg">
                            Registrarme como Colaborador
                        </Button>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWe7Ub9J0g6B5CTunRte8OCcI19V8KW7wfDWzXX0i63hKdA_jKtEimT0fVIUcswwGHjjBoO1UJ7SvMA8g8TXBSlOv08Dv515oLQqIpM7Nq5TZWngv2A-DN1_Gont1gkAY3TvZuojqazcXtf-es7Xc-nCiNg4EGabI1P998lMo3dzZDxRtjkArY6pIk9zg6I9PvmG568eGatY9b0bQik_K_fxt4wDBmyh5nbt5TlVFRKH7igeqlDWfQTRk-MgoAAdlaD6YMQy-lIZ8"
                                alt="Technical work"
                                className="w-full h-auto object-cover rounded-2xl shadow-2xl mt-8 transform hover:-translate-y-2 transition-transform duration-500"
                            />
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbHeMCgQ_8kAsus9tGIQOl483QtaYn_fUaPzHhHtPhZ0lZdWbJmt7jX9WY2O27V0CUzXlWYcSr9mQhrU5uzQYJGFkANwTXrtLgRVvdKXahFUUGFxOezX5RtdRoLgwRN-7oq6xmISKT4T1xAhlGL1FOF9E6HRNjn4hKNW58nMk5bM_gKKjldB_RM97QO_sVzFkI4N_VtxrgNSMO06sTlCZVKq6qUPgAbgmxKMwmjHXd_pug9rFP3W_yYqRzIIRpA0KoNkLBmkK5Wz4"
                                alt="Construction detail"
                                className="w-full h-auto object-cover rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 delay-100"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                            <p className="text-4xl font-extrabold text-blue-600">+500</p>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Técnicos activos</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
