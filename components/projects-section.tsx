
'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { projects } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import {
  MapPin,
  Zap,
  Calendar,
  Building,
  TrendingUp,
  ExternalLink
} from 'lucide-react';

/* eslint-disable react/no-unstable-nested-components */

export function ProjectsSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('germany');

  const calculateTotalCapacity = (projectList: any[]) => {
    return projectList.reduce((total, project) => {
      const capacity = parseFloat(project.capacity.replace(/[^\d.]/g, ''));
      return total + (isNaN(capacity) ? 0 : capacity);
    }, 0).toFixed(1);
  };

  const ProjectCard = ({ project }: { project: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500">
        <CardContent className="p-0">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                {project.name}
              </h4>
              {project.location && (
                <div className="flex items-center gap-1 text-gray-600 text-sm mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
              )}
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Zap className="h-3 w-3 mr-1" />
              {project.capacity}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            {project.gridConnection && project.gridConnection !== 'N/A' && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="text-gray-600">
                  {t.projects.gridConnection}: <span className="font-semibold">{project.gridConnection}</span>
                </span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4 text-purple-600" />
              <span className="text-gray-600">
                {t.projects.scope}: <span className="font-semibold">{project.scope}</span>
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const FeaturedProject = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.projects.featured.title}</h3>
        <p className="text-gray-600">{t.projects.featured.subtitle}</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="p-8 border-2 border-green-200 shadow-lg">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4">Hartungshof</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-green-600" />
                    <span><strong>{t.projects.capacity}:</strong> 20,8 MWp</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span><strong>{t.projects.location}:</strong> Kleinblittersdorf</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <span><strong>{t.projects.gridConnection}:</strong> 2023</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-orange-600" />
                    <span><strong>{t.projects.scope}:</strong> EPC+ Development</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-sm text-gray-600 mb-2">{t.projects.featured.estimatedProduction}</p>
                  <p className="text-2xl font-bold text-green-600">~25 GWh</p>
                  <p className="text-xs text-gray-500 mt-2">{t.projects.featured.householdsSupplied}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
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
            {t.projects.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Featured Project */}
        <FeaturedProject />

        {/* Projects Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger
                value="germany"
                className="text-lg"
                onClick={() => setActiveTab('germany')}
              >
                {t.projects.germany}
              </TabsTrigger>
              <TabsTrigger
                value="saarland"
                className="text-lg"
                onClick={() => setActiveTab('saarland')}
              >
                {t.projects.saarland}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="germany" className="space-y-8">
              {/* Germany Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-8"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t.projects.overviewGermany}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {calculateTotalCapacity(projects.germany)} MW
                      </div>
                      <p className="text-gray-600">{t.projects.totalCapacity}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {projects.germany.length}
                      </div>
                      <p className="text-gray-600">{t.projects.projects}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        16
                      </div>
                      <p className="text-gray-600">{t.projects.federalStates}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.germany.map((project) => (
                  <ProjectCard key={`${project.name}-${project.capacity}-${project.gridConnection}`} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="saarland" className="space-y-8">
              {/* Saarland Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t.projects.overviewSaarland}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        53,63 MW
                      </div>
                      <p className="text-gray-600">{t.projects.totalCapacity}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {projects.saarland.length}
                      </div>
                      <p className="text-gray-600">{t.projects.projects}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        100%
                      </div>
                      <p className="text-gray-600">{t.projects.localExpertise}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.saarland.map((project) => (
                  <ProjectCard key={`${project.name}-${project.capacity}-${project.gridConnection}`} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">
                {t.projects.cta.title}
              </h3>
              <p className="text-lg mb-6 opacity-90">
                {t.projects.cta.description}
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-green-700 hover:bg-gray-100"
              >
                {t.projects.cta.button}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
