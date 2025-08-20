# LEGNA - Ristorante Italiano Caracas

*La brasa que une — La brace che unisce*

Landing page premium per ristorante italiano con cocina de brasa, vino auténtico e club privé a Caracas.

## 🔥 Características

- **Design System Completo**: Palette LEGNA (carbone, ember, ferro, legno, rame)
- **Animazioni GSAP**: ScrollTrigger per sezione stairs signature + micro-interazioni
- **SEO Ottimizzato**: Schema.org, OpenGraph, sitemap, performance Lighthouse >90
- **Responsive**: Mobile-first con fallback video per effetti pesanti
- **Analytics**: GTM ready con dataLayer events
- **Accessibilità**: WCAG 2.2 AA compliant
- **Performance**: Bundle <250KB gzip, lazy loading, WebP images

## 🚀 Quick Start

```bash
# Installa dipendenze
npm install

# Avvia dev server
npm run dev

# Build per produzione
npm run build

# Preview build locale
npm run preview
```

Il sito sarà disponibile su `http://localhost:8080`

## 📁 Struttura Progetto

```
/
├── src/
│   ├── components/          # Componenti React
│   │   ├── ui/             # Shadcn components
│   │   ├── Hero.tsx        # Hero con particelle ember
│   │   ├── Stairs.tsx      # Sezione signature con GSAP
│   │   ├── Reservation.tsx # Form prenotazioni + VIP
│   │   └── ...
│   ├── assets/             # Immagini ottimizzate
│   │   ├── logo-legna.svg  # Logo vettoriale
│   │   ├── hero-bg.webp    # Background hero
│   │   └── stairs-fallback.jpg # Video fallback mobile
│   ├── lib/
│   │   └── animations.ts   # GSAP timeline + ScrollTrigger
│   ├── types/              # TypeScript definitions
│   └── index.css          # Design system CSS variables
├── index.html             # SEO ottimizzato
└── package.json          # Vite + dipendenze
```

## 🎨 Design System

### Palette Colori (HSL)
```css
--color-carbon: 0 0% 7%;      /* #111111 nero carbone */
--color-ember: 8 85% 54%;     /* #E54728 rosso brace */
--color-iron: 0 0% 29%;       /* #4A4A4A grigio ferro */
--color-wood: 33 35% 84%;     /* #E7D8C9 beige legno */
--color-copper: 30 55% 46%;   /* #B87333 accento rame */
```

### Tipografia
- **Display**: Playfair Display (titoli, eleganza italiana)
- **Body**: Inter (leggibilità, modernità)
- **Scale**: H1 48-96px, H2 36-44px, body 18px/28px
- **Spacing**: 8-16-24-40-64px rhythm

### Componenti
- **Buttons**: Primary (ember), Secondary (outline wood)
- **Cards**: Shadow elegant, hover ember
- **Forms**: Validation, accessibility, success states
- **Navigation**: Sticky, smooth scroll, mobile drawer

## ⚡ Animazioni GSAP

### Sezione Stairs (Signature)
```javascript
// Timeline ScrollTrigger con 3 fasi:
// 1. Brasa (0→30%): steps glow ember + particelle
// 2. Respiro (30→70%): walls breathing light waves  
// 3. Revel (70→100%): LEGNA logo emergence con glow rame

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#stairs",
    start: "top top", 
    end: "+=250%",
    pin: true,
    scrub: 1
  }
});
```

### Performance
- **Mobile**: Fallback video MP4 8-10s autoplay muted
- **Reduced Motion**: Rispetta `prefers-reduced-motion`
- **Low-end**: Feature detect + disabilita effetti pesanti <768px

## 📊 Analytics & Tracking

### Eventi GTM (dataLayer)
```javascript
// CTA clicks
{ event: "cta_click", label: "reservar_mesa|lista_privada", location: "hero|stairs|club" }

// Stairs signature view (60% scroll)  
{ event: "stairs_view", location: "stairs_section", progress: 0.6 }

// Form submissions
{ event: "form_submit", form: "reservation|vip", preferences: {...} }

// Social interactions
{ event: "social_click", network: "instagram|tiktok", location: "footer|marketing" }
```

### Setup GTM Container
1. Crea container GTM
2. Aggiungi tracking code a `index.html`
3. Configura triggers su eventi dataLayer
4. Test con GTM Preview mode

## 🌐 SEO & Performance

### Meta Tags
- **Title**: "LEGNA — la brasa italiana que une Caracas"
- **Description**: 150-160 char es-VE con keywords
- **OpenGraph**: 1200×630 hero image, locale es_VE
- **Schema.org**: Restaurant + Organization JSON-LD

### Prestazioni
- **Lighthouse**: >90 desktop, >80 mobile target
- **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1
- **Images**: WebP + AVIF fallback, lazy loading, responsive srcset
- **Fonts**: Preload critical, font-display: swap

### Internationalization (Future)
- Structure pronta per i18n
- Contenuto JSON separato
- Slug SEO friendly multi-lingua

## 🔧 Configurazione Deploy

### Netlify (Consigliato)
```bash
# Build command
npm run build

# Publish directory  
dist

# Environment variables
VITE_GTM_ID=GTM-XXXXXXX
VITE_API_ENDPOINT=https://api.legna-caracas.com
```

### Vercel
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Redirects & Headers
```toml
# _redirects (Netlify)
/*    /index.html   200

# Headers CSP
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Content-Security-Policy: default-src 'self'
```

## 📱 Integrazioni

### Forms Backend
```javascript
// Mock endpoint per development
POST /api/booking
{
  "name": "string",
  "email": "string", 
  "phone": "string",
  "people": number,
  "date": "YYYY-MM-DD",
  "time": "HH:mm", 
  "preferences": {
    "wine": boolean,
    "club": boolean, 
    "vip": boolean
  },
  "comments": "string"
}

// Response
{
  "success": true,
  "reservationId": "RES-2024-001",
  "message": "¡Listo! Te esperamos alrededor del fuego."
}
```

### Email Templates
- **Reservation Confirmation**: HTML + plain text
- **VIP Club Double Opt-in**: Marketing compliance
- **Reminder**: 24h before reservation

### Maps Integration
```html
<!-- Lazy load Google Maps -->
<iframe 
  src="https://maps.google.com/embed?..." 
  loading="lazy"
  title="LEGNA Caracas Location"
></iframe>
```

## 🧪 Testing

### Lighthouse Audit
```bash
# Install CLI
npm install -g lighthouse

# Test performance
lighthouse https://legna-caracas.com --only-categories=performance,seo,accessibility,best-practices --chrome-flags="--headless"
```

### Accessibility Testing
- **Keyboard Navigation**: Tab order, focus indicators
- **Screen Readers**: ARIA labels, semantic HTML
- **Color Contrast**: >4.5:1 ratio verification
- **Motion**: prefers-reduced-motion respect

### Cross-browser
- **Chrome/Edge**: Full GSAP support
- **Firefox**: ScrollTrigger polyfills
- **Safari**: WebP fallback JPEG
- **Mobile Safari**: Touch interactions, viewport units

## 🔒 Security

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
               font-src 'self' https://fonts.gstatic.com;
               img-src 'self' data: https:;
               connect-src 'self' https://api.legna-caracas.com;">
```

### Privacy
- **Cookie Banner**: GDPR/LGPD compliance
- **Data Processing**: Consent management  
- **Analytics**: IP anonymization
- **Forms**: Double opt-in VIP club

## 🆘 Support & Maintenance

### Error Monitoring
```javascript
// Sentry integration (optional)
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production"
});
```

### Performance Monitoring
- **GTM Enhanced Ecommerce**: Conversion tracking
- **Core Web Vitals**: Real User Monitoring
- **Error Tracking**: Console errors, failed requests
- **A/B Testing**: Form variations, CTA positioning

### Content Updates
```javascript
// Content JSON structure per updates facili
{
  "hero": {
    "eyebrow": "Caracas, muy pronto",
    "title": "LEGNA", 
    "subtitle": "la brasa que une — La brace che unisce"
  },
  "menu": [...],
  "team": [...],
  "wine": [...]
}
```

## 🎯 Roadmap

### Phase 2 (Post-launch)
- [ ] Online reservations API integration
- [ ] Menu digitale QR codes
- [ ] Instagram feed live integration  
- [ ] Virtual tour 360° stairs section
- [ ] Multi-language (EN/IT/ES)

### Phase 3 (Growth)
- [ ] Loyalty program integration
- [ ] Events booking system
- [ ] Wine e-commerce section
- [ ] Mobile app companion
- [ ] AR menu experiences

## 📄 Licenze & Credits

### Fonts
- **Playfair Display**: SIL Open Font License 1.1
- **Inter**: SIL Open Font License 1.1
- Hosting: Google Fonts CDN

### Libraries
- **GSAP**: Standard License (Commercial)
- **React**: MIT License
- **Tailwind CSS**: MIT License
- **Lucide Icons**: ISC License

### Images
- Hero background: Generated via AI (Flux.dev)
- Wine bottles: Generated via AI (Flux.dev) 
- Team avatars: Placeholder (sostituire con foto reali)

---

**Sviluppato con ❤️ per LEGNA Caracas**  
*Dal fuoco nasce la famiglia* 🔥

*Sviluppato per LEGNA Caracas*