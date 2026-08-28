import { SkillCategory } from '../core/models/skill.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & Microservicios',
    description: 'Arquitecturas orientadas a dominio (DDD), Clean Architecture, CQRS y procesamiento event-driven de alto rendimiento.',
    accentColor: '#3EB0F9',
    iconName: 'server',
    skills: [
      { name: 'NestJS v11+', level: 'Experto', highlight: true },
      { name: '.NET 8 / C# 12', level: 'Experto', highlight: true },
      { name: 'TypeScript / Node.js', level: 'Experto', highlight: true },
      { name: 'Python 3.12 (AWS Lambda)', level: 'Avanzado', highlight: true },
      { name: 'RabbitMQ (AMQP / MQTT)', level: 'Avanzado', highlight: true },
      { name: 'PostgreSQL (RLS) / SQL Server', level: 'Avanzado', highlight: true },
      { name: 'Firestore / Redis', level: 'Avanzado' },
      { name: 'Express.js / REST APIs', level: 'Experto' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & Multiplataforma',
    description: 'Interfaces reactivas, arquitecturas modulares Standalone, Server-Side Rendering (SSR) y aplicaciones nativas de escritorio/móvil.',
    accentColor: '#FFA61E',
    iconName: 'layout',
    skills: [
      { name: 'Angular (v19–v22 / Signals)', level: 'Experto', highlight: true },
      { name: 'Tailwind CSS v4', level: 'Avanzado', highlight: true },
      { name: 'Quasar / Vue 3', level: 'Experto', highlight: true },
      { name: 'React Native 0.75', level: 'Avanzado', highlight: true },
      { name: 'Kotlin / Compose Desktop', level: 'Intermedio', highlight: true },
      { name: 'HTML5 / Modern Web APIs', level: 'Experto' },
      { name: 'Vitest / Playwright / Cypress', level: 'Avanzado' }
    ]
  },
  {
    id: 'industrial',
    title: 'IoT & Automatización Industrial',
    description: 'Integración en tiempo real con hardware de planta, controladores lógicos, balanzas y protocolos industriales de campo.',
    accentColor: '#00AA47',
    iconName: 'cpu',
    skills: [
      { name: 'PLC Siemens S7 (Modbus TCP/IP)', level: 'Experto', highlight: true },
      { name: 'Sistemas BMS (Schneider/Continuum)', level: 'Experto', highlight: true },
      { name: 'RFID Hopeland & Trazabilidad', level: 'Avanzado', highlight: true },
      { name: 'Básculas Ishida DACS-GN', level: 'Avanzado', highlight: true },
      { name: 'Impresoras Zebra (ZPL)', level: 'Avanzado' },
      { name: 'MQTT / BACnet / Modbus', level: 'Experto', highlight: true },
      { name: 'SignalR / WebSockets', level: 'Avanzado' }
    ]
  },
  {
    id: 'ai-sdd',
    title: 'Agentes AI, SDD & Machine Learning',
    description: 'Aceleración de desarrollo mediante flujos Spec-Driven Development (SDD) con agentes autónomos y modelos de visión en producción.',
    accentColor: '#FF5500',
    iconName: 'sparkles',
    skills: [
      { name: 'Spec-Driven Development (SDD)', level: 'Experto', highlight: true },
      { name: 'Agentes AI (Gemini / Antigravity)', level: 'Experto', highlight: true },
      { name: 'PyTorch (ResNet, YOLO en Lambda)', level: 'Avanzado', highlight: true },
      { name: 'OpenAI Whisper API', level: 'Avanzado' },
      { name: 'Decision Support Systems (DSS)', level: 'Avanzado', highlight: true },
      { name: 'Arquitectura AGENTS.md / OpenSpec', level: 'Experto' }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Infraestructura Serverless, contenedores ligeros en Linux, despliegue continuo y seguridad multi-tenant.',
    accentColor: '#9D4EDD',
    iconName: 'cloud',
    skills: [
      { name: 'GCP (Cloud Functions Gen 2 / Cloud Run)', level: 'Avanzado', highlight: true },
      { name: 'Firebase Hosting / Firestore', level: 'Experto', highlight: true },
      { name: 'AWS (Lambda, SQS, S3, SAM, ECR)', level: 'Avanzado', highlight: true },
      { name: 'Docker / Podman / Compose', level: 'Experto', highlight: true },
      { name: 'GitHub Actions (CI/CD / WIF)', level: 'Avanzado', highlight: true },
      { name: 'Linux / Nginx / Systemd', level: 'Experto' }
    ]
  }
];
