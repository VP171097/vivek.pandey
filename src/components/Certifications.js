import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Certifications = () => (
  <motion.section id="certifications" className="mb-16" variants={itemVariants}>
    <h2 className="text-3xl font-semibold text-purple-400 mb-6 flex items-center gap-2">
      <Award className="w-6 h-6 text-purple-400" />
      Certifications
    </h2>
    <ul className="list-disc list-inside space-y-3 text-gray-300">
      <li className="mb-2">
        Academy Accreditation - Databricks Lakehouse Fundamentals
        (Databricks)
      </li>
      <li className="mb-2">
        Introduction to Azure SQL Database for Beginners (Udemy)
      </li>
      <li className="mb-2">
        Web Scraping In Python: Master The Fundamentals (Udemy)
      </li>
      <li className="mb-2">Data Science Certification (ExcelR)</li>
      <li className="mb-2">
        Python for Data Science, AI & Development (Coursera)
      </li>
      <li className="mb-2">Python Essential Training (LinkedIn)</li>
      <li className="mb-2">
        Programming for Everybody (Getting Started with Python)
        (Coursera)
      </li>
    </ul>
  </motion.section>
);

export default Certifications;