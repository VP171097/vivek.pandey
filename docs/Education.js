import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Education = () => (
  <motion.section id="education" className="mb-16" variants={itemVariants}>
    <h2 className="text-3xl font-semibold text-purple-400 mb-6 flex items-center gap-2">
      <GraduationCap className="w-6 h-6 text-purple-400" />
      Education
    </h2>
    <Card className="shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.01] border border-gray-700 bg-gray-800">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-indigo-400">
          IIMT COLLEGE OF ENGINEERING
        </CardTitle>
        <CardDescription className="text-gray-400">
          Bachelor of Technology in Electronics and Communication
          Engineering
        </CardDescription>
        <CardDescription className="text-gray-400">
          Greater Noida, India
        </CardDescription>
        <CardDescription className="text-gray-400">
          2015 - 2019
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">Grade: 71%</p>
      </CardContent>
    </Card>
  </motion.section>
);

export default Education;