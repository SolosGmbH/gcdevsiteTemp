
'use client';

import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { developmentTeam } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  User,
  MapPin,
  Briefcase,
  Users
} from 'lucide-react';

export function TeamSection() {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-20 bg-gray-50">
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
            {t.team.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.team.subtitle}
          </p>
        </motion.div>

        {/* Team Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12"
        >
          <div className="text-center mb-6">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t.team.expertiseTitle}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.team.expertiseDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <p className="text-gray-700">{t.team.yearsExperience}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-700">{t.team.projectsManaged}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-gray-700">{t.team.mwDeveloped}</p>
            </div>
          </div>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {developmentTeam.map((member) => (
            <motion.div
              key={member.email}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 h-full">
                <CardContent className="p-0">
                  {/* Member Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h4>
                      <p className="text-green-600 font-semibold mb-2 flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {member.position}
                      </p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="h-4 w-4 text-green-600" />
                      <a
                        href={`tel:${member.phone.replace(/\s/g, '')}`}
                        className="hover:text-green-600 transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>

                  {/* Expertise Areas */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">{t.team.expertise.title}</h5>
                    <div className="space-y-2">
                      {member.position.includes('GIS') && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-purple-600" />
                          <span className="text-sm text-gray-600">{t.team.expertise.gisAnalysis}</span>
                        </div>
                      )}
                      {member.position.includes('Senior') && (
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-gray-600">{t.team.expertise.seniorManagement}</span>
                        </div>
                      )}
                      {member.position.includes('Land') && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">{t.team.expertise.landAcquisition}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-orange-600" />
                        <span className="text-sm text-gray-600">{t.team.expertise.stakeholderManagement}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.location.href = `mailto:${member.email}`}
                      className="flex-1"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      E-Mail
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.location.href = `tel:${member.phone.replace(/\s/g, '')}`}
                      className="flex-1"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Anruf
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-white shadow-lg">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.team.cta.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {t.team.cta.description}
              </p>
              <Button
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-green-600 hover:bg-green-700"
              >
                {t.team.cta.button}
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
