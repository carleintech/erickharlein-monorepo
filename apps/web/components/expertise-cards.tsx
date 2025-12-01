'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Shield, Users, Zap, Database, Cloud, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@erickharlein/ui';

const expertise = [
  {
    icon: Code2,
    title: 'Systems Engineering',
    description: 'Full-stack development, DevSecOps pipelines, and automation.',
    skills: ['TypeScript', 'Python', 'Next.js', 'PostgreSQL', 'Docker'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Cognitive architectures, model training, and adaptive intelligence.',
    skills: ['PyTorch', 'LangChain', 'RAG', 'Vector DBs', 'Agent Systems'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Threat analysis, intrusion detection, and encryption frameworks.',
    skills: ['SIEM', 'Zero Trust', 'PKI', 'Penetration Testing', 'SOC'],
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'Navy operations leadership, mentoring, and system-level strategy.',
    skills: ['Team Building', 'Strategic Planning', 'Agile', 'DevOps', 'Mentorship'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Scalable data pipelines, real-time processing, and analytics.',
    skills: ['Prisma', 'Supabase', 'Redis', 'Kafka', 'ETL'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Multi-cloud infrastructure, serverless, and high-availability systems.',
    skills: ['AWS', 'Azure', 'Vercel', 'Kubernetes', 'Terraform'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Zap,
    title: 'System Integration',
    description: 'API design, microservices, and enterprise system orchestration.',
    skills: ['REST', 'GraphQL', 'gRPC', 'Webhooks', 'Event-Driven'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Lock,
    title: 'Identity & Access',
    description: 'Biometric systems, zero-knowledge protocols, and secure authentication.',
    skills: ['OAuth', 'SAML', 'Biometrics', 'MFA', 'SSO'],
    color: 'from-purple-500 to-pink-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ExpertiseCards() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Core Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fusing military precision with cutting-edge technology to build secure, intelligent, and scalable systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="glass-strong border-0 h-full group hover:glow transition-all duration-300">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
