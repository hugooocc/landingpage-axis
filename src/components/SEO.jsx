import { Helmet } from 'react-helmet-async';

export function SEO({ title, description, url = "https://www.axisbcn.com" }) {
    const siteTitle = "Axis BCN Realty | Red Nacional de Servicios Técnicos";
    const defaultDescription = "Especialistas en reportajes fotográficos, visitas técnicas y certificados energéticos con cobertura nacional.";

    return (
        <Helmet>
            <title>{title ? `${title} | Axis BCN Realty` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta property="og:title" content={title ? `${title} | Axis BCN Realty` : siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
}
