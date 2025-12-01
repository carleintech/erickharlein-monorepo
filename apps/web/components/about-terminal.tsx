'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Card } from '@erickharlein/ui';

const commands = [
  { command: 'whoami', output: 'Erickharlein Pierre' },
  {
    command: 'cat role.txt',
    output: 'U.S. Navy Operations Specialist | Systems Engineer | AI Architect',
  },
  {
    command: 'cat company.txt',
    output: 'Founder of TechKlein LLC — a U.S.-based AI, cybersecurity, and digital innovation company.',
  },
  {
    command: 'mission --display',
    output: 'To engineer intelligent systems that empower people, strengthen security, and shape the future responsibly.',
  },
  {
    command: 'techklein --info',
    output: 'Smart Tech. Secure Future. | Founded 2025 | EIN: 41-2544231 | HQ: Virginia, USA',
  },
];

export function AboutTerminal() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<typeof commands>([]);

  useEffect(() => {
    if (currentLine < commands.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, commands[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

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
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into my mission, background, and the driving force behind TechKlein.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass-strong border-primary/20 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-muted/20 border-b border-primary/20 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-muted-foreground font-mono">techklein:~$ terminal</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-4 min-h-[400px]">
              {displayedLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-1"
                >
                  <div className="text-cyan-400 flex items-center gap-2">
                    <span className="text-primary">{'>'}</span>
                    {line.command}
                  </div>
                  <div className="text-foreground/80 pl-4">{line.output}</div>
                </motion.div>
              ))}

              {currentLine < commands.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-primary flex items-center gap-2"
                >
                  <span>{'>'}</span>
                  <span className="terminal-cursor" />
                </motion.div>
              )}

              {currentLine >= commands.length && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 border-t border-primary/20 text-foreground/90 leading-relaxed"
                >
                  <p className="mb-4">
                    I'm <span className="text-primary font-semibold">Erickharlein Pierre</span>, a U.S. Navy Systems
                    Engineer and AI Architect driven by purpose and precision.
                  </p>
                  <p className="mb-4">
                    My work blends operational discipline with cutting-edge engineering to build systems that{' '}
                    <span className="text-cyan-400">think</span>, <span className="text-violet-400">protect</span>, and{' '}
                    <span className="text-green-400">evolve</span>.
                  </p>
                  <p>
                    I'm the founder of{' '}
                    <span className="text-gradient font-semibold">
                      TechKlein — an ecosystem of intelligent, secure technologies
                    </span>{' '}
                    serving people, communities, and governments.
                  </p>
                </motion.div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
