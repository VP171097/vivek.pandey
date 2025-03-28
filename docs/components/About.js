import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const About = () => (
  <motion.section id="about" className="mb-16" variants={itemVariants}>
    <h2 className="text-3xl font-semibold text-purple-400 mb-6 flex items-center gap-2">
      <User className="w-6 h-6 text-purple-400" />
      About Me
    </h2>
    <div className="flex flex-col md:flex-row gap-12 items-center">
      <div className="md:w-1/3">
        <img
          src="https://placehold.co/400x400/EEE/31343C"
          alt="Vivek Pandey"
          className="rounded-xl shadow-lg border border-gray-700"
        />
      </div>
      <div className="md:w-2/3">
        <p className="text-gray-300 leading-relaxed text-lg">
          I am a highly motivated Azure Data Engineer with a proven track record
          of designing, developing, and implementing robust data solutions on
          the Azure platform. My expertise lies in building
          high-performance, scalable data pipelines for both real-time
          streaming and batch processing. I am adept at optimizing ETL
          workflows, automating data processes, and leveraging
          technologies like Python, PySpark, and Azure DataBricks to drive
          meaningful business insights. I am passionate about solving
          complex data challenges and contributing to data-driven
          decision-making.
        </p>
      </div>
    </div>
  </motion.section>
);

export default About;