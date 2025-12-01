import { PrismaClient, ProjectCategory, ProjectStatus } from '@prisma/client';

const prisma = new PrismaClient();

const projects = [
  // ============================================
  // A. CORE TECHKLEIN ECOSYSTEM
  // ============================================
  {
    slug: 'kleinai-dual-architecture',
    title: 'KleinAI: Dual-AI Governance System',
    tagline: 'Security with soul. Freedom, even from itself.',
    description: 'A revolutionary dual-AI architecture where Klein serves humanity while Ophir watches Klein — creating a self-regulating system that protects human agency by design. Research thesis for Naval Postgraduate School.',
    category: ProjectCategory.AI_ML,
    status: ProjectStatus.IN_PROGRESS,
    featured: true,
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'TypeScript'],
  },
  {
    slug: 'techklein-platform',
    title: 'TechKlein Central Platform',
    tagline: 'The command center for the entire TechKlein ecosystem',
    description: 'Unified platform integrating all TechKlein projects, services, and solutions. Central hub for AI governance, fintech, education, defense, and community impact initiatives.',
    category: ProjectCategory.WEB_APP,
    status: ProjectStatus.IN_PROGRESS,
    featured: true,
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
  },
  {
    slug: 'kleinos',
    title: 'KleinOS',
    tagline: 'Operating system with Klein AI at its core',
    description: 'Custom OS with first-time setup wizard and integrated Klein AI interface. Built for security, privacy, and intelligent system management.',
    category: ProjectCategory.INFRASTRUCTURE,
    status: ProjectStatus.PLANNED,
    technologies: ['Linux', 'Python', 'C++', 'React'],
  },
  {
    slug: 'techklein-bible',
    title: 'TechKlein Bible',
    tagline: 'Philosophical and operational foundation',
    description: 'Comprehensive documentation of TechKlein\'s philosophy, values, operational standards, and vision. The guiding principles for all TechKlein initiatives.',
    category: ProjectCategory.COMMUNITY,
    status: ProjectStatus.IN_PROGRESS,
    technologies: ['Markdown', 'Next.js', 'MDX'],
  },
  {
    slug: 'techklein-supercomputer',
    title: 'Klein SuperNode',
    tagline: 'High-performance AI computing infrastructure',
    description: 'Custom-built supercomputer powered by dual RTX 4090 GPUs or DGX system. Designed for KleinAI training, inference, and research workloads.',
    category: ProjectCategory.INFRASTRUCTURE,
    status: ProjectStatus.IN_PROGRESS,
    technologies: ['NVIDIA CUDA', 'Docker', 'Kubernetes', 'Python'],
  },
  {
    slug: 'techklein-academy',
    title: 'TechKlein Academy',
    tagline: 'AI and Cybersecurity training platform',
    description: 'Comprehensive training platform offering courses in AI development, cybersecurity, and advanced computing. Designed to upskill the next generation of engineers.',
    category: ProjectCategory.EDUCATION,
    status: ProjectStatus.PLANNED,
    technologies: ['Next.js', 'PostgreSQL', 'Python', 'React'],
  },
  {
    slug: 'kleincall',
    title: 'KleinCall Center',
    tagline: 'AI-powered call center infrastructure',
    description: 'Enterprise-grade call center platform with AI-assisted routing, sentiment analysis, and automated support. Creating jobs and economic opportunities.',
    category: ProjectCategory.WEB_APP,
    status: ProjectStatus.PLANNED,
    technologies: ['WebRTC', 'Node.js', 'Python', 'React', 'PostgreSQL'],
  },
  {
    slug: 'sentinelguard',
    title: 'SentinelGuard Defense Platform',
    tagline: 'TechKlein Defense & Security Solutions',
    description: 'Comprehensive defense and security platform integrating threat detection, monitoring, and response systems for military and government applications.',
    category: ProjectCategory.MILITARY,
    status: ProjectStatus.IN_PROGRESS,
    technologies: ['Python', 'C++', 'Rust', 'PostgreSQL', 'Docker'],
  },
  {
    slug: 'feedhope',
    title: 'FeedHope Haiti',
    tagline: 'Food distribution program for Haiti',
    description: 'Community-driven food distribution initiative leveraging technology to efficiently deliver aid and nutrition support to underserved communities in Haiti.',
    category: ProjectCategory.COMMUNITY,
    status: ProjectStatus.PLANNED,
    technologies: ['React Native', 'PostgreSQL', 'Node.js'],
  },
  {
    slug: 'votelive',
    title: 'VoteLive',
    tagline: 'Real-time digital election polling platform',
    description: 'Transparent, secure digital voting and polling platform providing real-time election results with blockchain-verified integrity.',
    category: ProjectCategory.GOVERNMENT,
    status: ProjectStatus.PLANNED,
    technologies: ['React', 'Node.js', 'Blockchain', 'PostgreSQL'],
  },

  // ============================================
  // B. FINANCIAL & PAYMENT SYSTEMS
  // ============================================
  {
    slug: 'kobklein',
    title: 'KobKlein',
    tagline: 'Digital cashless ecosystem for Haiti',
    description: 'Complete fintech solution with NFC cards, POS systems, merchant dashboards, and diaspora remittance integration. Building Haiti\'s digital economy.',
    category: ProjectCategory.FINTECH,
    status: ProjectStatus.IN_PROGRESS,
    featured: true,
    demo_url: 'https://kobklein.com',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'NFC', 'React'],
  },
  {
    slug: 'kleincard',
    title: 'KleinCard Payment System',
    tagline: 'Reloadable NFC payment cards for Haiti',
    description: 'NFC-enabled reloadable payment card system designed for Haitian market. Secure, fast, and accessible digital payment solution.',
    category: ProjectCategory.FINTECH,
    status: ProjectStatus.PLANNED,
    technologies: ['NFC', 'PostgreSQL', 'Node.js', 'React'],
  },

  // ============================================
  // C. EDUCATION & LEARNING
  // ============================================
  {
    slug: 'baccplus',
    title: 'BaccPlus',
    tagline: 'Haitian Baccalauréat exam prep platform',
    description: 'Comprehensive study and exam preparation platform for Haitian students preparing for the Baccalauréat. Interactive lessons, practice tests, and progress tracking.',
    category: ProjectCategory.EDUCATION,
    status: ProjectStatus.IN_PROGRESS,
    technologies: ['Next.js', 'PostgreSQL', 'React', 'Python'],
  },

  // ============================================
  // D. CREATIVE, CULTURAL & MEDIA
  // ============================================
  {
    slug: 'ayitiritmo',
    title: 'AyitiRitmo',
    tagline: 'Haitian music streaming platform',
    description: 'Streaming platform celebrating Haitian music, from konpa to rap. Supporting artists and preserving cultural heritage through technology.',
    category: ProjectCategory.WEB_APP,
    status: ProjectStatus.PLANNED,
    technologies: ['Next.js', 'PostgreSQL', 'AWS S3', 'React'],
  },
  {
    slug: 'noesis',
    title: 'Noesis',
    tagline: 'Arts and creative expression platform',
    description: 'Platform for artists, potters, and creators to showcase their work, connect with audiences, and sell their creations.',
    category: ProjectCategory.COMMUNITY,
    status: ProjectStatus.PLANNED,
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'AWS S3'],
  },
  {
    slug: 'wonderhaven',
    title: 'WonderHaven',
    tagline: 'Inclusive play sanctuary for autistic children',
    description: 'Specialized facility and platform providing safe, sensory-friendly environments for autistic children and families. Building understanding through technology and care.',
    category: ProjectCategory.COMMUNITY,
    status: ProjectStatus.PLANNED,
    technologies: ['React Native', 'PostgreSQL', 'Node.js'],
  },
  {
    slug: 'haiti-world-cup',
    title: 'Haiti World Cup Fan Platform',
    tagline: 'Interactive fan engagement experience',
    description: 'Real-time interactive platform for Haitian football fans during World Cup qualification campaigns. Live updates, predictions, and community engagement.',
    category: ProjectCategory.WEB_APP,
    status: ProjectStatus.PLANNED,
    technologies: ['Next.js', 'WebSocket', 'PostgreSQL', 'React'],
  },

  // ============================================
  // E. CYBERSECURITY, DEFENSE & INFRASTRUCTURE
  // ============================================
  {
    slug: 'ml-ids',
    title: 'Advanced ML-Based IDS',
    tagline: 'Machine learning intrusion detection system',
    description: 'Custom intrusion detection system using machine learning to identify and respond to network threats in real-time. Trained on military-grade threat intelligence.',
    category: ProjectCategory.MILITARY,
    status: ProjectStatus.COMPLETED,
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Wireshark'],
  },
  {
    slug: 'watchlog-ai',
    title: 'WatchLog AI',
    tagline: 'Automated watch and log system for military operations',
    description: 'Digital automation system replacing paper-based CIC watch logs. Real-time alerts, 12 O\'Clock Reports, Bell Ringing Protocols, CAC authentication, and audit logging.',
    category: ProjectCategory.MILITARY,
    status: ProjectStatus.IN_PROGRESS,
    featured: true,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
  },
  {
    slug: 'sentinel-wms',
    title: 'Sentinel WMS',
    tagline: 'Watch Bill Management System',
    description: 'Comprehensive watch bill management and scheduling system for naval operations. Built with Python, C++, and React for maximum performance and reliability.',
    category: ProjectCategory.MILITARY,
    status: ProjectStatus.IN_PROGRESS,
    technologies: ['Python', 'C++', 'React', 'PostgreSQL'],
  },
  {
    slug: 'vigil',
    title: 'V.I.G.I.L.',
    tagline: 'Vital Intelligence Gathering for Immediate Lifesaving',
    description: 'DoD-level military wearable with AI emotional/mental state monitoring. Real-time physiological tracking, stress detection, and command-level intelligence for mission readiness.',
    category: ProjectCategory.MILITARY,
    status: ProjectStatus.PLANNED,
    technologies: ['Python', 'TensorFlow', 'IoT', 'React Native'],
  },
  {
    slug: 'dgx-integration',
    title: 'DGX Security Integration',
    tagline: 'NVIDIA DGX into TechKlein security ecosystem',
    description: 'Integration of NVIDIA DGX systems for high-performance AI security workloads. Advanced threat detection, pattern analysis, and autonomous response.',
    category: ProjectCategory.INFRASTRUCTURE,
    status: ProjectStatus.PLANNED,
    technologies: ['NVIDIA CUDA', 'Python', 'Docker', 'Kubernetes'],
  },

  // ============================================
  // F. APPS, PLATFORMS & SAAS
  // ============================================
  {
    slug: 'agi-haiti',
    title: 'AGI – Accès Global à la Justice',
    tagline: 'Legal access platform for Haiti',
    description: 'Digital legal platform connecting Haitians with legal resources, advice, and representation. Making justice accessible to all.',
    category: ProjectCategory.GOVERNMENT,
    status: ProjectStatus.PLANNED,
    technologies: ['Next.js', 'PostgreSQL', 'React', 'Tailwind CSS'],
  },
  {
    slug: 'alet-app',
    title: 'Alèt App',
    tagline: 'ICE alert and community safety platform',
    description: 'Emergency alert system for immigrant communities. Real-time notifications, safety resources, and community coordination.',
    category: ProjectCategory.COMMUNITY,
    status: ProjectStatus.PLANNED,
    technologies: ['React Native', 'Firebase', 'Node.js'],
  },
  {
    slug: 'caring-compass',
    title: 'Caring Compass Home Care',
    tagline: 'Home healthcare management platform',
    description: 'Complete home care agency management system with client matching, scheduling, billing, and caregiver coordination.',
    category: ProjectCategory.WEB_APP,
    status: ProjectStatus.IN_PROGRESS,
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'React'],
  },
  {
    slug: 'tchatcha509',
    title: 'Tchatcha509',
    tagline: 'OfferUp-style marketplace for Haiti',
    description: 'P2P marketplace platform enabling Haitians to buy, sell, and trade locally. Building Haiti\'s digital commerce economy.',
    category: ProjectCategory.WEB_APP,
    status: ProjectStatus.PLANNED,
    technologies: ['Next.js', 'PostgreSQL', 'AWS S3', 'Stripe'],
  },
  {
    slug: 'pariage-system',
    title: 'Pariage System',
    tagline: 'Sports betting and streaming platform',
    description: 'Integrated sports betting platform with live streaming, real-time odds, and secure payment processing.',
    category: ProjectCategory.WEB_APP,
    status: ProjectStatus.PLANNED,
    technologies: ['Next.js', 'PostgreSQL', 'WebRTC', 'Stripe'],
  },

  // ============================================
  // G. CLOUD, SERVER & INFRASTRUCTURE
  // ============================================
  {
    slug: 'techklein-homelab',
    title: 'TechKlein HomeLab',
    tagline: 'Multi-function server infrastructure',
    description: 'Self-hosted infrastructure for media server, home automation, development environments, and AI workloads. Complete with PiKVM remote management.',
    category: ProjectCategory.INFRASTRUCTURE,
    status: ProjectStatus.IN_PROGRESS,
    technologies: ['Docker', 'Kubernetes', 'Proxmox', 'TrueNAS', 'Home Assistant'],
  },
  {
    slug: 'n8n-automation',
    title: 'N8N Ecosystem Automation',
    tagline: 'Workflow automation for TechKlein',
    description: 'Comprehensive automation workflows connecting all TechKlein systems. Data pipelines, notifications, and integrations.',
    category: ProjectCategory.INFRASTRUCTURE,
    status: ProjectStatus.IN_PROGRESS,
    technologies: ['N8N', 'Docker', 'PostgreSQL', 'API'],
  },
  {
    slug: 'pikvm-system',
    title: 'PiKVM Remote Ops',
    tagline: 'Remote server management with PiKVM and Tailscale',
    description: 'Secure remote KVM-over-IP solution for managing servers from anywhere. Integrated with Tailscale for zero-trust networking.',
    category: ProjectCategory.INFRASTRUCTURE,
    status: ProjectStatus.COMPLETED,
    technologies: ['Raspberry Pi', 'Linux', 'Tailscale', 'Python'],
  },

  // ============================================
  // H. PORTFOLIO & UI/UX
  // ============================================
  {
    slug: 'erickharlein-portfolio',
    title: 'Erickharlein.com Portfolio',
    tagline: 'Personal portfolio and professional showcase',
    description: 'Modern, responsive portfolio showcasing projects, experience, and vision. Built with Next.js and beautiful animations.',
    category: ProjectCategory.WEB_APP,
    status: ProjectStatus.IN_PROGRESS,
    featured: true,
    demo_url: 'https://erickharlein.com',
    github_url: 'https://github.com/erickharlein/erickharlein-monorepo',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma'],
  },
  {
    slug: 'klein-metahuman',
    title: 'Klein AI MetaHuman Interface',
    tagline: '3D avatar interface for Klein AI',
    description: 'Photorealistic 3D avatar representing Klein AI. Interactive, expressive, and built using Unreal Engine MetaHuman technology.',
    category: ProjectCategory.AI_ML,
    status: ProjectStatus.PLANNED,
    technologies: ['Unreal Engine', 'Three.js', 'WebGL', 'React'],
  },

  // ============================================
  // I. RESEARCH & ACADEMIC
  // ============================================
  {
    slug: 'kleinai-thesis',
    title: 'KleinAI Academic Thesis',
    tagline: 'Naval Postgraduate School research',
    description: 'Full multi-chapter academic thesis on defensive dual-AI architecture. Explores self-governing AI systems that protect humanity by protecting us from themselves.',
    category: ProjectCategory.AI_ML,
    status: ProjectStatus.IN_PROGRESS,
    featured: true,
    technologies: ['LaTeX', 'Python', 'TensorFlow', 'Academic Research'],
  },
];

async function main() {
  console.log('🌱 Starting seed...');

  // Create technologies first
  const techMap = new Map<string, string>();
  const uniqueTechs = [...new Set(projects.flatMap(p => p.technologies))];

  for (const techName of uniqueTechs) {
    const tech = await prisma.technology.upsert({
      where: { slug: techName.toLowerCase().replace(/[^a-z0-9]+/g, '-') },
      update: {},
      create: {
        slug: techName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name: techName,
        category: getTechCategory(techName),
        proficiency: 85,
      },
    });
    techMap.set(techName, tech.id);
  }

  console.log(`✅ Created ${uniqueTechs.length} technologies`);

  // Create projects
  for (const projectData of projects) {
    const { technologies, ...data } = projectData;

    const project = await prisma.project.upsert({
      where: { slug: data.slug },
      update: data,
      create: data,
    });

    // Connect technologies
    for (const techName of technologies) {
      const techId = techMap.get(techName);
      if (techId) {
        await prisma.projectTechnology.upsert({
          where: {
            project_id_technology_id: {
              project_id: project.id,
              technology_id: techId,
            },
          },
          update: {},
          create: {
            project_id: project.id,
            technology_id: techId,
          },
        });
      }
    }

    console.log(`✅ Created project: ${data.title}`);
  }

  console.log('🎉 Seed completed successfully!');
}

function getTechCategory(techName: string): any {
  const categories: Record<string, string> = {
    'Python': 'LANGUAGE',
    'TypeScript': 'LANGUAGE',
    'JavaScript': 'LANGUAGE',
    'C++': 'LANGUAGE',
    'Rust': 'LANGUAGE',
    'Next.js': 'FRAMEWORK',
    'React': 'FRAMEWORK',
    'Node.js': 'FRAMEWORK',
    'TensorFlow': 'AI_ML',
    'PyTorch': 'AI_ML',
    'PostgreSQL': 'DATABASE',
    'MongoDB': 'DATABASE',
    'AWS': 'CLOUD',
    'Azure': 'CLOUD',
    'GCP': 'CLOUD',
    'Docker': 'DEVOPS',
    'Kubernetes': 'DEVOPS',
    'Blockchain': 'OTHER',
    'NFC': 'OTHER',
  };
  
  return categories[techName] || 'OTHER';
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
