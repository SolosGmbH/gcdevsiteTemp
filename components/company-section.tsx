
'use client';

import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { companyStats, managementTeam } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building, 
  Users, 
  Target, 
  Folder, 
  Zap, 
  Award,
  TrendingUp,
  Leaf
} from 'lucide-react';

function AnimatedCounter({ value, suffix = '', duration = 2000 }: { value: string, suffix?: string, duration?: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [displayValue, setDisplayValue] = React.useState('0');

  React.useEffect(() => {
    if (!inView) return;

    // Extract numeric value
    const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentValue = Math.floor(numericValue * progress);
      const displayText = value.includes('GW') 
        ? `${(currentValue / 10).toFixed(1)} GW`
        : value.includes('€') 
        ? `~€${currentValue} MILLIONEN`
        : value.includes(',')
        ? currentValue.toFixed(1)
        : currentValue.toString();

      setDisplayValue(displayText);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export function CompanySection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: TrendingUp,
      value: companyStats.pipeline,
      label: t.company.pipeline,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Award,
      value: companyStats.rtbValue,
      label: t.company.rtbValue,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      value: companyStats.employees.toString(),
      label: t.company.employees,
      description: t.company.employeesDesc,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Target,
      value: companyStats.focus,
      label: t.company.focus,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Folder,
      value: companyStats.totalProjects.toString(),
      label: t.company.projects,
      description: `${companyStats.securedProjects} ${t.company.projectsDesc}`,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const germanStats = [
    {
      icon: Zap,
      value: companyStats.installedCapacity,
      label: t.company.installedCapacity,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Building,
      value: companyStats.realizedProjects.toString(),
      label: t.company.realizedProjects,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Leaf,
      value: companyStats.co2Savings,
      label: t.company.co2Savings,
      description: t.company.co2Note,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <section id="company" className="py-20 bg-white">
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
            {t.company.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.company.subtitle}
          </p>
        </motion.div>

        {/* Company Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-2`}>
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <p className="text-gray-900 font-semibold mb-1">{stat.label}</p>
                      {stat.description && (
                        <p className="text-sm text-gray-600">{stat.description}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* German Market Success */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Greencells' Beitrag zur deutschen Energiewende
            </h3>
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {t.company.founded2018}
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {t.company.founded2009}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {germanStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex p-4 rounded-full ${stat.bgColor} mb-4`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}>
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="text-gray-900 font-semibold mb-2">{stat.label}</p>
                {stat.description && (
                  <p className="text-sm text-gray-600">{stat.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Management Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.team.management}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {managementTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h4>
                      <p className="text-green-600 font-semibold">
                        {member.position}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {member.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start gap-2 text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{desc}</span>
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
