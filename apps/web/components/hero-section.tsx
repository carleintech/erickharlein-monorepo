'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@erickharlein/ui';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const titles = [
  'Full-Stack Engineer',
  'Systems Architect',
  'AI Specialist',
];

const taglines = [
  'Crafting elegant solutions with modern technology',
  'Building scalable systems that drive innovation',
  'Transforming ideas into powerful digital experiences',
];

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    let titleInterval: NodeJS.Timeout;
    let taglineInterval: NodeJS.Timeout;
    
    // Delay start to avoid Strict Mode double renders
    const startTimer = setTimeout(() => {
      titleInterval = setInterval(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 4000);

      taglineInterval = setInterval(() => {
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
      }, 6000);
    }, 100);

    return () => {
      clearTimeout(startTimer);
      if (titleInterval) clearInterval(titleInterval);
      if (taglineInterval) clearInterval(taglineInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-400/30 to-purple-500/30 dark:from-indigo-500/20 dark:to-purple-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-rose-500/30 dark:from-pink-500/20 dark:to-rose-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          {/* Name with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
              <span className="text-gradient animate-glow">Erickharlein Pierre</span>
            </h1>
          </motion.div>

          {/* Rotating Title */}
          <motion.div
            key={`title-${titleIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-10 flex items-center justify-center"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90">{titles[titleIndex]}</h2>
          </motion.div>

          {/* Typing Tagline */}
          <motion.div
            key={`tagline-${taglineIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-12 flex items-center justify-center"
          >
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              {taglines[taglineIndex]}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 pt-6"
          >
            {[
              { value: '8+', label: 'Years' },
              { value: '50+', label: 'Projects' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (stat.label === 'Years' ? 0 : stat.label === 'Projects' ? 0.15 : 0.3) }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 pt-6"
          >
            <Link href="/projects">
              <Button size="lg" className="group">
                <Sparkles className="mr-2 h-4 w-4 group-hover:animate-spin" />
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
