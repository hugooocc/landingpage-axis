import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/SEO';

export default function Legal() {
    return (
        <Layout>
            <SEO title="Aviso Legal" description="Aviso Legal y Condiciones de Uso de Axis BCN Realty." />
            <div className="pt-32 pb-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-12 tracking-tight">Aviso Legal</h1>

                    <div className="prose prose-lg prose-slate max-w-none text-slate-600 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Identificación</h2>
                            <p>AXIS BCN REALTY, S.L., es titular del sitio web www.axisbcn.com.</p>
                            <p>AXIS BCN REALTY, S.L., mediante este aviso legal regula el uso del servicio de la web www.axisbcn.com que pone a disposición de los usuarios de Internet.</p>
                            <p>La utilización de la web establece la condición de usuario de la web, e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal en el momento mismo en que el usuario acceda a la web.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Protección de datos</h2>
                            <p>A través de este sitio web no se recaban datos de carácter personal de los usuarios sin su conocimiento, ni se ceden a terceros, salvo obligación legal.</p>
                            <p>Los datos personales proporcionados están protegidos de acuerdo con la legislación vigente en protección de datos de carácter personal.</p>
                            <p>Los usuarios determinan libre y voluntariamente si desean facilitar a AXIS BCN REALTY, S.L., los datos personales que se les puedan requerir o que se puedan obtener de los usuarios con ocasión de la solicitud de inscripción o de información en el website explotado por AXIS BCN REALTY, S.L., alojado en la URL www.axisbcn.com.</p>
                            <p>Los datos de carácter personal que se pudieran recabar directamente del interesado serán tratados de forma confidencial y quedarán incorporados a la correspondiente actividad de tratamiento titularidad de AXIS BCN REALTY, S.L., Cualquier persona tiene derecho a obtener confirmación sobre los tratamientos que de sus datos que se llevan a cabo en AXIS BCN REALTY, S.L.</p>
                            <p>Puede ejercer sus derechos de acceso, rectificación, supresión y portabilidad de sus datos, de limitación y oposición a su tratamiento, así como a no ser objeto de decisiones basadas únicamente en el tratamiento automatizado de sus datos, cuando procedan, enviando un correo electrónico a la dirección <strong>valoraciones@axisbcn.com</strong> o bien enviando un escrito por correo postal a la dirección: <strong>Calle Dos de Maig 202, Despacho 2, 08013 Barcelona</strong> en ambos casos debe adjuntar fotocopia del DNI, NIE o pasaporte para la comprobación de su identidad.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Propiedad intelectual e industrial</h2>
                            <p>El diseño del portal y sus códigos fuente, así como los logos, marcas y demás signos distintivos que aparecen en el mismo pertenecen a la AXIS BCN REALTY, S.L., y están protegidos por los correspondientes derechos de propiedad intelectual e industrial.</p>
                            <p>Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita previa por parte del prestador.</p>
                            <p>Cualquier uso no autorizado previamente por parte del prestador será considerado un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.</p>
                            <p>El contenido, diseño de la página web podrá ser modificado o cambiado en cualquier momento sin previo aviso.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Condiciones de uso</h2>
                            <p>Toda la información facilitada por el usuario deberá ser veraz. Con este fin, el usuario garantiza la autenticidad de todos los datos comunicados. Al mismo tiempo, será responsable de mantener permanentemente actualizada toda la información proporcionada, por lo que responda, en cualquier momento, a su situación real. El usuario será el único responsable de cualquier manifestación falsa o inexacta que haga y de los daños ocasionados.</p>
                            <p>El usuario se compromete a utilizar esta web de conformidad con la ley, y a este aviso legal. Con este fin, el usuario deberá abstenerse de utilizar cualquiera de los servicios con fines o efectos ilícitos. También de forma que pueda dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de la web, de los equipos informáticos, o de los documentos, archivos, y de toda clase de contenidos almacenados en cualquier equipo informático (hacking).</p>
                            <p>AXIS BCN REALTY, S.L., no tiene la obligación de controlar y no controla la utilización que los usuarios hacen de web, de los servicios y de los contenidos.</p>
                            <p>Concretamente, no se garantiza que los usuarios utilicen la web, los servicios y los contenidos de conformidad con el presente Aviso Legal y, en su caso, con las condiciones particulares que le son de aplicación, aunque lo hagan de forma diligente y prudente.</p>
                            <p>AXIS BCN REALTY, S.L., tampoco tiene la obligación de verificar y no verifica la identidad de los usuarios, ni la veracidad, vigencia, exhaustividad y/o autenticidad de los datos que estos proporcionan.</p>
                            <p>Sin perjuicio de lo dispuesto en materia de protección de datos personales, AXIS BCN REALTY, S.L., no garantiza la privacidad y seguridad de la utilización de la web y los servicios y, en particular, que terceros no autorizados no puedan tener conocimiento del tipo, las condiciones, las características y las circunstancias del uso que los usuarios hacen de la web.</p>
                            <p>AXIS BCN REALTY, S.L., no excluye, con toda la extensión permitida por el ordenamiento jurídico, cualquier responsabilidad por los daños y perjuicios de toda naturaleza que pudieran deberse al conocimiento que terceros no autorizados de la clase, condiciones, características y circunstancias del uso que los usuarios hacen de la web.</p>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
