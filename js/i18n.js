/**
 * KairoLabs — i18n (ES / EN)
 * Producto de Aether System · Curso 1ASI0732 Diseño de Experimentos (UPC)
 */
(function () {
    const STORAGE_KEY = 'kairolabs_lang';

    const TRANSLATIONS = {
        es: {
            lang_group_aria: 'Seleccionar idioma',
            meta_title: 'KairoLabs',
            meta_desc:
                'KairoLabs — Monitoreo IoT en tiempo real para medicamentos por Aether System (UPC). Curso Diseño de Experimentos 1ASI0732.',
            nav_inicio: 'Inicio',
            nav_tecnologia: 'Tecnología',
            nav_sectores: 'Sectores',
            nav_nosotros: 'Nosotros',
            nav_equipo: 'Equipo',
            nav_planes: 'Planes',
            nav_cta: 'Comienza ahora',
            footer_nav_contact: 'Contacto',
            hero_tagline: 'Conservación farmacéutica · IoT',
            hero_title: 'Alertas en tiempo real para hospitales, farmacias y distribución',
            hero_desc:
                'Temperatura, humedad y luz bajo control: menos merma, más trazabilidad y cumplimiento DIGEMID/MINSA.',
            hero_btn_login: '¡Comienza hoy mismo!',
            mosaic_kicker: 'Resultados esperados',
            mosaic_title: 'Toma decisiones más inteligentes en tu almacén y reduce el riesgo operativo.',
            mosaic_s1v: '< 5 min',
            mosaic_s1l: 'Tiempo de respuesta ante una alerta',
            mosaic_s2v: '24/7',
            mosaic_s2l: 'Telemetría de temperatura, humedad y luz',
            mosaic_s3v: '+30%',
            mosaic_s3l: 'Mejora de trazabilidad en los primeros 6 meses',
            mosaic_s4v: '100%',
            mosaic_s4l: 'Históricos auditables para DIGEMID / MINSA',
            mosaic_eyebrow: 'Una recomendación de KairoLabs',
            mosaic_h3: 'Nunca enfrentes una desviación crítica solo',
            mosaic_p: 'Cuando una condición ambiental se sale de rango, KairoLabs conecta los datos de tu sede, evalúa la situación y te ayuda a responder más rápido con alertas accionables.',
            mosaic_btn: 'Explorar la plataforma',
            yt_caption: 'Mira cómo funciona KairoLabs<br>en tu almacén',
            yt_plus_h: '¿Listo para ver KairoLabs en acción?',
            yt_plus_p: 'No reproduzcas el video todavía: ve directo a la plataforma y obtén el producto para tu almacén.',
            yt_plus_btn: 'Obtener la app',
            yt_plus_close: 'Cerrar',
            float_h1: 'Control de Temperatura',
            float_p1:
                'Monitoreo continuo de temperatura para biológicos y vacunas que requieren cadena de frío.',
            float_h2: 'Humedad y Luz',
            float_p2:
                'Control de humedad relativa y exposición lumínica para evitar degradación química.',
            float_h3: 'Trazabilidad Total',
            float_p3: 'Registros históricos para auditorías y cumplimiento normativo DIGEMID/MINSA.',
            about_innov: 'Diseño de Experimentos',
            about_tag: 'EL PROYECTO',
            about_kicker: 'El proyecto',
            about_partners_kicker: 'Marco regulatorio',
            about_partners_html: 'Respaldados por <em>instituciones</em> líderes',
            about_panel: 'Aether System',
            about_cta: 'Conoce al equipo',
            about_acc3_t: 'Equipo académico',
            about_acc3_p:
                'Aether System es el equipo de la UPC (curso 1ASI0732 – Diseño de Experimentos) que construye KairoLabs con criterios de verificación y entrega continua.',
            about_acc4_t: 'Verificación continua',
            about_acc4_p:
                'Hipótesis medibles, trazabilidad por lote y evidencia auditable para hospitales, farmacias y distribución.',
            about_h2: 'Soluciones tecnológicas para la conservación de medicamentos',
            about_lead_html:
                '<strong>Aether System</strong> es el equipo académico de la <strong>UPC</strong> (curso <strong>1ASI0732 – Diseño de Experimentos</strong>) detrás de <strong>KairoLabs</strong>: una plataforma IoT para monitorear y conservar medicamentos con criterios de verificación, validación y entrega continua.',
            about_mission_t: 'Misión',
            about_mission_p:
                'Diseñar plataformas que garanticen la conservación adecuada de medicamentos mediante monitoreo continuo de temperatura, humedad y luz.',
            about_vision_t: 'Visión',
            about_vision_p:
                'Modernizar la logística farmacéutica en el Perú con IoT, arquitectura orientada a dominios y pipelines de DevOps.',
            about_chk1: 'Integridad del producto',
            about_chk2: 'Soluciones escalables',
            about_chk3: 'Hipótesis verificables',
            about_team_h: 'Equipo Aether System',
            about_team_p: 'UPC · 1ASI0732 · Diseño de Experimentos',
            expand_intro: 'Cada día sin datos claros es una oportunidad perdida: merma, desviaciones y lotes que no se pueden auditar.',
            expand_caption: 'KairoLabs muestra el almacén como es: temperatura, humedad y luz en una sola vista para actuar a tiempo.',
            tech_wm: 'MONITOREO 360',
            tech_kicker: 'Monitoreo 360°',
            tech_h2: 'Tecnología Inteligente',
            tech_lead:
                'KairoLabs centraliza telemetría IoT, dashboards en tiempo real, alertas ante desviaciones e históricos auditables para la conservación de medicamentos.',
            tech_f1h: 'Temperatura',
            tech_f1p:
                'Control estricto para vacunas y biológicos en rangos críticos de 2°C a 8°C.',
            tech_f2h: 'Humedad',
            tech_f2p:
                'Evitamos la degradación química y proliferación de microorganismos.',
            tech_f3h: 'Iluminación',
            tech_f3p:
                'Protección avanzada contra la fotodegradación para medicamentos sensibles.',
            tech_f4h: 'Conectividad 24/7',
            tech_f4p:
                'Alertas inmediatas vía IoT incluso en zonas de baja cobertura regional.',
            tech_f5h: 'Alertas accionables',
            tech_f5p:
                'Notificaciones por umbral (normal, advertencia, crítico) para decidir a tiempo y evitar merma.',
            tech_f6h: 'Trazabilidad auditable',
            tech_f6p:
                'Históricos de conservación para auditorías DIGEMID/MINSA y evidencia de cada lote o sede.',
            tech_f7h: 'Supervisión multi-sede',
            tech_f7p:
                'Dashboards centralizados para hospitales, farmacias y distribución desde web y móvil.',
            video_product_h: 'Video: Sobre KairoLabs',
            video_product_p: 'Mira nuestro video "About the product" para ver la plataforma en acción.',
            dash_sub: 'Logística Farmacéutica · DIGEMID / MINSA',
            dash_h3: 'Panel en vivo — Nodo 01',
            dash_active: 'Sistema activo',
            dash_unit_c: '°Celsius',
            dash_range_c: 'Rango: 2 – 8°C',
            dash_range_h: 'Rango: 30 – 70% RH',
            dash_range_l: 'Rango: 0 – 1000 Lux',
            dash_lux: 'Intensidad Lux',
            dash_footer_l:
                'SEGURIDAD AES-256 · GRADO FARMACÉUTICO',
            dash_footer_r: 'Última actualización: hace 2 min',
            mini_alerts: 'ALERTAS HOY',
            mini_refresh: 'REFRESCO',
            tech_bottom_p:
                'KairoLabs permite monitorear en tiempo real las condiciones de almacenamiento de medicamentos, generando alertas automáticas y almacenando datos históricos para garantizar su conservación adecuada.',
            tech_cta: 'Ver Planes de Monitoreo',
            sec_wm: 'SEGMENTOS',
            sec_kicker: 'Sectores Objetivo',
            sec_h2: 'Implementación estratégica',
            sec_lead:
                'Dos segmentos objetivo del informe: operación en almacén y gestión de cumplimiento.',
            sec_b1: 'Segmento 01',
            sec_t1: 'Personal operativo de almacenes farmacéuticos',
            sec_p1:
                'Técnicos y operarios que supervisan temperatura, humedad y luz en el día a día, y necesitan alertas accionables.',
            sec_tag1a: 'Tiempo real',
            sec_tag1b: 'Alertas',
            sec_tag1c: 'Cadena de frío',
            sec_l1: 'SABER MÁS',
            sec_b2: 'Segmento 02',
            sec_t2: 'Gestores y responsables de farmacia',
            sec_p2:
                'Jefes de farmacia y entidades de salud que necesitan evidencia auditable y supervisión multi-sede.',
            sec_tag2a: 'Auditoría',
            sec_tag2b: 'DIGEMID / MINSA',
            sec_tag2c: 'Multi-sede',
            sec_l2: 'MÁS INFO',
            stat_l1: 'Sensores Instalados',
            stat_l2: 'Hubs Logísticos',
            stat_l3: 'Eficiencia Logística',
            stat_l4: 'Activos para ti',
            connect_kicker: 'Una plataforma. Tres vistas.',
            connect_h2: 'Conecta almacén, equipo y evidencia',
            connect_lead:
                'KairoLabs une el piso del almacén, el dashboard ejecutivo y la telemetría IoT en una sola plataforma para actuar a tiempo.',
            connect_h2b: 'Controla temperatura, humedad y luz',
            connect_leadb:
                'Una sola vista para detectar desviaciones, priorizar alertas y proteger cada lote antes de que se convierta en merma.',
            connect_h2c: 'Evidencia lista para auditar',
            connect_leadc:
                'Históricos por sede y lote para DIGEMID y MINSA, con el equipo operando sobre los mismos datos.',
            connect_c1: 'Operación diaria',
            connect_c2: 'Control integral',
            connect_c3: 'Telemetría IoT',
            team_h2: 'Integrantes del Equipo',
            team_lead:
                'Equipo Aether System · Ingeniería de Software · UPC',
            team_b1: 'Software. Despliegue continuo, documentación y pipelines de verificación.',
            team_b2: 'UX/UI e interacción. Usabilidad y experiencia del producto.',
            team_b3: 'Desarrollo web y apps. Java, JS, Flutter y trabajo en equipo.',
            team_n4: 'Integrante por confirmar',
            team_b4: 'Perfil en incorporación. Aporte por definir en el sprint.',
            team_n5: 'Integrante por confirmar',
            team_b5: 'Perfil en incorporación. Aporte por definir en el sprint.',
            team_tab_video: 'Video',
            team_tab_image: 'Imagen',
            team_img_soon: 'Imagen del equipo en preparación',
            team_media_copy: 'Nuestro equipo une ambos lados del almacén: desde desarrollo y diseño hasta operación y cumplimiento. En KairoLabs convertimos datos, alertas y evidencia en menos merma y una cadena de frío más segura.',
            orbit_text: 'Nuestro equipo une el piso del almacén y la gestión sanitaria: datos, alertas y evidencia. Esa mirada es lo que hace distinto a KairoLabs.',
            plan_wm: 'NUESTROS PLANES',
            plan_kicker: 'Inversión Inteligente',
            plan_h2: 'Planes de Monitoreo',
            plan_lead:
                'Suscripción escalable según sedes y sensores conectados, alineada a la propuesta de valor de KairoLabs.',
            plan_pilot: 'PILOTO',
            plan_basic: 'BÁSICO',
            plan_pro: 'PROFESIONAL',
            plan_hosp: 'HOSPITALARIO',
            plan_prem: 'PREMIUM',
            plan_period: '/mes',
            plan_custom: 'Personalizado',
            plan_rec: 'RECOMENDADO',
            plan_d0: 'Prueba KairoLabs en una cámara fría y valida el impacto antes de escalar.',
            plan_d1: 'Ideal para farmacias y clínicas con una sola sede. Monitoreo básico en tiempo real.',
            plan_d2: 'Para centros de distribución y hospitales con múltiples áreas o sucursales.',
            plan_d3: 'Para cadenas farmacéuticas y redes de salud con múltiples sedes a nivel nacional.',
            plan_d4: 'Para hospitales y farmacias clínicas que vigilan vacunas, biológicos y varias cámaras.',
            plan0_f1: '1 sensor · 1 área',
            plan0_f2: '14 días de prueba',
            plan0_f3: 'Alertas por email',
            plan0_f4: 'Onboarding incluido',
            plan0_f5: 'WhatsApp / SMS',
            plan0_f6: 'Multi-sede',
            plan0_btn: 'Probar ahora',
            plan1_f1: 'Monitoreo de 1 sede',
            plan1_f2: 'Visualización en tiempo real',
            plan1_f3: 'Alertas básicas por email',
            plan1_f4: '30 días de historial',
            plan1_f5: 'Múltiples áreas',
            plan1_f6: 'Reportes avanzados',
            plan1_btn: 'Seleccionar Básico',
            plan2_f1: 'Supervisión de varias áreas',
            plan2_f2: 'Alertas avanzadas (SMS/WhatsApp)',
            plan2_f3: '1 año de historial',
            plan2_f4: 'Reportes y dashboards',
            plan2_f5: 'Historial extendido',
            plan2_f6: 'Integración con sistemas',
            plan2_btn: 'Comenzar ahora',
            plan3_f1: 'Monitoreo multi-sedes',
            plan3_f2: 'Gestión centralizada',
            plan3_f3: 'Automatización total',
            plan3_f4: 'Análisis de tendencias',
            plan3_f5: 'Soporte prioritario 24/7',
            plan3_f6: 'Cumplimiento DIGEMID/MINSA',
            plan3_btn: 'Contactar ventas',
            plan4_f1: 'Varias cámaras y pabellones',
            plan4_f2: 'Rangos 2–8 °C y humedades críticas',
            plan4_f3: 'Roles operador / gestor',
            plan4_f4: 'Evidencia para auditorías',
            plan4_f5: 'Alertas por umbral',
            plan4_f6: 'Soporte clínico incluido',
            plan4_btn: 'Elegir Hospitalario',
            plan_note:
                'Todos los planes incluyen cifrado AES-256 y cumplimiento normativo farmacéutico',
            contact_kicker: 'Soporte Especializado',
            contact_h2: 'Habla con el equipo',
            contact_lead:
                'Aether System está listo para acompañarte en un piloto de KairoLabs: telemetría, alertas y evidencia auditable para tu cadena de frío.',
            contact_loc: 'Ubicación',
            contact_loc_p: 'Universidad Peruana de Ciencias Aplicadas <br> Lima, Perú',
            contact_mail: 'Email',
            contact_phone: 'Teléfono',
            contact_hours: 'Horario',
            contact_hours_p: 'Lun - Vie: 09:00 - 18:00',
            contact_social: 'Sigue nuestras redes sociales',
            contact_card_h3: '¿Listo para reducir pérdidas y mejorar la conservación?',
            contact_card_p:
                'KairoLabs entrega telemetría confiable para optimizar temperatura, humedad y luz. Comienza con un piloto y valida el impacto en tu operación.',
            contact_btn_start: 'Empezar ahora',
            contact_btn_demo: 'Agendar demo comercial',
            contact_li1: 'Instalación y prueba en sede en 2 semanas',
            contact_li2: 'Onboarding y soporte incluidos',
            contact_li3: 'Resultados medibles en 30 días',
            footer_tagline: 'Monitoreo inteligente para medicamentos.',
            footer_subscribe: 'Suscríbete al boletín',
            ph_subscribe: 'Tu correo electrónico',
            footer_copy: '© 2026 Aether System (UPC). Todos los derechos reservados.',
            footer_terms: 'Términos y Condiciones',
            footer_legal_copy: '© 2026 KairoLabs · Aether System (UPC). Todos los derechos reservados.',
            footer_credit: 'Sitio diseñado por el equipo Aether System',
            footer_cta_lead: 'Almacenes más inteligentes empiezan aquí. Únete a los equipos que ya operan con datos, no con supuestos.',
            footer_cta_btn: 'Prueba KairoLabs ahora',
            footer_follow: 'Síguenos:',
            cta_v_badge: 'Empieza hoy',
            cta_v_title: 'Almacenes más inteligentes.\nConservación más segura.\nHecho para quien cuida medicamentos.',
            cta_v_sub: 'Nuestro equipo une el piso del almacén y la gestión sanitaria: datos, alertas y evidencia. Esa mirada es lo que hace distinto a KairoLabs.',
            cta_v_btn: 'Comenzar',
            cta_v_perk1: 'Sin permanencia',
            cta_v_perk2: 'Configuración en minutos',
            cta_v_perk3: 'Soporte en español',
            terms_back: 'Volver al sitio',
            terms_doc_title: 'Términos y Condiciones | KairoLabs (UPC)',
            terms_modal_title: 'Términos y Condiciones',
            modal_ok: 'Entendido',
            terms_body_html: `<p class="terms-lead text-secondary mb-4">Última actualización: setiembre de 2026 · Proyecto académico — Universidad Peruana de Ciencias Aplicadas (UPC) · Curso 1ASI0732 Diseño de Experimentos</p>
<p class="terms-section-title">1. Identificación</p>
<p>El presente sitio web divulga el producto KairoLabs, desarrollado por el equipo Aether System como parte del curso Diseño de Experimentos de Ingeniería de Software en la UPC. Los datos de contacto publicados en la landing son referenciales para fines educativos y de demostración.</p>
<p class="terms-section-title">2. Objeto</p>
<p>Estas condiciones regulan el acceso y uso del sitio informativo. El contenido tiene carácter descriptivo sobre una solución IoT de monitoreo; no constituye por sí mismo una oferta comercial vinculante salvo que se formalice por otros medios acordados con los titulares del proyecto.</p>
<p class="terms-section-title">3. Uso permitido</p>
<p>El usuario se compromete a:</p>
<ul class="terms-list mb-3">
<li>Utilizar el sitio de forma lícita y respetuosa con la normativa vigente.</li>
<li>No intentar vulnerar la seguridad, la disponibilidad ni la integridad del sitio o de sistemas vinculados.</li>
<li>No reproducir masivamente los contenidos sin mención de autoría y fines académicos o informativos.</li>
</ul>
<p class="terms-section-title">4. Propiedad intelectual</p>
<p>Marca, logotipos, textos, imágenes y diseño de la landing son obra del equipo o materiales utilizados con fines académicos. Queda prohibido el uso comercial no autorizado que implique confusión sobre el origen del proyecto.</p>
<p class="terms-section-title">5. Limitación de responsabilidad</p>
<p>La información se ofrece «tal cual», sin garantía de exhaustividad. KairoLabs / Aether System no se responsabilizan por decisiones empresariales tomadas únicamente con base en el material de este sitio, ni por interrupciones temporales del servicio de alojamiento.</p>
<p class="terms-section-title">6. Enlaces externos</p>
<p>Los enlaces a aplicaciones o demos de terceros (por ejemplo, entornos de prueba en la nube) se ofrecen para conveniencia del visitante. No controlamos esos destinos; su uso queda sujeto a las políticas de cada plataforma.</p>
<p class="terms-section-title">7. Datos personales y formularios</p>
<p>Cualquier tratamiento real de datos personales deberá contar con bases legales y medidas técnicas adecuadas conforme a la normativa peruana de protección de datos aplicable en el momento del tratamiento.</p>
<p class="terms-section-title">8. Modificaciones</p>
<p>El equipo puede actualizar estos términos para reflejar cambios en el proyecto o requisitos académicos. La fecha de «última actualización» indicará la versión vigente.</p>
<p class="terms-section-title">9. Legislación aplicable</p>
<p>Para cualquier controversia relacionada con el uso de este sitio informativo, resultarán aplicables las leyes de la República del Perú, sometiéndose las partes a los tribunales competentes de Lima, salvo norma imperativa en contrario.</p>
<p class="terms-section-title">10. Contacto</p>
<p>Para consultas sobre estos términos o el proyecto, puede utilizarse el correo indicado en la sección de contacto de la página principal: <a href="mailto:contacto@kairolabs.pe">contacto@kairolabs.pe</a>.</p>`
        },
        en: {
            lang_group_aria: 'Choose language',
            meta_title: 'KairoLabs',
            meta_desc:
                'KairoLabs — Real-time IoT monitoring for medicines by Aether System (UPC). Software Experiments Design course 1ASI0732.',
            nav_inicio: 'Home',
            nav_tecnologia: 'Technology',
            nav_sectores: 'Sectors',
            nav_nosotros: 'About',
            nav_equipo: 'Team',
            nav_planes: 'Plans',
            nav_cta: 'Start now',
            footer_nav_contact: 'Contact',
            hero_tagline: 'Pharmaceutical preservation · IoT',
            hero_title: 'Real-time alerts for hospitals, pharmacies, and distribution',
            hero_desc:
                'Temperature, humidity, and light under control: less waste, more traceability, and DIGEMID/MINSA alignment.',
            hero_btn_login: 'Start today!',
            mosaic_kicker: 'Expected results',
            mosaic_title: 'Make smarter decisions in your warehouse and reduce operational risk.',
            mosaic_s1v: '< 5 min',
            mosaic_s1l: 'Response time after an alert',
            mosaic_s2v: '24/7',
            mosaic_s2l: 'Temperature, humidity, and light telemetry',
            mosaic_s3v: '+30%',
            mosaic_s3l: 'Traceability improvement in the first 6 months',
            mosaic_s4v: '100%',
            mosaic_s4l: 'Auditable history for DIGEMID / MINSA',
            mosaic_eyebrow: 'A KairoLabs recommendation',
            mosaic_h3: 'Never face a critical deviation alone',
            mosaic_p: 'When an environmental condition goes out of range, KairoLabs connects your site data, assesses the situation, and helps you respond faster with actionable alerts.',
            mosaic_btn: 'Explore the platform',
            yt_caption: 'See how KairoLabs works<br>in your warehouse',
            yt_plus_h: 'Ready to see KairoLabs in action?',
            yt_plus_p: 'Don’t play the video yet: go straight to the platform and get the product for your warehouse.',
            yt_plus_btn: 'Get the app',
            yt_plus_close: 'Close',
            float_h1: 'Temperature control',
            float_p1:
                'Continuous temperature monitoring for biologics and vaccines that require the cold chain.',
            float_h2: 'Humidity and light',
            float_p2:
                'Relative humidity and light exposure control to avoid chemical degradation.',
            float_h3: 'Full traceability',
            float_p3:
                'Historical records for audits and DIGEMID/MINSA regulatory compliance.',
            about_innov: 'Experiments Design',
            about_tag: 'THE PROJECT',
            about_kicker: 'The project',
            about_partners_kicker: 'Regulatory framework',
            about_partners_html: 'Backed by leading <em>institutions</em>',
            about_panel: 'Aether System',
            about_cta: 'Meet the team',
            about_acc3_t: 'Academic team',
            about_acc3_p:
                'Aether System is the UPC team (course 1ASI0732 – Experiments Design) building KairoLabs with verification and continuous delivery criteria.',
            about_acc4_t: 'Continuous verification',
            about_acc4_p:
                'Measurable hypotheses, lot-level traceability, and auditable evidence for hospitals, pharmacies, and distribution.',
            about_h2: 'Technology solutions for medicine storage',
            about_lead_html:
                '<strong>Aether System</strong> is the academic team at <strong>UPC</strong> (course <strong>1ASI0732 – Software Experiments Design</strong>) behind <strong>KairoLabs</strong>: an IoT platform to monitor and preserve medicines with verification, validation, and continuous delivery criteria.',
            about_mission_t: 'Mission',
            about_mission_p:
                'Design platforms that ensure proper medicine preservation through continuous monitoring of temperature, humidity, and light.',
            about_vision_t: 'Vision',
            about_vision_p:
                'Modernize pharmaceutical logistics in Peru with IoT, domain-driven architecture, and DevOps pipelines.',
            about_chk1: 'Product integrity',
            about_chk2: 'Scalable solutions',
            about_chk3: 'Verifiable hypotheses',
            about_team_h: 'Aether System team',
            about_team_p: 'UPC · 1ASI0732 · Experiments Design',
            expand_intro: 'Every day without clear data is a lost opportunity: waste, deviations, and lots you cannot audit.',
            expand_caption: 'KairoLabs shows the warehouse as it is: temperature, humidity, and light in one view so you can act in time.',
            tech_wm: '360 MONITORING',
            tech_kicker: '360° monitoring',
            tech_h2: 'Smart technology',
            tech_lead:
                'KairoLabs centralizes IoT telemetry, real-time dashboards, deviation alerts, and auditable history for medicine preservation.',
            tech_f1h: 'Temperature',
            tech_f1p:
                'Strict control for vaccines and biologics in critical 2°C to 8°C ranges.',
            tech_f2h: 'Humidity',
            tech_f2p:
                'We help prevent chemical degradation and microbial growth.',
            tech_f3h: 'Lighting',
            tech_f3p:
                'Advanced protection against photodegradation for light-sensitive medicines.',
            tech_f4h: '24/7 connectivity',
            tech_f4p:
                'Immediate IoT alerts, even in areas with limited regional coverage.',
            tech_f5h: 'Actionable alerts',
            tech_f5p:
                'Threshold notifications (normal, warning, critical) so you can act in time and avoid waste.',
            tech_f6h: 'Auditable traceability',
            tech_f6p:
                'Conservation history for DIGEMID/MINSA audits and evidence for every lot or site.',
            tech_f7h: 'Multi-site supervision',
            tech_f7p:
                'Centralized dashboards for hospitals, pharmacies, and distribution from web and mobile.',
            video_product_h: 'Video: About KairoLabs',
            video_product_p: 'Watch our "About the product" video to see the platform in action.',
            dash_sub: 'Pharmaceutical logistics · DIGEMID / MINSA',
            dash_h3: 'Live dashboard — Node 01',
            dash_active: 'System active',
            dash_unit_c: '°Celsius',
            dash_range_c: 'Range: 2 – 8°C',
            dash_range_h: 'Range: 30 – 70% RH',
            dash_range_l: 'Range: 0 – 1000 Lux',
            dash_lux: 'Lux intensity',
            dash_footer_l: 'AES-256 SECURITY · PHARMACEUTICAL GRADE',
            dash_footer_r: 'Last updated: 2 min ago',
            mini_alerts: 'ALERTS TODAY',
            mini_refresh: 'REFRESH',
            tech_bottom_p:
                'KairoLabs monitors storage conditions for medicines in real time, generates automatic alerts, and stores historical data to help ensure proper preservation.',
            tech_cta: 'View monitoring plans',
            sec_wm: 'SEGMENTS',
            sec_kicker: 'Target sectors',
            sec_h2: 'Strategic implementation',
            sec_lead:
                'Two target segments from the report: warehouse operations and compliance management.',
            sec_b1: 'Segment 01',
            sec_t1: 'Pharmaceutical warehouse operators',
            sec_p1:
                'Technicians and operators who monitor temperature, humidity, and light daily and need actionable alerts.',
            sec_tag1a: 'Real time',
            sec_tag1b: 'Alerts',
            sec_tag1c: 'Cold chain',
            sec_l1: 'LEARN MORE',
            sec_b2: 'Segment 02',
            sec_t2: 'Pharmacy managers and health entities',
            sec_p2:
                'Pharmacy heads and health entities that need auditable evidence and multi-site supervision.',
            sec_tag2a: 'Audit',
            sec_tag2b: 'DIGEMID / MINSA',
            sec_tag2c: 'Multi-site',
            sec_l2: 'MORE INFO',
            stat_l1: 'Sensors deployed',
            stat_l2: 'Logistics hubs',
            stat_l3: 'Logistics efficiency',
            stat_l4: 'Always on for you',
            connect_kicker: 'One platform. Three views.',
            connect_h2: 'Connect warehouse, team, and evidence',
            connect_lead:
                'KairoLabs unites the warehouse floor, the executive dashboard, and IoT telemetry in one platform so you can act on time.',
            connect_h2b: 'Control temperature, humidity, and light',
            connect_leadb:
                'One view to catch deviations, prioritize alerts, and protect every lot before it turns into waste.',
            connect_h2c: 'Evidence ready to audit',
            connect_leadc:
                'Site and lot history for DIGEMID and MINSA, with the whole team working from the same data.',
            connect_c1: 'Daily operations',
            connect_c2: 'End-to-end control',
            connect_c3: 'IoT telemetry',
            team_h2: 'Team members',
            team_lead:
                'Aether System team · Software Engineering · UPC',
            team_b1: 'Software. Continuous delivery, documentation, and verification pipelines.',
            team_b2: 'UX/UI and interaction. Usability and product experience.',
            team_b3: 'Web and app development. Java, JS, Flutter, and teamwork.',
            team_n4: 'Member to be confirmed',
            team_b4: 'Profile pending. Contribution to be defined this sprint.',
            team_n5: 'Member to be confirmed',
            team_b5: 'Profile pending. Contribution to be defined this sprint.',
            team_tab_video: 'Video',
            team_tab_image: 'Image',
            team_img_soon: 'Team image coming soon',
            team_media_copy: 'Our team connects both sides of the warehouse: from development and design to operations and compliance. At KairoLabs we turn data, alerts, and evidence into less waste and a safer cold chain.',
            orbit_text: 'Our team connects warehouse operations and health management: data, alerts, and evidence. That view is what makes KairoLabs different.',
            plan_wm: 'OUR PLANS',
            plan_kicker: 'Smart investment',
            plan_h2: 'Monitoring plans',
            plan_lead:
                'Scalable subscription by sites and connected sensors, aligned with KairoLabs value proposition.',
            plan_pilot: 'PILOT',
            plan_basic: 'BASIC',
            plan_pro: 'PROFESSIONAL',
            plan_hosp: 'HOSPITAL',
            plan_prem: 'PREMIUM',
            plan_period: '/mo',
            plan_custom: 'Custom',
            plan_rec: 'RECOMMENDED',
            plan_d0: 'Try KairoLabs in one cold room and validate the impact before you scale.',
            plan_d1: 'Ideal for pharmacies and clinics with a single site. Basic real-time monitoring.',
            plan_d2: 'For distribution centers and hospitals with multiple areas or branches.',
            plan_d3: 'For pharmacy chains and health networks with multiple sites nationwide.',
            plan_d4: 'For hospitals and clinical pharmacies that watch vaccines, biologics, and several rooms.',
            plan0_f1: '1 sensor · 1 area',
            plan0_f2: '14-day trial',
            plan0_f3: 'Email alerts',
            plan0_f4: 'Onboarding included',
            plan0_f5: 'WhatsApp / SMS',
            plan0_f6: 'Multi-site',
            plan0_btn: 'Try now',
            plan1_f1: 'Single-site monitoring',
            plan1_f2: 'Real-time visualization',
            plan1_f3: 'Basic email alerts',
            plan1_f4: '30-day history',
            plan1_f5: 'Multiple areas',
            plan1_f6: 'Advanced reports',
            plan1_btn: 'Choose Basic',
            plan2_f1: 'Multi-area supervision',
            plan2_f2: 'Advanced alerts (SMS/WhatsApp)',
            plan2_f3: '1-year history',
            plan2_f4: 'Reports and dashboards',
            plan2_f5: 'Extended history',
            plan2_f6: 'Systems integration',
            plan2_btn: 'Get started',
            plan3_f1: 'Multi-site monitoring',
            plan3_f2: 'Centralized management',
            plan3_f3: 'Full automation',
            plan3_f4: 'Trend analysis',
            plan3_f5: 'Priority 24/7 support',
            plan3_f6: 'DIGEMID/MINSA compliance',
            plan3_btn: 'Contact sales',
            plan4_f1: 'Several rooms and wards',
            plan4_f2: '2–8 °C ranges and critical humidity',
            plan4_f3: 'Operator / manager roles',
            plan4_f4: 'Audit-ready evidence',
            plan4_f5: 'Threshold alerts',
            plan4_f6: 'Clinical support included',
            plan4_btn: 'Choose Hospital',
            plan_note:
                'All plans include AES-256 encryption and pharmaceutical regulatory alignment',
            contact_kicker: 'Specialized support',
            contact_h2: 'Talk to the team',
            contact_lead:
                'Aether System is ready to support a KairoLabs pilot: telemetry, alerts, and auditable evidence for your cold chain.',
            contact_loc: 'Location',
            contact_loc_p: 'Universidad Peruana de Ciencias Aplicadas <br> Lima, Peru',
            contact_mail: 'Email',
            contact_phone: 'Phone',
            contact_hours: 'Hours',
            contact_hours_p: 'Mon – Fri: 09:00 – 18:00',
            contact_social: 'Follow us on social media',
            contact_card_h3: 'Ready to reduce losses and improve preservation?',
            contact_card_p:
                'KairoLabs delivers reliable telemetry to optimize temperature, humidity, and light. Start with a pilot and validate the impact on your operation.',
            contact_btn_start: 'Get started now',
            contact_btn_demo: 'Schedule commercial demo',
            contact_li1: 'On-site installation and testing in 2 weeks',
            contact_li2: 'Onboarding and support included',
            contact_li3: 'Measurable results in 30 days',
            footer_tagline: 'Smart monitoring for medicines.',
            footer_subscribe: 'Subscribe to the newsletter',
            ph_subscribe: 'Your email address',
            footer_copy: '© 2026 Aether System (UPC). All rights reserved.',
            footer_terms: 'Terms and Conditions',
            footer_legal_copy: '© 2026 KairoLabs · Aether System (UPC). All rights reserved.',
            footer_credit: 'Site designed by the Aether System team',
            footer_cta_lead: 'Smarter warehouses start here. Join the teams that already operate with data, not assumptions.',
            footer_cta_btn: 'Try KairoLabs now',
            footer_follow: 'Follow us:',
            cta_v_badge: 'Start today',
            cta_v_title: 'Smarter warehouses.\nSafer preservation.\nBuilt for those who protect medicines.',
            cta_v_sub: 'Our team connects warehouse operations and health management: data, alerts, and evidence. That view is what makes KairoLabs different.',
            cta_v_btn: 'Get started',
            cta_v_perk1: 'No lock-in',
            cta_v_perk2: 'Set up in minutes',
            cta_v_perk3: 'Support in Spanish',
            terms_back: 'Return to site',
            terms_doc_title: 'Terms and Conditions | KairoLabs (UPC)',
            terms_modal_title: 'Terms and Conditions',
            modal_ok: 'Got it',
            terms_body_html: `<p class="terms-lead text-secondary mb-4">Last updated: September 2026 · Academic project — Universidad Peruana de Ciencias Aplicadas (UPC) · Course 1ASI0732 Software Experiments Design</p>
<p class="terms-section-title">1. Identification</p>
<p>This website presents the KairoLabs product, developed by the Aether System team as part of the Software Experiments Design course at UPC. Contact details on the landing page are indicative for educational and demonstration purposes.</p>
<p class="terms-section-title">2. Purpose</p>
<p>These terms govern access to and use of this informational site. The content describes an IoT monitoring solution in general terms; it does not constitute a binding commercial offer unless agreed separately with the project owners.</p>
<p class="terms-section-title">3. Permitted use</p>
<p>Users agree to:</p>
<ul class="terms-list mb-3">
<li>Use the site lawfully and in compliance with applicable regulations.</li>
<li>Not attempt to compromise the security, availability, or integrity of the site or related systems.</li>
<li>Not mass-reproduce content without attribution and without academic or informational intent.</li>
</ul>
<p class="terms-section-title">4. Intellectual property</p>
<p>Branding, logos, text, images, and landing design are the team’s work or materials used for academic purposes. Unauthorized commercial use that creates confusion about the project’s origin is prohibited.</p>
<p class="terms-section-title">5. Limitation of liability</p>
<p>Information is provided “as is” without a guarantee of completeness. KairoLabs / Aether System are not liable for business decisions based solely on this site’s materials, nor for temporary interruptions of hosting services.</p>
<p class="terms-section-title">6. External links</p>
<p>Links to third-party applications or demos (e.g. cloud test environments) are provided for convenience. We do not control those destinations; use is subject to each platform’s policies.</p>
<p class="terms-section-title">7. Personal data and forms</p>
<p>Any real processing of personal data must have a lawful basis and appropriate technical measures under applicable Peruvian data-protection law at the time of processing.</p>
<p class="terms-section-title">8. Changes</p>
<p>The team may update these terms to reflect project or academic requirement changes. The “last updated” date will indicate the current version.</p>
<p class="terms-section-title">9. Applicable law</p>
<p>For disputes related to use of this informational site, the laws of the Republic of Peru apply, and the parties submit to the competent courts of Lima, unless mandatory law provides otherwise.</p>
<p class="terms-section-title">10. Contact</p>
<p>For questions about these terms or the project, use the email shown in the main page contact section: <a href="mailto:contacto@kairolabs.pe">contacto@kairolabs.pe</a>.</p>`
        }
    };

    let currentLang = 'es';

    function getTable(lang) {
        return TRANSLATIONS[lang] || TRANSLATIONS.es;
    }

    function applyI18n(lang) {
        currentLang = lang === 'en' ? 'en' : 'es';
        localStorage.setItem(STORAGE_KEY, currentLang);
        document.documentElement.lang = currentLang;

        const T = getTable(currentLang);
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && T.meta_desc) metaDesc.setAttribute('content', T.meta_desc);
        if (document.body.classList.contains('page-terms') && T.terms_doc_title) {
            document.title = T.terms_doc_title;
        } else if (T.meta_title) {
            document.title = T.meta_title;
        }

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (key && T[key] !== undefined) el.textContent = T[key];
        });

        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const key = el.getAttribute('data-i18n-html');
            if (key && T[key] !== undefined) el.innerHTML = T[key];
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (key && T[key] !== undefined) el.setAttribute('placeholder', T[key]);
        });

        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const key = el.getAttribute('data-i18n-aria');
            if (key && T[key] !== undefined) el.setAttribute('aria-label', T[key]);
        });

        document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
            btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
        });

        window.dispatchEvent(new CustomEvent('kairolabs:i18n', { detail: { lang: currentLang } }));
    }

    function bindLangSwitcher() {
        document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                applyI18n(lang);
            });
        });
    }

    window.KAIROLABS_I18N = {
        apply: applyI18n,
        getLang: () => currentLang,
        getHero: () => {
            const T = getTable(currentLang);
            return {
                tagline: T.hero_tagline,
                title: T.hero_title,
                desc: T.hero_desc
            };
        },
        translations: TRANSLATIONS
    };

    // Compatibilidad con referencias previas
    window.MEDITRACK_I18N = window.KAIROLABS_I18N;

    document.addEventListener('DOMContentLoaded', () => {
        const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('meditrack_lang') || 'es';
        applyI18n(saved);
        bindLangSwitcher();
    });
})();
