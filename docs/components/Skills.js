import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Skills = () => (
  <motion.section id="skills" className="mb-16" variants={itemVariants}>
    <h2 className="text-3xl font-semibold text-purple-400 mb-6 flex items-center gap-2">
      <Zap className="w-6 h-6 text-purple-400" />
      Skills
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.01] border border-gray-700 bg-gray-800">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-200">
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Pandas', 'PySpark', 'SQL', 'Azure DataBricks', 'Azure SQL Server', 'Data Lake', 'Function Apps', 'Kafka', 'Azure Storage Explorer', 'GitHub'].map(skill => (
              <Badge key={skill} variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.01] border border-gray-700 bg-gray-800">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-200">
            Languages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {['Hindi', 'English'].map(language => (
              <Badge key={language} variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">
                {language}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </motion.section>
);

export default Skills;