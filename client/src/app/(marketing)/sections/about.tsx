'use client';

import { motion } from 'framer-motion';

import { TextReveal } from '@/components/magicui/text-reveal';

export function About() {
  return (
    <section className='bg-background py-24'>
      <div className='container mx-auto px-4 lg:px-8'>
        <motion.div
          className='mx-auto max-w-3xl text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <h2 className='mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl'>
            About PrismAI
          </h2>
          <div className='h-1 w-20 mx-auto bg-primary mb-8'></div>
          <TextReveal className='text-xl leading-relaxed text-muted-foreground'>
            PrismAI transforms unstructured PDF documents into actionable
            insights using cutting-edge AI. We extract, organize, and analyze
            data trapped in your documents, enabling faster decision-making and
            reducing manual processing time by up to 90%. Our platform
            seamlessly integrates with your existing workflows, providing a
            unified view of your information landscape.
          </TextReveal>
        </motion.div>
      </div>
    </section>
  );
}
