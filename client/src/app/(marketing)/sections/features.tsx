'use client';

import { MagicCard } from '@/components/magicui/magic-card';
import { motion } from 'framer-motion';
import { FileText, BarChart2, Zap, Database } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Features() {
  const { theme } = useTheme();

  const features = [
    {
      icon: <FileText size={32} />,
      title: 'Intelligent Document Processing',
      description:
        'Our advanced AI extracts text, tables, and images from any PDF document, regardless of complexity or formatting.',
    },
    {
      icon: <BarChart2 size={32} />,
      title: 'Data Analysis & Insights',
      description:
        'Transform raw data into actionable business intelligence with automated analysis and visualization tools.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Seamless Integration',
      description:
        'Connect with your existing tools and workflows through our flexible API and pre-built integrations for major platforms.',
    },
    {
      icon: <Database size={32} />,
      title: 'Secure Knowledge Base',
      description:
        'Build a searchable knowledge repository from your documents with customizable access controls and version tracking.',
    },
  ];

  return (
    <section className='bg-background py-24'>
      <div className='container mx-auto px-4 lg:px-8'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <h2 className='mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl'>
            How It Works
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-muted-foreground'>
            Our comprehensive platform transforms your document chaos into
            structured, actionable data with minimal effort.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='rounded-xl p-0 shadow-none border-none bg-none'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <MagicCard
                gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
                className='p-8 rounded-xl'>
                <div className='mb-4 inline-block rounded-full bg-accent/20 p-3 text-primary'>
                  {feature.icon}
                </div>
                <h3 className='mb-3 text-xl font-bold text-foreground'>
                  {feature.title}
                </h3>
                <p className='text-muted-foreground'>{feature.description}</p>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
