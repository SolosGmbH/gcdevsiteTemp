
# GC Development Group Website

Eine moderne, responsive Website für die GC Development Group - Ihr zuverlässiger Partner für Photovoltaik-Projekte.

## ✨ Features

- 🌐 **Zweisprachig**: Vollständige Unterstützung für Deutsch und Englisch
- 📱 **Responsive Design**: Optimiert für alle Geräte und Bildschirmgrößen
- ⚡ **Next.js 14**: Moderne React-Framework mit App Router
- 🎨 **Tailwind CSS**: Utility-First CSS Framework
- 🚀 **Performance**: Optimiert für schnelle Ladezeiten
- 📊 **Animationen**: Smooth Framer Motion Animationen
- 🛡️ **TypeScript**: Vollständig typisiert für bessere Entwicklererfahrung

## 🚀 Deployment bei Vercel

### Schritt 1: GitHub Repository erstellen

1. Gehen Sie zu [GitHub](https://github.com) und erstellen Sie ein neues Repository
2. Laden Sie diese Dateien in Ihr Repository hoch (außer `node_modules`, `.next`, etc.)
3. Pushen Sie alle Dateien zu GitHub

### Schritt 2: Vercel Deployment

1. Gehen Sie zu [Vercel](https://vercel.com)
2. Melden Sie sich mit Ihrem GitHub Account an
3. Klicken Sie auf "New Project"
4. Wählen Sie Ihr GitHub Repository aus
5. **Wichtig**: Setzen Sie den **Root Directory** auf `app`
6. Vercel erkennt automatisch Next.js und konfiguriert alles

### Schritt 3: Build Settings (automatisch erkannt)

```
Framework Preset: Next.js
Build Command: yarn build
Output Directory: .next
Install Command: yarn install
Development Command: yarn dev
```

## 🛠️ Lokale Entwicklung

```bash
# In das app-Verzeichnis wechseln
cd app

# Dependencies installieren
yarn install

# Development Server starten
yarn dev

# Produktions-Build erstellen
yarn build

# Produktions-Server starten
yarn start
```

## 📁 Projektstruktur

```
/
├── app/                    # Next.js App (Hauptverzeichnis)
│   ├── app/               # App Router Seiten
│   ├── components/        # React Komponenten
│   ├── contexts/          # React Contexts (Sprachauswahl)
│   ├── lib/              # Utilities und Konfiguration
│   ├── public/           # Statische Dateien (Logo, Bilder)
│   └── package.json      # Dependencies
├── vercel.json           # Vercel Konfiguration
└── README.md            # Diese Datei
```

## 🌐 Sprachauswahl

Die Website unterstützt vollständig:
- 🇩🇪 **Deutsch** (Standard)
- 🇬🇧 **Englisch**

Alle Texte werden über das `translations.ts` System verwaltet.

## 📞 Support

Bei Fragen zum Deployment oder zur Website-Konfiguration:
- Überprüfen Sie die Vercel Deployment Logs
- Stellen Sie sicher, dass der Root Directory auf `app` gesetzt ist
- Alle Dependencies werden automatisch installiert

## 🏢 Über GC Development Group

Ihr zuverlässiger Partner für Photovoltaik-Projekte - von der Entwicklung bis zum Betrieb.

**Kontakt:**
- Website: [Ihre Domain]
- E-Mail: [Ihre E-Mail]
- Telefon: [Ihre Telefonnummer]

---

**Erstellt mit ❤️ für nachhaltige Energie und moderne Webtechnologien**
