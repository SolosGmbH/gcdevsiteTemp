
'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { companyInfo } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import {
  Phone,
  MapPin,
  Globe,
  CheckCircle,
  AlertCircle,
  Send
} from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t.contact.form.error);
      return;
    }

    // Erstelle mailto-Link mit den Formulardaten
    const recipient = 'it@gc.dev';
    const subject = formData.subject || t.contact.form.defaultSubject;
    const body = `${t.contact.form.emailTemplate.greeting}

${t.contact.form.emailTemplate.name}: ${formData.name}
${t.contact.form.emailTemplate.email}: ${formData.email}
${formData.company ? `${t.contact.form.emailTemplate.company}: ${formData.company}` : ''}

${t.contact.form.emailTemplate.message}:
${formData.message}

${t.contact.form.emailTemplate.signature}`;

    // URL-encode die Parameter
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Öffne den Standard-E-Mail-Client
    window.location.href = mailtoLink;

    // Zeige Erfolgs-Toast
    toast.success(t.contact.form.success);

    // Formular zurücksetzen
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.info.address,
      value: `${companyInfo.address}\n${companyInfo.postalCode} ${companyInfo.city}\n${companyInfo.country}`,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: companyInfo.phone,
      href: `tel:${companyInfo.phone.replace(/\s/g, '')}`,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Globe,
      label: t.contact.info.web,
      value: companyInfo.website,
      href: `https://${companyInfo.website}`,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Nachricht senden
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.name} *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.email} *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.form.company}
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Ihr Unternehmen (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.form.subject}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Betreff Ihrer Anfrage"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.form.message} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full resize-none"
                      placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Send className="h-5 w-5" />
                      {t.contact.form.submit}
                    </div>
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    {t.contact.form.requiredFields}
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Company Info Card */}
            <Card className="p-8 shadow-lg border-l-4 border-l-green-500">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {companyInfo.name}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className={`flex-shrink-0 p-3 rounded-full ${info.bgColor}`}>
                        <info.icon className={`h-5 w-5 ${info.color}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className={`${info.color} hover:underline transition-colors`}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            {/* Response Time Info */}
            <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h4 className="text-lg font-semibold text-gray-900">
                    {t.contact.info.responseTime.title}
                  </h4>
                </div>
                <p className="text-gray-700">
                  {t.contact.info.responseTime.description}
                </p>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="p-6 bg-gray-50">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                  <h4 className="text-lg font-semibold text-gray-900">
                    {t.contact.info.businessHours.title}
                  </h4>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p><strong>{t.contact.info.businessHours.weekdays}</strong></p>
                  <p><strong>{t.contact.info.businessHours.saturday}</strong></p>
                  <p><strong>{t.contact.info.businessHours.sunday}</strong></p>
                  <p className="text-sm text-gray-600 mt-3">
                    {t.contact.info.businessHours.note}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
