import { Project } from '../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'ptah',
    title: 'PTAH — Trazabilidad de Activos Hospitalarios',
    subtitle: 'Plataforma IoT de rastreo RFID en tiempo real con motor de alertas multi-canal',
    tagline: 'IoT · RFID Hopeland · Microservicios · SignalR · FCM',
    category: ['industrial', 'cloud'],
    companyOrContext: 'Tutelkan Ltda. / Sector Salud',
    period: '2022 – Presente',
    featured: true,
    accentColor: '#3EB0F9',
    summary: 'Plataforma industrial en producción para la supervisión, localización y trazabilidad de equipamiento hospitalario crítico mediante antenas y lectores RFID Hopeland distribuidos.',
    architectureHighlights: [
      'Ingesta de eventos masivos vía MQTT desde lectores RFID procesados de forma asíncrona mediante RabbitMQ.',
      'AlertsEngine: Background Worker Service en .NET 8 con evaluación periódica de reglas de zona y despacho multi-canal (Push FCM v1, SMTP e in-app).',
      'Dashboards operativos en tiempo real con SignalR para visualización dinámica en salas críticas.',
      'Autenticación empresarial integrada con Active Directory y persistencia en PostgreSQL con EF Core 9.'
    ],
    techStack: ['NestJS', '.NET 8', 'Quasar / Vue 3', 'PostgreSQL', 'RabbitMQ', 'MQTT', 'SignalR', 'Firebase FCM', 'Docker'],
    metricsOrAchievements: [
      'Monitoreo continuo 24/7 de activos médicos con latencia sub-segundo.',
      'Auto-resolución de alertas al retorno verificado de activos a sus zonas seguras.'
    ]
  },
  {
    id: 'kozecha',
    title: 'Kozecha — Inspección Frutícola con ML & DSS',
    subtitle: 'Ecosistema multiplataforma con inferencia de modelos PyTorch en AWS Lambda',
    tagline: 'PyTorch · AWS Lambda · React Native 0.75 · Computer Vision · DSS',
    category: ['ai', 'cloud', 'industrial'],
    companyOrContext: 'Tutelkan Ltda. / Industria Agrícola',
    period: '2024 – 2025',
    featured: true,
    accentColor: '#FF5500',
    summary: 'Sistema inteligente de control de calidad para exportación frutícola. Combina captura móvil offline-first con análisis automatizado de defectos mediante modelos de Deep Learning.',
    architectureHighlights: [
      'App móvil React Native 0.75 con WatermelonDB (offline-first), Vision Camera, Redux Toolkit y sincronización bidireccional.',
      'DSS Service en AWS Lambda (Python 3.12, 4GB RAM) ejecutando PyTorch 2.5.1 (ResNet34, ResNet50, VGG16, YOLO, AlexNet, LeNet5).',
      'Estrategia de despacho de modelos por patrón de imagen (workflow_strategy.py) y orquestación con AWS SQS y S3.',
      'Despliegue serverless con AWS SAM y contenedores ECR.'
    ],
    techStack: ['React Native 0.75', 'Python 3.12', 'PyTorch 2.5', 'AWS Lambda', 'AWS SQS', 'AWS S3', 'AWS SAM', 'NestJS', 'Quasar'],
    metricsOrAchievements: [
      'Inferencia de defectos y clasificación de calibres automatizada sin necesidad de servidores dedicados.',
      'Operación garantizada en zonas de packing sin conectividad continua a Internet.'
    ]
  },
  {
    id: 'cloudforge',
    title: 'CloudForge Marketplace Serverless',
    subtitle: 'Arquitectura e-commerce de rebanadas verticales con NestJS en GCP Cloud Functions',
    tagline: 'GCP Cloud Functions Gen 2 · Angular 22 SSR · Tailwind v4 · Mercado Pago SDK v2',
    category: ['cloud'],
    companyOrContext: 'Startup Personal (market.cloudforge.cl)',
    period: '2025 – 2026',
    featured: true,
    accentColor: '#FFA61E',
    summary: 'Plataforma de comercio electrónico de producción con backend 100% serverless en Google Cloud Platform y frontend Angular 22 SSR.',
    architectureHighlights: [
      'Backend NestJS standalone en GCP Cloud Functions Gen 2 con arquitectura de Rebanadas Verticales (DDD).',
      'Integración con Mercado Pago SDK v2 con idempotencia estricta en webhooks y verificación de firma criptográfica.',
      'Fulfillment automatizado con Dropi.cl y producción Print-on-Demand integrada con Tee.cl.',
      'Notificaciones transaccionales vía Resend y persistencia en Google Firestore optimizada contra cold-starts.',
      'CI/CD continuo mediante GitHub Actions con autenticación Workload Identity Federation (WIF).'
    ],
    techStack: ['Angular 22 SSR', 'NestJS', 'Tailwind CSS v4', 'GCP Cloud Functions', 'Google Firestore', 'Mercado Pago', 'Resend', 'GitHub Actions'],
    metricsOrAchievements: [
      'Zero idle server costs gracias al stack 100% serverless en GCP.',
      'Tiempo de cold-start reducido a menos de 400ms gracias al standalone context de NestJS.'
    ]
  },
  {
    id: 'smfec-volkan',
    title: 'SMFEC — Monitoreo Ambiental de Fuentes Emisoras',
    subtitle: 'Ecosistema de microservicios .NET 8 para control normativo de emisiones industriales',
    tagline: '.NET 8 · C# 12 · SQL Server · RabbitMQ · EF Core 9 · MeeReport',
    category: ['industrial', 'cloud'],
    companyOrContext: 'Tutelkan Ltda. / Volkan (AVSA, CyT, FIBRO, QVOL)',
    period: '2022 – Presente',
    featured: true,
    accentColor: '#00AA47',
    summary: 'Plataforma de cumplimiento normativo y monitoreo continuo de parámetros ambientales críticos para múltiples plantas industriales.',
    architectureHighlights: [
      'Ecosistema desacoplado de 6+ microservicios .NET 8 (API, WebClient, SubscribeService, MonitorService, SaveSourceStatus, MeeReport).',
      'MeeReportApi: Ingesta de reportes MEE vía REST, validación de umbrales y publicación de eventos RabbitMQ (max_flow_exeeded, no_flowrate).',
      'TimeElapsedHostedService para detección en segundo plano de congelamiento de datos o desconexión de sensores en planta.'
    ],
    techStack: ['.NET 8', 'C# 12', 'EF Core 9', 'SQL Server', 'RabbitMQ', 'Serilog', 'Quasar / Vue 3', 'Docker'],
    metricsOrAchievements: [
      'Disponibilidad continua para auditorías ambientales regulatorias.',
      'Generación automatizada de reportes normativos consolidados.'
    ]
  },
  {
    id: 'unifrutti',
    title: 'Sistema de Seguimiento de Cajas & Empaque (Unifrutti)',
    subtitle: 'Integración industrial profunda con PLC Siemens S7, básculas Ishida y RFID',
    tagline: 'PLC Siemens S7 · Modbus TCP/IP · Básculas Ishida · Zebra ZPL · 9 Microservicios',
    category: ['industrial'],
    companyOrContext: 'Tutelkan Ltda. / Exportadora Frutícola Unifrutti',
    period: '2021 – Presente',
    featured: false,
    accentColor: '#9D4EDD',
    summary: 'Ecosistema integral de 9 microservicios para trazabilidad de empaque, etiquetado dinámico y pesaje de alta velocidad en líneas de producción.',
    architectureHighlights: [
      'servicio-plc-core: Servicio Windows .NET 4.8 con polling de 100 registros Modbus/línea cada 800ms contra PLC Siemens S7.',
      'Servidor TCP interno en puerto 11900 con protocolos propietarios (WPLC, RPLC, HB) para sincronización con terminales de pesaje.',
      'Manejo de códigos QR de 10 segmentos, impresión de etiquetas ZPL en impresoras Zebra y captura con básculas Ishida DACS-GN.'
    ],
    techStack: ['.NET Core 6', '.NET Framework 4.8', 'C#', 'PostgreSQL', 'RabbitMQ', 'Modbus TCP/IP', 'IdentityServer4', 'Zebra ZPL'],
    servicesTable: [
      { name: 'servicio-plc-core', role: 'Bridge Modbus TCP/IP con PLC Siemens S7' },
      { name: 'servicio-balanza', role: 'Integración con básculas Ishida DACS-GN' },
      { name: 'servicio-core-etiquetado', role: 'Generación e impresión ZPL Zebra' },
      { name: 'servicio-core-paletizado', role: 'Control de paletizado y consolidación' },
      { name: 'servicio-core-descarte', role: 'Trazabilidad de unidades descartadas' },
      { name: 'servicio-core-global', role: 'Coordinación global y reglas de negocio' },
      { name: 'api_web_touch', role: 'API REST para terminales táctiles de línea' },
      { name: 'cliente_touch', role: 'SPA para operadores en línea de producción' },
      { name: 'cliente_web', role: 'SPA de supervisión administrativa' }
    ]
  },
  {
    id: 'maturity-report',
    title: 'Maturity Report — Plataforma de Madurez Industrial',
    subtitle: 'Evaluación de madurez de mantenimiento industrial acelerada con estrategia de agentes AI',
    tagline: 'NestJS · Google Cloud Run · Gemini AI Multi-Agent · Angular · Firebase',
    category: ['ai', 'cloud'],
    companyOrContext: 'Proyecto Especial / AI Research',
    period: '2025 – 2026',
    featured: false,
    accentColor: '#3EB0F9',
    summary: 'Plataforma analítica para diagnóstico del ciclo de vida de mantenimiento industrial (MTBF, MTTR, disponibilidad) desarrollada con una metodología multi-agente asistida por Gemini AI.',
    architectureHighlights: [
      'Backend NestJS con Vertical Slices desplegado en Google Cloud Run.',
      'Estrategia de desarrollo multi-subagente: arquitecto (Gemini Pro), desarrollador (Flash), auditor de calidad y linter.',
      'Frontend Angular alojado en Firebase Hosting con cuestionarios y visualización interactiva de radares de madurez.'
    ],
    techStack: ['NestJS', 'TypeScript', 'Google Cloud Run', 'Angular', 'Firebase Hosting', 'Gemini AI', 'Tailwind CSS']
  },
  {
    id: 'kimera',
    title: 'Kimera GitHub Manager (Desktop)',
    subtitle: 'Gestor nativo multiplataforma para Git y GitHub con interfaz retro Material 3',
    tagline: 'Kotlin 2.3 · Compose Multiplatform 1.10 · Clean Architecture · Desktop Linux/Mac/Win',
    category: ['desktop'],
    companyOrContext: 'Proyecto Personal Open Source',
    period: '2025 – 2026',
    featured: false,
    accentColor: '#00AA47',
    summary: 'Aplicación de escritorio nativa para Linux, macOS y Windows que orquesta comandos Git y GitHub CLI tras una interfaz de alto rendimiento.',
    architectureHighlights: [
      'Construida con Kotlin 2.3 y Compose Multiplatform 1.10.3 con tema oscuro "Bitstream" (verde/morado neo-retro).',
      'Clean Architecture + Domain-Driven Design + Vertical Slices con Gradle Kotlin DSL.',
      'Integración con ProcessBuilder para comandos git y gh CLI, gestión de ramas, staging, commits, PRs y perfiles.'
    ],
    techStack: ['Kotlin 2.3', 'Compose Multiplatform', 'Gradle KTS', 'Material 3', 'Git / GitHub CLI']
  },
  {
    id: 'auto-transcriber',
    title: 'Auto-Transcriber — Microservicio Whisper API',
    subtitle: 'Servicio containerizado de transcripción de audio/video con soporte para YouTube y Swagger',
    tagline: 'Python · OpenAI Whisper · Docker Compose · Swagger · yt-dlp',
    category: ['ai'],
    companyOrContext: 'Proyecto Personal / Utilidad AI',
    period: '2025',
    featured: false,
    accentColor: '#FFA61E',
    summary: 'Microservicio REST para transcripción y subtitulado automático de archivos de audio/video y enlaces de streaming.',
    architectureHighlights: [
      'Wrapper REST con Swagger sobre OpenAI Whisper (modelos tiny hasta large-v3).',
      'Integración con yt-dlp para descarga y transcripción directa de streams y videos de YouTube.',
      'Salidas multipropósito: TXT, SRT, VTT, TSV y JSON estructurado.'
    ],
    techStack: ['Python', 'OpenAI Whisper', 'Docker Compose', 'yt-dlp', 'Swagger / OpenAPI']
  },
  {
    id: 'pf-modernization',
    title: 'Modernización de Sistemas Críticos (Papeles Farmacéuticos)',
    subtitle: 'Migración arquitectónica de sistemas legado .NET 4.0/Oracle a .NET 8 sobre Podman Linux',
    tagline: '.NET 8 · Oracle · Podman Containers · Clean Architecture · Playwright',
    category: ['cloud', 'industrial'],
    companyOrContext: 'Tutelkan Ltda. / Papeles Farmacéuticos (PF)',
    period: '2025 – 2026',
    featured: false,
    accentColor: '#FF5500',
    summary: 'Migración y desacoplamiento de sistemas empresariales monolíticos (Gestor de Retiros, SGI e ISO Quality Management) desde Windows Server 2003 hacia contenedores modernos en Linux.',
    architectureHighlights: [
      'Reescritura de capas de acceso a datos Oracle con Clean Architecture y .NET 8.',
      'Contenedorización con Podman Compose en servidores Linux eliminando dependencia de IIS legado.',
      'Automatización de pruebas de regresión E2E con Playwright y Vitest.'
    ],
    techStack: ['.NET 8', 'Oracle DB', 'Podman', 'Clean Architecture', 'Playwright', 'Vitest']
  }
];
