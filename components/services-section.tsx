
'use client';

import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import {
  Leaf,
  TrendingUp,
  Layers,
  Award,
  Coins,
  CheckCircle,
  Zap,
  Settings,
  Shield,
  Users,
  Building,
  Lightbulb
} from 'lucide-react';

export function ServicesSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Leaf,
      title: t.services.benefits.climateProtection.title,
      description: t.services.benefits.climateProtection.desc,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: TrendingUp,
      title: t.services.benefits.stableReturn.title,
      description: t.services.benefits.stableReturn.desc,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Layers,
      title: t.services.benefits.efficientUse.title,
      description: t.services.benefits.efficientUse.desc,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Award,
      title: t.services.benefits.positioning.title,
      description: t.services.benefits.positioning.desc,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Coins,
      title: t.services.benefits.noInvestment.title,
      description: t.services.benefits.noInvestment.desc,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const cooperationIcons = [
    Lightbulb, Zap, Settings, CheckCircle, Shield,
    Building, Users, Leaf, Award, TrendingUp,
    Settings, CheckCircle
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            {t.services.title}
          </h2>
        </motion.div>

        {/* Benefits for Landowners */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
            {t.services.benefits.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-green-500">
                  <CardContent className="p-0">
                    <div className={`inline-flex p-3 rounded-full ${benefit.bgColor} mb-4`}>
                      <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cooperation Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.services.cooperation.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.services.cooperation.items.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0">
                  {React.createElement(cooperationIcons[index % cooperationIcons.length], {
                    className: "h-6 w-6 text-green-600 mt-1"
                  })}
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* Key Features Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mt-8 pt-8 border-t border-gray-200"
          >
            <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
              {t.services.badges.tier1Quality}
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
              {t.services.badges.turnkey}
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
              {t.services.badges.noImplementationRisk}
            </Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 px-4 py-2">
              {t.services.badges.epcDev}
            </Badge>
          </motion.div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
            {t.services.process.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stage: "Early Development Stage",
                items: ["Project identification", "Feasibility analysis", "No/hardly resilient milestones achieved"],
                color: "bg-red-50 border-red-200",
                iconColor: "text-red-600"
              },
              {
                stage: "Mid Development Stage",
                items: ["Site secured", "Positive grid assessment, connection offer", "Environmental assessment"],
                color: "bg-yellow-50 border-yellow-200",
                iconColor: "text-yellow-600"
              },
              {
                stage: "Late Development Stage",
                items: ["Building permits", "Grid connection and cable route secured", "PPA/FiT secured or in advanced negotiations"],
                color: "bg-green-50 border-green-200",
                iconColor: "text-green-600"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.stage}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className={`p-6 h-full border-2 ${phase.color} hover:shadow-lg transition-shadow duration-300`}>
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className={`w-8 h-8 rounded-full ${phase.iconColor} bg-white border-2 border-current flex items-center justify-center font-bold mr-3`}>
                        {index + 1}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {phase.stage}
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {phase.items.map((item) => (
                        <li key={`${phase.stage}-${item}`} className="flex items-start gap-2">
                          <CheckCircle className={`h-4 w-4 ${phase.iconColor} mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
