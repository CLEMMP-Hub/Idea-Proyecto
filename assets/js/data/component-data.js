export const componentData = {
    app: {
        title: 'App Móvil Asegurado',
        icon: 'fa-mobile-screen',
        bgColor: 'bg-cyan-500',
        func: 'Portal de autogestión. Permite visualizar pólizas activas, descargar cupones, subir frentes de póliza externos para recibir una mejora de cotización, gestionar referidos y usar el "Botón S.O.S" para siniestros.',
        tech: 'React Native, Expo, Tailwind CSS',
        scope: 'No incluye procesamiento de pagos interno (redirecciona). El reporte de siniestros captura evidencia pero no liquida el siniestro automáticamente; la resolución depende de la aseguradora.'
    },
    crm: {
        title: 'Panel Web Broker (CRM)',
        icon: 'fa-desktop',
        bgColor: 'bg-blue-500',
        func: 'Centro de comando para productores. ABMC de clientes, seguimiento de pólizas, tableros de control con métricas de ventas, gestión de siniestros y tracking del programa de referidos.',
        tech: 'React.js, Tailwind CSS, Recharts',
        scope: 'Enfoque operativo exclusivo para "Seguros CBA". No se desarrollarán módulos contables complejos, liquidación de sueldos ni integración para facturación fiscal (AFIP).'
    },
    core: {
        title: 'API Central (Core)',
        icon: 'fa-server',
        bgColor: 'bg-brand-500',
        func: 'El cerebro del ecosistema. Contiene toda la lógica de negocio, reglas de validación, automatización de notificaciones (vencimientos) y gestión de la base de datos.',
        tech: 'Python, Django REST Framework, PostgreSQL',
        scope: 'Arquitectura Single-Tenant. No se estructurará la base de datos como un SaaS comercial para vender a otros brokers, se enfocará en resolver la problemática actual.'
    },
    ia: {
        title: 'Motor de IA & Omnicanal',
        icon: 'fa-brain',
        bgColor: 'bg-purple-500',
        func: 'Asistente 24/7 integrado a WhatsApp/IG. Analiza consultas, aplica modelo RAG para Cross-selling, y utiliza Modelos de Visión (OCR+LLM) para extraer datos de pólizas de la competencia y ofrecer mejoras.',
        tech: 'N8N (Orquestador), OpenAI/Claude APIs (Vision)',
        scope: 'La IA sugiere acciones y automatiza el primer contacto. El cierre de ventas complejas y el asesoramiento legal en siniestros se deriva obligatoriamente a un humano.'
    },
    cotizador: {
        title: 'Módulo Mini-Cotizador',
        icon: 'fa-calculator',
        bgColor: 'bg-amber-500',
        func: 'Microservicio diseñado con patrón Adapter/Strategy para solicitar precios de seguros de vehículos en tiempo real a las aseguradoras.',
        tech: 'Python, REST APIs, Patrón Adapter',
        scope: 'RIESGO MITIGADO: Para no depender del multicotizador actual (en desarrollo por 3ros), este módulo aislará el proceso y se conectará solo a 2 aseguradoras para probar el flujo de la tesis.'
    },
    polizas: {
        title: 'Adapter Extracción Pólizas',
        icon: 'fa-file-shield',
        bgColor: 'bg-amber-500',
        func: 'Módulo encargado de conectarse a los portales de las compañías para descargar y sincronizar automáticamente las pólizas en formato PDF y las fechas de vigencia.',
        tech: 'Python, Scraping / Consumo APIs Privadas',
        scope: 'ALCANCE ACOTADO: La integración automática se limitará a 2-3 compañías clave. El diseño por "Adapters" garantiza que agregar las restantes a futuro no requiera modificar el Core.'
    },
    externo: {
        title: 'Sistemas Externos',
        icon: 'fa-building-columns',
        bgColor: 'bg-slate-500',
        func: 'Infraestructura de las 13 compañías de seguros (Federación Patronal, Sancor, etc.) y plataformas de cobro como MercadoPago.',
        tech: 'APIs Externas, Portales Web Legacy',
        scope: 'Fuera de nuestro control. Solo consumimos su información de pólizas o cotizaciones. Los pagos se procesan en sus servidores, eximiendo al proyecto de retenciones fiscales.'
    }
};
