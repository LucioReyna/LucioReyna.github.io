/*
  Portfolio projects — one object per project, shown in this order.
  To add a project: copy one block, give it a new `slug`, put its screenshots in
  assets/projects/<slug>/ (1.webp is the cover) and fill both languages.
*/
window.PROJECTS = [
  {
    slug: "revenue-lmdi",
    images: 2,
    tags: ["Power BI", "DAX", "LMDI", "Deneb · Vega-Lite", "Azure Analysis Services"],
    en: {
      title: "Revenue Decomposition with LMDI Logarithmic Modeling",
      context: "Executive report · Sales funnel",
      summary: "Splits year-over-year sales variance into the exact dollar contribution of each funnel driver.",
      body: [
        "Executive Power BI report that decomposes year-over-year sales variance across the full commercial funnel into dollar contributions per driver, using LMDI (Logarithmic Mean Divisia Index). Converting the multiplicative funnel into logarithmic space eliminates the interaction residuals of a naive decomposition, so the bridge closes exactly.",
        "Built entirely with DAX measures over a live Azure Analysis Services connection — no calculated columns, no calculated tables, no access to the model. Every layer, from the logarithmic weighting to driver isolation and sensitivity simulation, was resolved in measure space with controlled filter context, including cases where existing measures had to be bypassed to hold the intended granularity.",
        "A second module extends the same valuation chain to appointment lag time: it isolates the share of cancellations attributable to booking lead time against a baseline and prices it through conversion and average selling value."
      ],
      highlights: [
        "Custom waterfall built in Deneb (Vega-Lite)",
        "Driver sensitivity table with +1 pp and +0.5 pp scenarios",
        "Dynamic time granularity: year, quarter, month and week",
        "Measures only, over a live connection"
      ],
      captions: ["Revenue overview: LMDI waterfall and funnel drivers", "Lag time module: cancellations priced by booking lead time"]
    },
    es: {
      title: "Descomposición de ingresos con modelado logarítmico LMDI",
      context: "Reporte ejecutivo · Embudo comercial",
      summary: "Descompone la variación interanual de ventas en el aporte exacto, en dólares, de cada driver del embudo.",
      body: [
        "Reporte ejecutivo en Power BI que descompone la variación de ventas contra el año anterior a lo largo de todo el embudo comercial, expresando en dólares el aporte de cada driver mediante LMDI (Logarithmic Mean Divisia Index). Al llevar el embudo multiplicativo al espacio logarítmico se eliminan los residuos de interacción de una descomposición simple, y el puente cierra exacto.",
        "Construido íntegramente con medidas DAX sobre una conexión en vivo a Azure Analysis Services: sin columnas calculadas, sin tablas calculadas y sin acceso al modelo. Cada capa, desde la ponderación logarítmica hasta el aislamiento de drivers y la simulación de sensibilidad, se resolvió en el espacio de medidas controlando el contexto de filtro, incluso en casos donde hubo que sortear el comportamiento estándar de medidas existentes para sostener la granularidad buscada.",
        "Un segundo módulo extiende la misma cadena de valuación al lag time de las citas: aísla la parte de las cancelaciones atribuible a la anticipación con que se reserva, contra una línea base, y la valoriza a través de la conversión y el valor promedio de venta."
      ],
      highlights: [
        "Waterfall a medida construido en Deneb (Vega-Lite)",
        "Tabla de sensibilidad por driver con escenarios de +1 pp y +0,5 pp",
        "Granularidad temporal dinámica: año, trimestre, mes y semana",
        "Solo medidas, sobre conexión en vivo"
      ],
      captions: ["Vista de ingresos: waterfall LMDI y drivers del embudo", "Módulo de lag time: cancelaciones valorizadas según la anticipación de la reserva"]
    }
  },
  {
    slug: "commercial-priority",
    images: 3,
    tags: ["Power BI", "DAX", "Funnel analytics", "Segmentation"],
    en: {
      title: "Commercial & Investment Prioritization Dashboard",
      context: "Hearing-care network · United States",
      summary: "Commercial funnel, referral-source analysis and a model that ranks every branch for investment from 1 to 5.",
      body: [
        "Power BI solution for a network of hearing-care centers in the United States, organized in three views. The whole model is built with DAX measures and filters by region, owner and franchise."
      ],
      highlights: [
        "Executive summary: the Appointments → Opportunities → Units sold funnel with its conversion rates",
        "Referral sources: variance versus prior year and close rate by source",
        "Investment prioritization: crosses schedule saturation with performance per working day and assigns each branch a priority from 1 to 5"
      ],
      captions: ["Executive summary: funnel and conversion rates", "Referral sources: variance vs. prior year and close rate", "Investment prioritization by branch"]
    },
    es: {
      tags: ["Power BI", "DAX", "Análisis de embudo", "Segmentación"],
      title: "Dashboard comercial y de priorización de inversión",
      context: "Red de centros de salud auditiva · EE.UU.",
      summary: "Embudo comercial, análisis por fuente de referido y un modelo que prioriza la inversión en cada sucursal del 1 al 5.",
      body: [
        "Solución en Power BI para una red de centros de salud auditiva en EE.UU., organizada en tres vistas. Todo el modelo está construido con medidas DAX y tiene filtros por región, responsable y franquicia."
      ],
      highlights: [
        "Resumen ejecutivo: el embudo Citas → Oportunidades → Unidades vendidas con sus tasas de conversión",
        "Fuentes de referido: variación contra el año anterior y tasa de cierre por fuente",
        "Priorización de inversión: cruza la saturación de agenda con la performance por día hábil y asigna a cada sucursal una prioridad del 1 al 5"
      ],
      captions: ["Resumen ejecutivo: embudo y tasas de conversión", "Fuentes de referido: variación vs. año anterior y tasa de cierre", "Priorización de inversión por sucursal"]
    }
  },
  {
    slug: "logistics-performance",
    images: 4,
    tags: ["Power BI", "DAX", "Data modeling", "Operations"],
    en: {
      title: "Executive Logistics Performance Dashboard",
      context: "Multi-country logistics · Poland, Turkey, UK",
      summary: "Tracks SLAs, inventory accuracy, capacity and backlog by month and by country.",
      body: [
        "Executive Power BI dashboard for end-to-end monitoring of logistics performance: Inbound SLA, Outbound SLA, Inventory Accuracy, Capacity Utilization and Backlog.",
        "Designed for management use — to spot operational deviations, bottlenecks and improvement opportunities in capacity and inventory accuracy at a glance. Visual clarity, KPI consistency and a decision-making focus came first."
      ],
      highlights: [
        "Data model and dataset structured for monthly and per-country analysis",
        "DAX measures for dynamic and comparative calculations",
        "Country comparison (Poland, Turkey, UK) and yearly Inventory Accuracy trend",
        "Totals consolidated and broken down by operation: inbound and outbound, inventory, capacity and resources"
      ],
      captions: ["Executive summary by country", "Operations: inbound and outbound", "Inventory", "Capacity and resources"]
    },
    es: {
      tags: ["Power BI", "DAX", "Modelado de datos", "Operaciones"],
      title: "Dashboard ejecutivo de performance logística",
      context: "Logística multipaís · Polonia, Turquía, Reino Unido",
      summary: "Monitorea SLA, precisión de inventario, capacidad y backlog por mes y por país.",
      body: [
        "Dashboard ejecutivo en Power BI para el monitoreo integral de la performance logística: Inbound SLA, Outbound SLA, Inventory Accuracy, Capacity Utilization y Backlog.",
        "Está pensado para uso gerencial: permite identificar rápido desvíos operativos, cuellos de botella y oportunidades de mejora en capacidad y precisión de inventario. Se priorizó la claridad visual, la consistencia de los KPIs y el foco en la toma de decisiones."
      ],
      highlights: [
        "Modelado de datos y estructuración del dataset para análisis mensual y por país",
        "Medidas DAX para cálculos dinámicos y comparativos",
        "Comparación entre países (Polonia, Turquía, Reino Unido) y tendencia anual de Inventory Accuracy",
        "Métricas totales consolidadas y desglose por operación: inbound y outbound, inventario, capacidad y recursos"
      ],
      captions: ["Resumen ejecutivo por país", "Operaciones: inbound y outbound", "Inventario", "Capacidad y recursos"]
    }
  },
  {
    slug: "inventory-control",
    images: 3,
    tags: ["Power BI", "DAX", "Data quality", "Inventory"],
    en: {
      title: "Inventory Control: Stock Aging, Duplicate Detection & Executive KPIs",
      context: "Hearing-care company · 30+ franchise locations",
      summary: "Shows how much stock each location holds, how old it is, and where the data can't be trusted.",
      body: [
        "Inventory intelligence dashboard for a multinational hearing-care company running a network of 30+ franchise locations. I designed and built it end to end — data model, transformation logic, DAX measures and report design — tracking every unit down to its serial number across 1,400+ units in stock.",
        "16 synchronized filters slice by region, area, owner, franchise, location, staff, product type and referral source, so the same report serves leadership and an individual franchise owner. It runs on a 100% measure-driven model with no calculated columns, which keeps it fast, scalable and easy to maintain."
      ],
      highlights: [
        "Executive summary: auto-refreshed KPIs, aging by stock status, a ranking of the locations holding the oldest stock and a “Key Takeaways” panel written in DAX that rewrites itself for any filter combination",
        "Data quality: serial-level duplicate detection that flags units registered under multiple statuses or locations — in the sample period it caught 57 duplicated units across 18 locations and avoided an overcount of 51 units",
        "Details: unit-level drill-down with product, tier, serial number, side, status, check-in date and aging"
      ],
      captions: ["Executive summary: stock aging and key takeaways", "Data quality: duplicate detection", "Unit-level details"]
    },
    es: {
      tags: ["Power BI", "DAX", "Calidad de datos", "Inventario"],
      title: "Control de inventario: antigüedad de stock, detección de duplicados y KPIs ejecutivos",
      context: "Empresa de salud auditiva · más de 30 franquicias",
      summary: "Muestra cuánto stock tiene cada sucursal, qué antigüedad tiene y dónde los datos no son confiables.",
      body: [
        "Dashboard de inteligencia de inventario para una empresa multinacional de salud auditiva con una red de más de 30 franquicias. Lo diseñé y construí de punta a punta (modelo de datos, lógica de transformación, medidas DAX y diseño del reporte) y sigue cada unidad hasta su número de serie, sobre más de 1.400 unidades en stock.",
        "16 filtros sincronizados permiten segmentar por región, área, responsable, franquicia, sucursal, personal, tipo de producto y fuente de referido, así que el mismo reporte sirve para la dirección y para el dueño de una franquicia. Funciona sobre un modelo 100% basado en medidas, sin columnas calculadas, lo que lo mantiene rápido, escalable y fácil de mantener."
      ],
      highlights: [
        "Resumen ejecutivo: KPIs que se actualizan solos, antigüedad por estado de stock, ranking de las sucursales con el stock más viejo y un panel de “Key Takeaways” escrito en DAX que se reescribe para cualquier combinación de filtros",
        "Calidad de datos: detección de duplicados a nivel de número de serie, que marca unidades registradas con más de un estado o en más de una sucursal. En el período de muestra detectó 57 unidades duplicadas en 18 sucursales y evitó un sobreconteo de 51 unidades",
        "Detalle: apertura por unidad con producto, nivel, número de serie, lado, estado, fecha de ingreso y antigüedad"
      ],
      captions: ["Resumen ejecutivo: antigüedad del stock y conclusiones clave", "Calidad de datos: detección de duplicados", "Detalle por unidad"]
    }
  }
];
