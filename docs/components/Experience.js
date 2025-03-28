import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Experience = () => (
  <motion.section id="experience" className="mb-16" variants={itemVariants}>
    <h2 className="text-3xl font-semibold text-purple-400 mb-6 flex items-center gap-2">
      <Briefcase className="w-6 h-6 text-purple-400" />
      Experience
    </h2>
    <div className="space-y-8">
      <Card className="shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.01] border border-gray-700 bg-gray-800">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-indigo-400">
            Senior Associate Consultant
          </CardTitle>
          <CardDescription className="text-gray-400">
            INFOSYS LIMITED, Noida, India
          </CardDescription>
          <CardDescription className="text-gray-400">
            FEB, 2025 - Present
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed">
            <li className="mb-2">
              Implemented streaming pipelines on Databricks for real-time
              data processing, enhancing data availability by 20%.
            </li>
            <li className="mb-2">
              Assisted in the development and maintenance of data pipelines
              using Databricks and PySpark, improving data processing
              efficiency by 15%.
            </li>
            <li className="mb-2">
              Supported ongoing ETL and data processing tasks to ensure
              99.9% data accuracy and smooth data operations.
            </li>
            <li className="mb-2">
              Collaborated with cross-functional teams to gather data
              requirements and optimize workflows, reducing project
              turnaround time by 10%.
            </li>
            <li className="mb-2">
              Utilized Python for scripting data transformation and
              manipulation, automating tasks and saving 5 hours per week.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.01] border border-gray-700 bg-gray-800">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-indigo-400">
            Systems Engineer
          </CardTitle>
          <CardDescription className="text-gray-400">
            TATA CONSULTANCY SERVICES, Noida, India
          </CardDescription>
          <CardDescription className="text-gray-400">
            FEB, 2020 - JAN, 2025
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed">
            <li className="mb-2">
              Built real-time streaming pipelines for TotalEnergies using
              Databricks & PySpark, processing 100TB of sensor data daily.
            </li>
            <li className="mb-2">
              Developed batch processing pipelines with Python & Azure
              Function Apps, improving reporting & analytics generation
              time by 40%.
            </li>
            <li className="mb-2">
              Automated Databricks job monitoring with Python & Microsoft
              Teams, reducing manual effort by 2 hours daily and improving
              system reliability.
            </li>
            <li className="mb-2">
              Designed and optimized ETL workflows, increasing data
              integrity and accuracy by 25%.
            </li>
            <li className="mb-2">
              Automated data processing tasks using Python, boosting
              overall efficiency by 30%.
            </li>
            <li className="mb-2">
              Led a 6-member cross-functional team, fostering
              collaboration across business units and delivering projects
              15% ahead of schedule.
            </li>
            <li className="mb-2">
              Developed Interactive Electronic Technical Manuals (IETMs)
              using XML & HTML, enhancing user experience and reducing
              training time.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.01] border border-gray-700 bg-gray-800">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-indigo-400">
            Hardware Design Engineer
          </CardTitle>
          <CardDescription className="text-gray-400">
            SATYAM SOFTWARE SOLUTIONS PVT. LTD., Noida, India
          </CardDescription>
          <CardDescription className="text-gray-400">
            JUNE, 2019 - FEB, 2020
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed">
            <li className="mb-2">
              Designed schematics and PCB layouts for Smart Ticket Vending
              Machines and AFC Gates for Delhi Metro Rail Corporation.
            </li>
            <li className="mb-2">
              Created PCB layouts using Altium Designer and Ki-CAD,
              improving design accuracy by 20%.
            </li>
            <li className="mb-2">
              Performed testing and validation of hardware designs,
              ensuring 98% reliability and adherence to quality standards.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </motion.section>
);

export default Experience;