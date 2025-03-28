import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log(formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I will respond as soon as possible.');
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
                <label htmlFor="