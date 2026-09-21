#  Portfolio Elvis Kpossaton

Site web portfolio professionnel pour le photographe **Elvis Kpossaton**.  
Design haut de gamme, minimaliste, bilingue (FR/EN), mode sombre/clair, 100 % responsive.

---

##  Stack Technique

| Outil | Rôle |
|-------|------|
| **React 18 + Vite** | Framework & bundler ultra-rapide |
| **Tailwind CSS v3** | Styling (utility-first) |
| **React Router v6** | Navigation entre les pages |
| **Framer Motion** | Animations (fade, scroll, lightbox) |
| **react-i18next** | Multilingue FR/EN avec fichiers JSON |
| **React Context API** | Gestion du thème Dark/Light |
| **Swiper.js** | Sliders (témoignages, diaporamas) |
| **Lucide React** (`react-icons/lu`) | Icônes fines & modernes |

---

##  Architecture du projet

```text
src/
├── assets/images/
│   ├── Elvis1.png                  ← Portrait Hero
│   └── portfolio/                  ← Dossier des photos de projets
│       ├── mariage/
│       ├── portrait/
│       ├── mode/
│       └── corporate/
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx              ← Header desktop + capsule mobile
│   │   ├── MobileMenu.jsx          ← Menu tiroir mobile (3/4 écran)
│   │   └── Footer.jsx              ← Pied de page épuré
│   ├── sections/
│   │   ├── HeroSection.jsx         ← Section principale (photo + nom)
│   │   ├── PortfolioPreview.jsx    ← Aperçu "Mes Univers"
│   │   ├── PhilosophySection.jsx   ← "Ma Vision"
│   │   ├── StatsSection.jsx        ← Compteurs animés
│   │   ├── TestimonialsSection.jsx ← Slider témoignages
│   │   └── CTASection.jsx          ← Appel à l'action final
│   ├── ui/
│   │   ├── Button.jsx              ← Bouton universel
│   │   ├── ThemeToggle.jsx         ← Bascule Dark/Light
│   │   └── LanguageSwitcher.jsx    ← Sélecteur FR/EN
│   └── utils/
│       └── ScrollToTop.jsx         ← Auto-scroll en haut à chaque navigation
│
├── context/
│   └── ThemeContext.jsx            ← Provider Dark/Light + localStorage
│
├── data/
│   └── portfolio.js                ←  FICHIER À MODIFIER POUR AJOUTER DES PROJETS
│
├── i18n/
│   ├── i18n.js                     ← Config i18next
│   └── locales/
│       ├── fr.json                 ← Textes français
│       └── en.json                 ← Textes anglais
│
├── pages/
│   ├── Home.jsx                    ← Accueil
│   ├── Portfolio.jsx               ← Galerie filtrée + Lightbox
│   ├── Services.jsx                ← Prestations & tarifs
│   ├── About.jsx                   ← À propos
│   └── Contact.jsx                 ← Formulaire de contact
│
├── App.jsx                         ← Routes principales
├── main.jsx                        ← Point d'entrée
└── index.css                       ← Styles globaux
```

---

## Installation & Lancement en local

Cloner puis :

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev            # → http://localhost:5173

# Générer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

---

## Personnalisation rapide

### Changer les couleurs (Palette globale)

Modifier `tailwind.config.js` :

```javascript
colors: {
  accent: { DEFAULT: '#C8A97E', hover: '#b5956a' }, // Or doux
  light: {
    bg: '#FAFAF9',        // Fond mode clair
    text: '#1A1A1A',      // Texte mode clair
    // ...
  },
  dark: {
    bg: '#0A0A0A',        // Fond mode sombre
    text: '#F5F5F5',      // Texte mode sombre
    // ...
  }
}
```

### Modifier les textes (FR/EN)

Éditer directement les fichiers :
- `src/i18n/locales/fr.json`
- `src/i18n/locales/en.json`

Les textes se mettent à jour automatiquement sur tout le site.

### Changer la photo du Hero

Remplacer le fichier `src/assets/images/Elvis1.png` par la nouvelle image (garder le même nom OU mettre à jour l'import dans `src/components/sections/HeroSection.jsx`).

---

## Ajouter un projet au Portfolio (⭐ ÉTAPE CLÉ)

Le portfolio est **100 % data-driven** : aucun code React à modifier.  
Tout se passe dans **`src/data/portfolio.js`**.

### Étape 1 : Optimiser les images
Avant d'ajouter une photo, la **compresser impérativement** :
- **Format recommandé :** WebP ou JPG
- **Poids max :** 300 Ko pour miniature, 1,5 Mo pour version pleine
- Outils gratuits : [Squoosh.app](https://squoosh.app), [TinyPNG](https://tinypng.com)

### Étape 2 : Ajouter l'objet du projet

Ouvrir `src/data/portfolio.js` et **dupliquer un bloc** :

```javascript
{
  id: 7,                              // ← Numéro unique (le plus grand + 1)
  title: "Mariage de Sarah & Kevin",  // ← Titre affiché
  category: "mariage",                // ← Catégorie (mariage, mode, portrait, corporate...)
  type: "image",                      // ← "image" ou "video"
  thumbnail: "https://.../cover.jpg", // ← Photo de couverture (grille)
  media: [
    "https://.../photo-1.jpg",        // ← Toutes les photos de l'album
    "https://.../photo-2.jpg",
    "https://www.example.com/video.mp4" // ← Peut mélanger photos ET vidéos !
  ],
  date: "2024-09-15",
  location: "Cotonou, Bénin"
}
```

### Étape 3 : Sauvegarder & pousser
```bash
git add .
git commit -m "Ajout : Mariage de Sarah & Kevin"
git push
```

### Créer une nouvelle catégorie
Il suffit d'utiliser un nouveau mot dans le champ `category` (ex: `"evenementiel"`).  
Le filtre sur la page Portfolio se **crée automatiquement** — aucun code à modifier ailleurs !

---

## Ajouter/Retirer une langue

### Modifier une traduction
Éditer directement `src/i18n/locales/fr.json` ou `en.json`.

### Ajouter une 3ème langue (ex: Espagnol)
1. Créer `src/i18n/locales/es.json` (dupliquer `fr.json` et traduire).
2. Dans `src/i18n/i18n.js`, ajouter :
   ```javascript
   import es from './locales/es.json';
   // ...
   resources: {
     fr: { translation: fr },
     en: { translation: en },
     es: { translation: es },  // ← Ajouter
   }
   ```
3. Dans `src/components/ui/LanguageSwitcher.jsx`, ajouter un bouton pour l'espagnol.

---

## Comment le responsive est géré

Tailwind utilise le principe **Mobile First** :

| Breakpoint | Largeur | Cible |
|-----------|---------|-------|
| (défaut) | < 640px | Mobile |
| `sm:` | ≥ 640px | Grand mobile / petite tablette |
| `md:` | ≥ 768px | Tablette |
| `lg:` | ≥ 1024px | Desktop |
| `xl:` | ≥ 1280px | Grand écran |

Exemple : `text-sm sm:text-base lg:text-lg` = petit sur mobile, moyen sur tablette, grand sur desktop.

---

## Envoyer une nouvelle version sur GitHub

```bash
# 1. Voir ce qui a changé
git status

# 2. Ajouter tout
git add .

# 3. Créer un commit (avec un message clair)
git commit -m "Description du changement"

# 4. Pousser sur GitHub
git push
```

---

## Brancher le formulaire de Contact (quand le client sera prêt)

Actuellement, le formulaire simule un envoi (`setTimeout`).  
Pour recevoir réellement les messages, brancher **EmailJS** :

1. Créer un compte gratuit sur [emailjs.com](https://www.emailjs.com/) (200 emails/mois gratuits).
2. Installer le SDK :
   ```bash
   npm install @emailjs/browser
   ```
3. Dans `src/pages/Contact.jsx`, remplacer la fonction `handleSubmit` par :
   ```javascript
   import emailjs from '@emailjs/browser';

   const handleSubmit = async (e) => {
     e.preventDefault();
     setStatus('sending');
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         formData,
         'YOUR_PUBLIC_KEY'
       );
       setStatus('success');
       setFormData({ name: '', email: '', phone: '', service: '', message: '' });
     } catch {
       setStatus('error');
     }
   };
   ```

---

## Déployer le site en ligne (Vercel — Gratuit)

1. Aller sur [vercel.com](https://vercel.com) et se connecter avec GitHub.
2. Cliquer sur **"Import Project"** → Sélectionner le dépôt `Portfolio-Elvis-KPOSSATON`.
3. Vercel détecte automatiquement Vite. Cliquer sur **Deploy**.
4. En 30 secondes, le site est en ligne à une adresse type `portfolio-elvis-kpossaton.vercel.app`.
5. **Bonus :** Chaque `git push` déclenche automatiquement une nouvelle mise en production !

Domaine personnalisé possible via l'onglet **Settings → Domains** (ex: `www.elviskpossaton.com`).

---

## Résolution des problèmes fréquents

| Problème | Solution |
|----------|----------|
| **Erreur au `npm run dev`** | Supprimer `node_modules` + `package-lock.json`, puis `npm install` |
| **Nouvelle photo n'apparaît pas** | Vérifier le lien dans `portfolio.js`, l'ID doit être unique |
| **Le mode sombre ne fonctionne pas** | Vider le `localStorage` du navigateur (F12 → Application → Storage) |
| **Le déploiement Vercel échoue** | Lancer `npm run build` en local pour voir l'erreur exacte |
| **Une traduction manque** | Vérifier que la clé existe dans les **deux** fichiers (fr.json ET en.json) |

---

## 📅 Maintenance recommandée

| Fréquence | Action |
|-----------|--------|
| **À chaque nouvelle photo** | Compresser + ajouter dans `portfolio.js` + `git push` |
| **Tous les 3 mois** | Tester le site sur mobile + desktop + vérifier les liens sociaux |
| **Tous les 6 mois** | `npm outdated` pour vérifier les dépendances |
| **Tous les 12 mois** | Mettre à jour les grandes dépendances (`npm update`) et re-tester |

---

## Responsabilités

| Rôle | Qui | Quoi |
|------|-----|------|
| **Contenu** (photos, textes, tarifs) | Elvis / Toi | Fichiers `portfolio.js`, JSON, images |
| **Développement / Bugs** | Toi (Hermann) | Code React, styles, animations |
| **Déploiement** | Toi | Vercel / GitHub |

---

 2026 — Portfolio Elvis Kpossaton. Tous droits réservés.