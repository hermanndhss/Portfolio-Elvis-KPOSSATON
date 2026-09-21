/**
 * FICHIER DE DONNÉES CENTRALISÉ DU PORTFOLIO
 * 
 * Pour ajouter un nouveau projet ou album :
 * 1. Dupliquez un des blocs ci-dessous.
 * 2. Donnez-lui un "id" unique (ex: 5, 6, 7...).
 * 3. Indiquez le "title" (Nom du projet / de l'événement).
 * 4. Choisissez une "category" (mariage, mode, portrait, corporate...).
 * 5. Mettez le type : "image" ou "video".
 * 6. "thumbnail" : l'image de couverture qui apparaît sur la grille.
 * 7. "media" : le tableau des photos (ou vidéo) qui défileront en grand dans l'album.
 */

const portfolioData = [
  // ================= MARIAGES =================
  {
    id: 1,
    title: "Mariage au Château de Versailles",
    category: "mariage",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    media: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80"
    ],
    date: "2024-06-15",
    location: "Château de Versailles, France"
  },
  {
    id: 2,
    title: "Mariage d'Élégance à Cotonou",
    category: "mariage",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    media: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
    ],
    date: "2024-08-20",
    location: "Cotonou, Bénin"
  },

  // ================= MODE / ÉDITORIAL =================
  {
    id: 3,
    title: "Série Haute Couture Dior",
    category: "mode",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    media: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80"
    ],
    date: "2024-03-20",
    location: "Paris, France"
  },
  {
    id: 4,
    title: "Collection Été Minimaliste",
    category: "mode",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    media: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80"
    ],
    date: "2024-05-12",
    location: "Studio Cotonou"
  },

  // ================= PORTRAIT =================
  {
    id: 5,
    title: "Regards d'Auteurs",
    category: "portrait",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    media: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80"
    ],
    date: "2024-01-10",
    location: "Studio Minimalist"
  },

  // ================= CORPORATE / VIDÉO =================
  {
    id: 6,
    title: "Architecture & Business",
    category: "corporate",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    media: [
      "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    date: "2024-05-02",
    location: "La Défense, Paris"
  }
];

export default portfolioData;