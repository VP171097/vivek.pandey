import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Briefcase,
  Zap,
  GraduationCap,
  Award,
  Mail,
  Phone,
  Linkedin,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// --- Components ---

// Header Component
const Header = ({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (section: string) => void }) => (
  <header className="bg-gray-900 text-white py-4 border-b border-gray-800">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">Vivek Pandey</h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                onClick={() => setActiveSection('about')}
                className={cn(
                  "hover:text-purple-400 no-underline transition-colors duration-300",
                  activeSection === 'about' && 'active-link text-purple-400 font-semibold border-b-2 border-purple-400'
                )}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => setActiveSection('experience')}
                className={cn(
                  "hover:text-purple-400 no-underline transition-colors duration-300",
                  activeSection === 'experience' && 'active-link text-purple-400 font-semibold border-b-2 border-purple-400'
                )}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setActiveSection('skills')}
                className={cn(
                  "hover:text-purple-400 no-underline transition-colors duration-300",
                  activeSection === 'skills' && 'active-link text-purple-400 font-semibold border-b-2 border-purple-400'
                )}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={() => setActiveSection('education')}
                className={cn(
                  "hover:text-purple-400 no-underline transition-colors duration-300",
                  activeSection === 'education' && 'active-link text-purple-400 font-semibold border-b-2 border-purple-400'
                )}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                onClick={() => setActiveSection('certifications')}
                className={cn(
                  "hover:text-purple-400 no-underline transition-colors duration-300",
                  activeSection === 'certifications' && 'active-link text-purple-400 font-semibold border-b-2 border-purple-400'
                )}
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setActiveSection('contact')}
                className={cn(
                  "hover:text-purple-400 no-underline transition-colors duration-300",
                  activeSection === 'contact' && 'active-link text-purple-400 font-semibold border-b-2 border-purple-400'
                )}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

// About Section Component
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

// Experience Section Component
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

// Skills Section Component
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
            <Badge variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">
              Python
            </Badge>
            <Badge variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">
              Pandas
            </Badge>
            <Badge variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">
              PySpark
            </Badge>
            <Badge variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">
              SQL
            </Badge>
            <Badge variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">
              Azure DataBricks
            </Badge>
            <Badge variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">
              Azure SQL Server
            </Badge>
            <Badge variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">
              Data Lake
            </Badge>
            <Badge variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">
              Function Apps
            </Badge>
            <Badge variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">
              Kafka
            </Badge>
            <Badge variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">
              Azure Storage Explorer
            </Badge>
             <Badge variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">
              GitHub
            </Badge>
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
            <Badge variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">Hindi</Badge>
            <Badge variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700">English</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  </motion.section>
);

// Education Section Component
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

// Certifications Section Component
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

// Contact Section Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log(formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message!  I will respond as soon as possible.');
  };

  return (
    <motion.section id="contact" className="mb-16" variants={itemVariants}>
      <h2 className="text-3xl font-semibold text-purple-400 mb-6 flex items-center gap-2">
        <Mail className="w-6 h-6 text-purple-400" />
        Contact
      </h2>
      <div className="space-y-8">
        <Card className="shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.01] border border-gray-700 bg-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-indigo-400">
              Get In Touch
            </CardTitle>
            <CardDescription className="text-gray-400">
              Feel free to reach out to me using the form below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="mt-1 bg-gray-800 text-white border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="mt-1 bg-gray-800 text-white border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className="mt-1 min-h-[120px] bg-gray-800 text-white border-gray-700"
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <p className="text-gray-300 text-lg flex items-center gap-2">
            <Mail className="w-5 h-5 text-gray-400" />
            Email: vivekpandey.iimt@gmail.com
          </p>
          <p className="text-gray-300 text-lg flex items-center gap-2">
            <Phone className="w-5 h-5 text-gray-400" />
            Phone: +91-7011088059
          </p>
          <p className="text-gray-300 text-lg flex items-center gap-2">
            <Linkedin className="w-5 h-5 text-gray-400" />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/vivek-pandey-691799149/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-medium"
            >
              Vivek Pandey
            </a>
          </p>
          <p className="text-gray-300 text-lg flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-400" />
            Location: Noida, UP, India
          </p>
        </div>
      </div>
    </motion.section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-5 text-center rounded-t-lg shadow-md border-t border-gray-800">
    <p>© 2025 Vivek Pandey. All rights reserved.</p>
  </footer>
);

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = React.useState('about');

  return (
    <div className="bg-gray-950">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto px-4 py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {activeSection === 'about' && <About />}
          {activeSection === 'experience' && <Experience />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'education' && <Education />}
          {activeSection === 'certifications' && <Certifications />}
          {activeSection === 'contact' && <Contact />}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
