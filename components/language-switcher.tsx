'use client';

import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
      <Button
        variant={language === 'de' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('de')}
        className={`text-xs px-3 py-1 ${
          language === 'de' 
            ? 'bg-green-600 text-white shadow-sm' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        DE
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={`text-xs px-3 py-1 ${
          language === 'en' 
            ? 'bg-green-600 text-white shadow-sm' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </Button>
      <Button
        variant={language === 'es' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('es')}
        className={`text-xs px-3 py-1 ${
          language === 'es' 
            ? 'bg-green-600 text-white shadow-sm' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        ES
      </Button>
    </div>
  );
}